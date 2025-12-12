import Wrapper from '@/assets/wrappers/midterm/Shop_xx';
// import { Link } from 'react-router-dom';

import Link from 'next/link';

const P2_StaticPage_86 = () => {
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
            <a href='./hats.html' class='content'>
              <h1 class='title'>HATS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='menu-item'>
            <img
              class='background-image'
              src='https://i.ibb.co/px2tCc3/jackets.png'
              alt=''
            />
            <a href='./jackets.html' class='content'>
              <h1 class='title'>JACKETS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='menu-item'>
            <img
              class='background-image'
              src='/images/midterm/homepage/sneakers.png'
              alt=''
            />
            <a href='./sneakers' class='content'>
              <h1 class='title'>SNEAKERS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='large menu-item'>
            <img
              class='background-image'
              src='https://i.ibb.co/GCCdy8t/womens.png'
              alt=''
            />
            <a href='./womens.html' class='content'>
              <h1 class='title'>WOMENS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div class='large menu-item'>
            <img
              class='background-image'
              src='https://i.ibb.co/R70vBrQ/men.png'
              alt=''
            />
            <a href='./mens.html' class='content'>
              <h1 class='title'>MENS</h1>
              <span class='subtitle'>SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_86;
