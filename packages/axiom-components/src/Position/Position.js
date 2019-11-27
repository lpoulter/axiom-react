import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import omit from 'lodash.omit';
import { Manager, Reference, Popper } from 'react-popper';
import classnames from 'classnames';
import { findComponent } from '@brandwatch/axiom-utils';
import Portal from '../Portal/Portal';
import { PositionSourceRef } from './PositionSource';
import { PositionTargetRef } from './PositionTarget';
import {
  positionToPlacement,
  getPlacementFlipOrder,
  placementToPosition,
} from './_utils';
import './Position.css';

/* eslint-disable react/no-find-dom-node */
export default class Position extends Component {
  static propTypes = {
    /**
     * Allows the boundary element for the positioning to be set.
     */
    boundariesElement: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.oneOf(['scrollParent', 'viewport', 'window']),
    ]),
    /**
     * Children inside Position this should contain all of and
     * only PositionSource and PositionTarget or just a PositionSource
     * in the case of a given reference!
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
    /** Class name to be appended to the element */
    className: PropTypes.string,
    /**
     * Adds control to conditionally enable or disable the positioning logic.
     * Must be true for isVisible to take effect.
     */
    enabled: PropTypes.bool,
    /** Adds control of content flipping fallbacks. */
    flip: PropTypes.oneOf(['anticlockwise', 'clockwise', 'mirror']),
    /** Toggles the visibility of the PositionSource */
    isVisible: PropTypes.bool.isRequired,
    /** Controls the starting offset of the content */
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    /**
     * When provided a mask will be placed behind PositionSource, where this
     * function is called when clicked.
     */
    onMaskClick: PropTypes.func,
    /**
     * Controls the starting position around PositionTarget in which the
     * PositionSource will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * If Position should be attached to an element outside of the React context,
     * either a HTMLElement reference or a Popper.js compatible referenceObject
     * (see https://popper.js.org/popper-documentation.html#referenceObject) can
     * be passed in.
     */
    reference: PropTypes.object,
    /** Toggle that allows the arrow of the Context component to be hidden */
    showArrow: PropTypes.bool,
  };

  static defaultProps = {
    boundariesElement: 'viewport',
    enabled: true,
    flip: 'clockwise',
    offset: 'middle',
    position: 'top',
    showArrow: false,
  };

  render() {
    const {
      boundariesElement,
      children,
      className,
      enabled,
      isVisible,
      flip,
      onMaskClick,
      reference,
      showArrow,
      position: initialPosition,
      offset,
      ...rest
    } = this.props;
    const classes = classnames(
      'ax-position',
      {
        'ax-position--arrow': showArrow,
      },
      className
    );

    const props = omit(rest, ['flip', 'offset', 'onPositionChange']);

    const placement = positionToPlacement(initialPosition, offset);

    return (
      <Manager>
        { !reference && (
          <Reference>
            { ({ ref }) =>
              cloneElement(findComponent(children, PositionTargetRef), {
                baseRef: ref,
                inputRef: ref,
              })
            }
          </Reference>
        ) }
        { enabled && isVisible && <Portal { ...props } key="portal">
          <Popper
              modifiers={ {
                preventOverflow: {
                  boundariesElement,
                },
                flip: {
                  behavior: getPlacementFlipOrder(placement, flip),
                },
              } }
              placement={ placement }
              referenceElement={ reference }>
            {
                ({ placement, ref, style, arrowProps }) => {
                  let position = initialPosition;
                  if (placement) {
                    position = placementToPosition(placement)[0];
                  }

                  return (
                    <div
                        className={ classes }
                        data-popper-placement={ placement }
                        ref={ ref }
                        style={ style }>
                      <div>
                        { onMaskClick && (
                          <div
                              className="ax-position__mask"
                              onClick={ onMaskClick }/>
                        ) }
                        { cloneElement(
                          findComponent(children, PositionSourceRef),
                          {
                            arrowRef: showArrow ? arrowProps.ref : undefined,
                            position,
                            arrowStyle: arrowProps.style,
                          }
                        ) }
                      </div>
                    </div>
                  );
                }
              }
          </Popper>
        </Portal> }
      </Manager>
    );
  }
}
