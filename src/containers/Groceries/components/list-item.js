import React from 'react';
import { Icon } from 'react-fa';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showIcon: 'hidden'
    };

    this.onItemClick = this.onItemClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.showIcon = this.showIcon.bind(this);
    this.hideIcon = this.hideIcon.bind(this);
  }

  onItemClick() {
    const { id, checked } = this.props.item;
    this.props.onToggle(this.props.authToken, id, checked);
  }

  onDeleteClick() {
    const { id } = this.props.item;
    this.props.onDeleteItem(this.props.authToken, id);
  }

  showIcon() {
    this.setState({
      showIcon: ''
    });
  }

  hideIcon() {
    this.setState({
      showIcon: 'hidden'
    });
  }

  render() {
    // set icon - checked or empty box
    let icon;
    if (this.props.item.checked) {
      icon = <Icon name="check-square-o" className="box-icon" />;
    } else {
      icon = <Icon name="square-o" className="box-icon" />;
    }

    return (
      <li
        className="grocery-item"
        onMouseEnter={() => this.showIcon()}
        onMouseLeave={() => this.hideIcon()}
      >
        <button
          className={this.props.item.checked ? 'checked item-btn' : 'not-checked item-btn'}
          onClick={() => this.onItemClick()}
        >
          {icon}
          {this.props.item.name}
        </button>
        <Icon name="times" className={`delete-item ${this.state.showIcon}`} onClick={() => this.onDeleteClick()} />
      </li>
    );
  }
}
