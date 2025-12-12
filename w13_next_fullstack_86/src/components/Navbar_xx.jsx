import React from 'react';
import Wrapper from '../assets/wrappers/Navbar_xx';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
const Navbar_xx = () => {
  return (
    <Wrapper>
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>TkuDemo</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <Link href='/' className='active'>
                  Home
                </Link>
              </li>
              <li className='menu-item dropdown'>
                <Link href='#'>Services +</Link>
                <div className='sub-menu-wrapper'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='#'>Service 1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 2</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 3</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Tuhrefrials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t11_xx'>
                        T11_ErrorExamplePage_xx
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t12_xx'>
                        T12_UseStateBasicsPage_xx
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tutorials/context/1_propdrilling_28'>
                        W13_propDrilling_28
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tutorials/context/2_context_people_28'>
                        W13_ContextPeople_28
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_xx;
