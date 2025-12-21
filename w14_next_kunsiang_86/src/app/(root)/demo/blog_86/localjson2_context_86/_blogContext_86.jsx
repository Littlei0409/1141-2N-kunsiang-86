'use client';

import { useState, createContext, useContext } from 'react';
import blogData_86 from '../../_assets/data/blogData.json';

const BlogContext = createContext();

export const BlogContextProvider_86 = ({ children }) => {
  const [name, setName] = useState('kunsiang');
  const [id, setId] = useState(213410086);
  const [blogs_86, setBlogs_86] = useState(blogData_86);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs_86(blogs_86.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger');
    setBlogs_86([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success');
    setBlogs_86([]);
    setBlogs_86(blogData_86);
  }; 
  return <BlogContext.Provider value={{
    name,
    id,
    blogs_86,
    alert,
    showAlert,
    removeItem,
    clearAllBlogs,
    loadAllBlogs,
  }}>{children}</BlogContext.Provider>;
};

export const useBlogContext_86 = () => {
  return useContext(BlogContext);
};