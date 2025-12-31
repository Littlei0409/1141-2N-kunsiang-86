'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_28';
import Product_28 from '../../_componemts/Product_28';

import { supabase } from '@/db/clientSupabase';

const FetchShopByCategory_28 = () => {
  const [shop_28, setShop_28] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category', category);

  const fetchShopFromSupabase = async () => {
  try {
    let { data, error } = await supabase
      .from('category2_28')
      .select('*, shop2_28(*)')
      .eq('cname', category);

    console.log('data', data[0].shop2_28);

    if (data.length !== 0) {
      setShop_28(data[0].shop2_28);
    }
  } catch (err) {
    console.log(err);
  }
};


  useEffect(() => {
    fetchShopFromSupabase();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center'> HU HAO, 213417149 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_28?.map((item) => {
              const { pid, pname, price, img_url } = item;
              return (
                <Product_28
                  key={pid}
                  img_url={img_url}
                  pname={pname}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_28;
