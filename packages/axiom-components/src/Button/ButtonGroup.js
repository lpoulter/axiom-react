import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import InlineGroup from '../InlineGroup/InlineGroup';

export default class ButtonGroup extends Component {
  static propTypes = {
    /** Content inserted into the group, ideally Buttons */
    children: PropTypes.node.isRequired,
    /** Whether the child Buttons should be joined */
    joined: PropTypes.bool,
  };

  render() {
    const { children, joined, ...rest } = this.props;

    const mappedChildren = React.Children.map(children, child => {
      return React.cloneElement(child, {
        joined,
      });
    });

    return (
      <Base
          space="x6"
          { ...rest }
          Component={ joined ? 'div' : InlineGroup }
          className="ax-button-group"
          textBreak={ joined ? 'none' : null }>
        { mappedChildren }
      </Base>
    );
  }
}
