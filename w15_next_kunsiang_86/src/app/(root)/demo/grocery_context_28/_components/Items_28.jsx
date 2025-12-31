'use client';

import SingleItem_28 from './SingleItem_28';
import { useGroceryContext_28 } from '../_groceryContext_28';

const Items_28 = () => {
  const { items } = useGroceryContext_28();
  return (
    <div className='items'>
      {items?.map((item) => {
        return <SingleItem_28 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_28;
