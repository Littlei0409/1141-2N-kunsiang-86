'use client';

import { useState } from 'react';
import Wrapper from '../_wrapper/Shop_86';
import Link from 'next/link';

const NavbarShopSupa_86 = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Wrapper>
      <div className='header'>
        <Link href='/demo/shop_86/supa' className='logo-container'>
          <img src='/images/midterm/assets/crown.svg' />
        </Link>

        <div className='options'>
          <Link href='/' className='option'>
            TKUdemo
          </Link>
          <Link href='./overview.html' className='option'>
            Shop
          </Link>
          <Link href='/shop' className='option'>
            Contact
          </Link>
          <Link href='/signin' className='option'>
            Sign In
          </Link>

          {/* 修正 onClick */}
          <button
            className='cart-icon'
            onClick={() => setCartOpen(prev => !prev)}
          >
            <img
              className='shopping-icon'
              src='/images/midterm/assets/shopping-bag.svg'
              alt='cart'
            />
          </button>

          {/* dropdown 控制顯示 */}
          <div
            className='cart-dropdown'
            style={{ display: cartOpen ? 'block' : 'none' }}
          >
            <div className='cart-items'>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Brown Cowboy</span>
                  <span className='price'>4 * $35</span>
                </div>
              </div>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Blue Jean Jacket</span>
                  <span className='price'>1 * $90</span>
                </div>
              </div>
            </div>
            <button className='custom-button'>GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavbarShopSupa_86;
