'use client';

import { useState, createContext, useContext } from 'react';
import blogData_28 from '../../_assets/data/blogData.json';

const BlogContext = createContext();

export const BlogContextProvider_28 = ({ children }) => {
  const [name, setName] = useState('Chuanfu');
  const [id, setId] = useState(213410128);
  const [blogs_28, setBlogs_28] = useState(blogData_28);
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
    setBlogs_28(blogs_28.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger');
    setBlogs_28([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success');
    setBlogs_28([]);
    setBlogs_28(blogData_28);
  }; 
  return <BlogContext.Provider value={{
    name,
    id,
    blogs_28,
    alert,
    showAlert,
    removeItem,
    clearAllBlogs,
    loadAllBlogs,
  }}>{children}</BlogContext.Provider>;
};

export const useBlogContext_28 = () => {
  return useContext(BlogContext);
};