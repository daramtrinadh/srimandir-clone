"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { IoReaderSharp } from "react-icons/io5";
import { GiFireBowl } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import './header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleProfileClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header-section">
      <Link href='/'>
        <Image
          src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1721367260/img_sm_logo_en_dark_sel9sc.svg"
          alt="logo"
          width={150}
          height={50}
        />
      </Link>
      <div className="nav-links">
        <Link href='/' className='link'>Home</Link>
        <Link href='/puja' className='link'>Puja</Link>
        <Link href='/panchang' className='link'>Panchang</Link>
        <Link href='/temples' className='link'>Temples</Link>
        <Link href='/library' className='link'>Library</Link>
      </div>
      <div className='profile-section'>
        <select className='select-option'>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <div className='profile' onClick={handleProfileClick}>
          <Image
            src="https://res.cloudinary.com/ds2bmmnmg/image/upload/v1721368455/Default_Profile_jztz1w.svg"
            alt="profile-icon"
            width={40}
            height={40}
          />
          {showMenu && (
            <div className="action-menu">
              <p>Hello,Sri Mandir Bhakti</p>
              <p>Welcome to Sri Mandir Puja Seva</p>
              <hr/>
              <p>Account Details</p>
              <div className='item-container'>
                <div className="menu-items">
                    <IoPersonOutline className='icon'/>
                    <p>My Profile</p> 
                </div>
                <FaAngleRight/>
              </div>
              <div className='item-container'>
                <div className="menu-items">
                    <IoReaderSharp className='icon'/>
                    <p>My Puja Bookings</p> 
                </div>
                <FaAngleRight/>
              </div>
              <div className='item-container'>
                <div className="menu-items">
                    <IoReaderSharp className='icon'/>
                    <p>My Ramotsav Bookings</p> 
                </div>
                <FaAngleRight/>
              </div>
              <div className='item-container'>
                <div className="menu-items">
                    <GiFireBowl className='icon'/>
                    <p>Book a Puja</p> 
                </div>
                <FaAngleRight/>
              </div>
              <hr/>
              <p>Help & Support for Puja Booking</p>
              <div className="call-div">
                <MdCall/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
