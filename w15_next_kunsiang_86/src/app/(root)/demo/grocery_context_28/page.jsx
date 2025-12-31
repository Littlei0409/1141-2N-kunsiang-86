'use client';

import Form_28 from './_components/Form_28';
import Items_28 from './_components/Items_28';
import { ToastContainer, toast } from 'react-toastify';

import Wrapper from '../_assets/wrapper/Grocery_28';
import { GroceryContextProvider_28 } from './_groceryContext_28';

const GroceryPage_28 = () => {
  return (
    <GroceryContextProvider_28>
      <GroceryContent_28 />
    </GroceryContextProvider_28>
  );
};

const GroceryContent_28 = () => {
  return (
    <Wrapper>
      <section className='section-center'>
        <ToastContainer position='top-center' autoClose={3000} />
        <Form_28 />
        <Items_28 />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_28;
