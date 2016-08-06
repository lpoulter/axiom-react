import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Heading extends Component {
  static propTypes = {
    level: { oneOf: [1, 2, 3, 4, 5], isRequired: true },
    space: { bool: true },
  };

  render() {
    const { className, level, space, ...rest } = this.props;
    const classes = classnames(className, {
      'ax-text--no-space': space === false,
    });

    switch (level) {
    case 1:
      return <h1 { ...rest } className={ classes } />
    case 2:
      return <h2 { ...rest } className={ classes } />
    case 3:
      return <h3 { ...rest } className={ classes } />
    case 4:
      return <h4 { ...rest } className={ classes } />
    case 5:
      return <h5 { ...rest } className={ classes } />
    default:
      return null;
    }
  }
}

export default enhance(Heading)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
