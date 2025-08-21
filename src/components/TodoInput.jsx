import React, { useState } from 'react';

function TodoInput({ addList }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    addList(input);
    setInput('');
  };

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task..."
        style={{
          flex: 1,
          padding: '8px',
          borderRadius: '6px',
          border: '1px solid #ddd',
          fontSize: '1rem'
        }}
      />
      <button
        onClick={handleAdd}
        style={{
          background: '#222',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;