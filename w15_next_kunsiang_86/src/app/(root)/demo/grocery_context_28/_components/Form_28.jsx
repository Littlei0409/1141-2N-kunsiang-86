'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useGroceryContext_28 } from '../_groceryContext_28';

const Form_28 = () => {
  const [newItemName, setNewItemName] = useState('');
  const { addItem } = useGroceryContext_28();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('please enter value');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form_28;
