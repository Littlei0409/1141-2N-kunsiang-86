'use client';

import { useState } from 'react';

import BlogList2_86 from './_components/BlogList2_86.jsx';
import Wrapper from '../../_assets/Wrapper/Blog2_86';
import Alert_86 from '../../_components/Alert_86';

import { BlogContextProvider_86, useBlogContext_86 } from './_blogContext_86.jsx';

const BlogLocalJsonPage2_86 = () => {
  
  return (
    <BlogContextProvider_86>
      <Content_86 />
    </BlogContextProvider_86>
  );
};

const Content_86 = () => {
  const {  
    name, 
    id, 
    blogs_86, 
    alert, 
    showAlert, 
    removeItem, 
    clearAllBlogs, 
    loadAllBlogs 
  } = useBlogContext_86();
  return(
    <Wrapper>
      {alert.show && <Alert_86 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs context from local json 2 -- {name}, {id}{' '}
          </h2>
        </div>
        <BlogList2_86 />
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

export default BlogLocalJsonPage2_86;
