import Wrapper from '../_wrapper/Shop_86';
// import { Link } from 'react-router-dom';

import Link from 'next/link';

const ShopNodePage_86 = () => {
  return (
    <Wrapper>
      <div class='homepage'>
        <div class='directory-menu'>
          <div class='menu-item'>
            <img
              class='background-image'
              src='https://i.ibb.co/cvpntL1/hats.png'
              alt=''
            />
            <Link href='/demo/shop_86/supa/hats' class='content'>
              <h1 class='title'>HATS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div class='menu-item'>
            <img
              class='background-image'
              src='https://i.ibb.co/px2tCc3/jackets.png'
              alt=''
            />
            <Link href='/demo/shop_86/supa/jackets' class='content'>
              <h1 class='title'>JACKETS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div class='menu-item'>
            <img
              class='background-image'
              src='/images/midterm/homepage/sneakers.png'
              alt=''
            />
            <Link href='/demo/shop_86/supa/sneakers' class='content'>
              <h1 class='title'>SNEAKERS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div class='large menu-item'>
            <img
              class='background-image'
              src='https://i.ibb.co/GCCdy8t/womens.png'
              alt=''
            />
            <Link href='/demo/shop_86/supa/womens' class='content'>
              <h1 class='title'>WOMENS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div class='large menu-item'>
            <img
              class='background-image'
              src='https://i.ibb.co/R70vBrQ/men.png'
              alt=''
            />
            <Link href='/demo/shop_86/supa/mens' class='content'>
              <h1 class='title'>MENS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopNodePage_86;
