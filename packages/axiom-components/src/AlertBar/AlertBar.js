import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import AlertIcon from '../AlertIcon/AlertIcon';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import Text from '../Typography/Text';

import { Flex } from 'flex-wrapper-react';
import './AlertBar.css';


export default class AlertBar extends Component {
  static propTypes = {
    /** Content displayed next to the AlertIcon */
    children: PropTypes.node.isRequired,
    /** SKIP */
    className: PropTypes.string,
    /** An optional callback that when given adds a removable cross */
    onRemoveClick: PropTypes.func,
    /** Size of the AlertBar */
    size: PropTypes.oneOf(['small', 'medium']),
    /** Type of AlertBar that affects the coloring and icon */
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  };

  static defaultProps = {
    size: 'small',
    type: 'info',
  };

  render() {
    const { children, size, type, onRemoveClick, ...rest } = this.props;
    const classes = classnames('ax-alert-bar', `ax-alert-bar--${size}`, `ax-alert-bar--${type}`);

    return (
      <Base { ...rest } className={ classes }>
        <Flex alignItems="center" gap justifyContent="center">

          <AlertIcon
              className="flex-shrink"
              style="subtle"
              theme="day"
              type={ type } />


          <Text className="flex-grow" textColor="night" textStrong>{ children }</Text>

          { onRemoveClick && (
            <Link className="flex-shrink" onClick={ onRemoveClick } style="night">
              <Icon name="cross" />
            </Link>
          ) }
        </Flex>
      </Base>
    );
  }
}
