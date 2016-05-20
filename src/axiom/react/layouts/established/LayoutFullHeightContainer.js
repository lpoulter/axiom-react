import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutFullHeightContainer extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
    hAlign: { oneOf: ['left', 'center', 'right'] },
    vAlign: { oneOf: ['top', 'middle', 'bottom'] },
  };

  render() {
    const { children, className, vAlign, hAlign } = this.props;
    const classes = classnames(className,
      'ax-layout--established__full-height', {
        'ax-layout--established__full-height--top': vAlign === 'top',
        'ax-layout--established__full-height--middle': vAlign === 'middle',
        'ax-layout--established__full-height--bottom': vAlign === 'bottom',
        'ax-layout--established__full-height--left': hAlign === 'left',
        'ax-layout--established__full-height--center': hAlign === 'center',
        'ax-layout--established__full-height--right': hAlign === 'right',
      }
    );

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(LayoutFullHeightContainer)(
  addPropTypes('global'),
  addClassName('global'),
);
