import Wrapper from '../_wrapper/Shop_86';
// import { Link } from 'react-router-dom';

import Link from 'next/link';

const ShopNodePage_86 = () => {
  return (
    <Wrapper>
      <div className='homepage'>
        <div className='directory-menu'>
          <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/cvpntL1/hats.png'
              alt=''
            />
            <Link href='/demo/shop_86/node/hats' className='content'>
              <h1 className='title'>HATS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/px2tCc3/jackets.png'
              alt=''
            />
            <Link href='/demo/shop_86/node/jackets' className='content'>
              <h1 className='title'>JACKETS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='/images/midterm/homepage/sneakers.png'
              alt=''
            />
            <Link href='/demo/shop_86/node/sneakers' className='content'>
              <h1 className='title'>SNEAKERS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/GCCdy8t/womens.png'
              alt=''
            />
            <Link href='/demo/shop_86/node/womens' className='content'>
              <h1 className='title'>WOMENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/R70vBrQ/men.png'
              alt=''
            />
            <Link href='/demo/shop_86/node/mens' className='content'>
              <h1 className='title'>MENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopNodePage_86;
