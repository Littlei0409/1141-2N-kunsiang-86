'use client';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

import Form from './_components/Form_28';
import Items from './_components/Items_28';

import Wrapper from '../_assets/wrapper/Grocery_28';

const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(list);
    } else {
      list = [];
    }
    return list;
  }
  return []; // Return default for server-side
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const GroceryPage_28 = () => {
  const [items, setItems] = useState([]);

  // Use useEffect to load from localStorage ONLY in the browser
  useEffect(() => {
    const storedList = getLocalStorage(); // This now runs safely on the client
    if (storedList.length > 0) {
      setItems(storedList);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added successfully!');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.warning('item deleted');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center' autoClose={3000} />
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_28;
