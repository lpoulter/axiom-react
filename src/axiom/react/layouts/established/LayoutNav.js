import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import LayoutNavList from './LayoutNavList';

export class LayoutNav extends Component {
  static propTypes = {
    className: { string: true },
    items: { array: true, isRequired: true },
    onItemClick: { func: true },
  };

  render() {
    const {
      className,
      items,
      onItemClick = () => {},
    } = this.props;

    return (
      <nav className={ classnames(className, 'ax-layout--established-nav') }>
        <LayoutNavList items={ items } onItemClick={ onItemClick } />
      </nav>
    );
  }
}

export default enhance(LayoutNav)(
  addPropTypes('global'),
  addClassName('global'),
);

