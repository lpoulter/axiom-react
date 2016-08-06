import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Paragraph extends Component {
  static propTypes = {
    children: { node: true },
    space: { bool: true },
  };

  render() {
    const { className, children, space, ...rest } = this.props;
    const classes = classnames(className, {
      'ax-text--no-space': space === false,
    });

    return (
      <p { ...rest } className={ classes }>
        { children }
      </p>
    );
  }
}

export default enhance(Paragraph)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
