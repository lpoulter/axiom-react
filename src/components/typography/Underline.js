import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Underline extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <u { ...rest }>
        { children }
      </u>
    );
  }
}

export default enhance(Underline)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
