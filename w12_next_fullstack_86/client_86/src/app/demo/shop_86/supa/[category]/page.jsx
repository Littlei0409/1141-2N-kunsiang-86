'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_86';
import Product_xx from '../../_components/Product_86';
import { supabase } from '@/db/clientSupabase';

const FetchShopByCategory_86 = () => {
  const [shop_86, setShop_86] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  const params = useParams();
  const category = params?.category; // e.g. 'hats', 'jackets', ...

  const fetchShopFromSupabase = async () => {
    if (!category) return;

    try {
      setLoading(true);
      setErrMsg('');

      // 🔹 正確解構名稱：拿回來的變數叫 data，不要叫 category2_86
      const { data, error } = await supabase
        .from('category2_86')
        .select('*, shop2_86(*)')  // 這裡假設有 FK 關聯 category2_86.cid -> shop2_86.cid
        .eq('cname', category);

      if (error) {
        console.error('supabase error:', error);
        setErrMsg(error.message);
        setShop_86([]);
        return;
      }

      console.log('data', data[0].shop2_86);

      if (data && data.length > 0 && Array.isArray(data[0].shop2_86)) {
        setShop_86(data[0].shop2_86);
      } else {
        setShop_86([]);
      }
    } catch (err) {
      console.error('fetch error:', err);
      setErrMsg(String(err));
      setShop_86([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShopFromSupabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center'> Kunsiang Liao, 213410086 </h4>
        </div>

        <div className='collection-page'>
          <h1 className='title'>{category}</h1>

          {loading && <p className='text-center'>Loading...</p>}
          {errMsg && <p className='text-center text-red-500'>{errMsg}</p>}
          {!loading && !errMsg && shop_86.length === 0 && (
            <p className='text-center'>No products found.</p>
          )}

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
