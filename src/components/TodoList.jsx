import React from 'react';

function TodoList({ item, index, deleteItem }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 0',
        borderBottom: '1px solid #eee'
      }}
    >
      <span>{item}</span>
      <button
        onClick={() => deleteItem(index)}
        style={{
          background: 'transparent',
          color: '#e74c3c',
          border: '1px solid #e74c3c',
          borderRadius: '3px',
          padding: '2px 8px',
          cursor: 'pointer',
          fontSize: '0.95rem'
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoList;