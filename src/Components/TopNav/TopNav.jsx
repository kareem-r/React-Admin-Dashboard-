import React from 'react'
import { Link } from 'react-router-dom'
import profileImage from "../../assets/images/profile-02.png"
import "./topnav.css"
const TopNav = () => {
  return (
    <div className="top_nav">
      <div className="top_nav-wrapper">
        <div className="search_box">
          <input type="text" name="" id="" placeholder='search or type' />
          <span><i class="ri-search-line"></i></span>
        </div>
        <div className="top_nav-right">
          <span className='notification'><i class="ri-notification-3-line"></i>
          <span className='badge'>1</span>
          </span>
         
          <div className="profile">
          <Link to={"/settings"}><img src={profileImage} alt="" /></Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default TopNav