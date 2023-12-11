import React from 'react';
import './navbar.scss';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaReddit, FaSnapchat, FaSearch } from "react-icons/fa";
import Image from 'next/image';


const Navbar = () => {
  return (
    <header className='header'>
      <nav className="nav">
        <div className="nav__links">
          <Link className='nav__link' href="/">home</Link>
          <Link className='nav__link' href="/">about</Link>
          <Link className='nav__link' href="/">contact</Link>
          <Link className='nav__link' href="/">downloads</Link>
        </div>
        <div className="nav__icons">
          <div className="nav__socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaPinterest />
            <FaReddit />
            <FaSnapchat />
          </div>
          <div className="nav__search">
            <FaSearch />
            <p className="nav__search-text">
              Search...
            </p>
          </div>
        </div>
      </nav>
      <hr className='header__line' />
      <div className='header__title'>
        <Image 
          src='/assets/gifts.png'
          alt='gifts'
          height={100}
          width={100}
        />
        <h1 className='header__title-text'>Santas Got a Brand New Bag</h1>
        <Image 
          src='/assets/gifts.png'
          alt='gifts'
          height={100}
          width={100}
        />
      </div>

      <hr className='header__line' />
      <div className='bottomNav'>
        <p className='bottomNav__link'>d.i.y</p>
        <p className='bottomNav__link'>articles</p>
        <p className='bottomNav__link'>authors</p>
        <p className='bottomNav__link'>shop</p>
      </div>
      <hr className='header__line' />
    </header>
  )
}

export default Navbar;
