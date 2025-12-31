'use client';

import { useState } from 'react';

import BlogList2_28 from './_components/BlogList2_28.jsx';
import Wrapper from '../../_assets/wrapper/Blog2_28.jsx';
import Alert_28 from '../../_components/Alert_28.jsx';

import { BlogContextProvider_28, useBlogContext_28 } from './_blogContext_28.jsx';

const BlogLocalJsonPage2_28 = () => {
  
  return (
    <BlogContextProvider_28>
      <Content_28 />
    </BlogContextProvider_28>
  );
};

const Content_28 = () => {
  const {  
    name, 
    id, 
    blogs_28, 
    alert, 
    showAlert, 
    removeItem, 
    clearAllBlogs, 
    loadAllBlogs 
  } = useBlogContext_28();
  return(
    <Wrapper>
      {alert.show && <Alert_28 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs context from local json 2 -- {name}, {id}{' '}
          </h2>
        </div>
        <BlogList2_28 />
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded'
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogLocalJsonPage2_28;
