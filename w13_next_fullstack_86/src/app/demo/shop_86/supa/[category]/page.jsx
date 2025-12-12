'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_86';

import Product_xx from '../../_components/Product_86';

import { supabase } from '@/db/clientSupabase';

const FetchShopByCategory_86 = () => {
  const [shop_86, setShop_86] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category', category);

  const fetchShopFromSupabase = async () => {
    try {
      let { data, error } = await supabase
        .from('category2_86')
        .select('*, shop2_86(*)')
        .eq('cname', category);

      console.log('data', data);
      if (data.length !== 0) {
        setShop_86(data[0].shop2_86);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShopFromSupabase();
  }, [category]);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center'> Kunsiang Liao, 213410128 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_86?.map((item) => {
              const { pid, pname, prize, img_url } = item;
              return (
                <Product_xx
                  key={pid}
                  img_url={img_url}
                  pname={pname}
                  prize={prize}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_86;
