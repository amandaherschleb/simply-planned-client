import React from 'react';
import { Icon } from 'react-fa';

import AddGroceryForm from './add-grocery-form';
import './layout.css';

export default function Layout(props) {
  function onItemClick(e) {
    const { id } = e.currentTarget;
    const checked = e.currentTarget.className === 'checked';
    props.onToggle(props.authToken, id, checked);
  }

  function onRemoveButtonClick() {
    const confirmDelete = window.confirm('Delete all crossed off items?');
    if (confirmDelete) {
      props.onRemoveItems(props.authToken);
    }
  }

  const itemList = props.groceries.map((item) => {
    // set icon
    let icon;
    if (item.checked) {
      icon = <Icon name="check-square-o" className="box-icon" />;
    } else {
      icon = <Icon name="square-o" className="box-icon" />;
    }

    return (
      <li
        key={item.id}
        className="grocery-item"
      >
        <button
          id={item.id}
          className={item.checked ? 'checked' : 'not-checked'}
          onClick={e => onItemClick(e)}
        >
          {icon}
          {item.name}
        </button>
      </li>
    );
  });

  return (
    <div className="row">
      <div>
        <span
          className="remove-items"
          onClick={onRemoveButtonClick}
          role="button"
          tabIndex={0}
          onKeyPress={onRemoveButtonClick}
        >
          <Icon name="trash-o" />
        </span>
      </div>

      <h2 className="list-header">Grocery List</h2>

      <ul className="grocery-list">
        {itemList}
      </ul>

      <AddGroceryForm
        onAddGroceryItem={values => props.onAddGroceryItem(props.authToken, values)}
      />
    </div>
  );
}
