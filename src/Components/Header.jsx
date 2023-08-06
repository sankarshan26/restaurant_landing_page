import React from 'react';
import Subheading from './Subheading';
import '../CSS/Header.css';
import pic from "../assets/welcome.png";
function Header() {
  return (
    <div className='Header_container'>
    <div className='left_'>
      <Subheading title="Chase the New Flavour"/>
      <h1 className="heading1">The Key To Fine Dining</h1>
      <p className="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus culpa corrupti facilis sequi voluptatibus quaerat ducimus quibusdam quam sit.</p>
      <button type="button" className='Explore'>Explore</button>
    </div>
    <div className='right_'>
      {/* Only image */}
      <img src ={pic} className='img-right'/>
    </div>
    </div>
  )
}

export default Header
