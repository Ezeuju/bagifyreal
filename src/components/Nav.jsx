import React from 'react'
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import baggy from "../assets/baggy.png"

const Nav = () => {
  
  
  
const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

  return (
    <>
     <header>
        <nav>
            <div className='logo'><img src={baggy} alt="logo" /></div>
            
  <Dropdown disabled onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
       
            
        </nav>
     </header>
    </>
  )
}

export default Nav
