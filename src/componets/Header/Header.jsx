import React, { useRef } from 'react';
import navLogo from "../../Assert/images/nav_logo.webp"
import hamburger from "../../Assert/images/hamburger-menu.svg"
import upload from "../../Assert/images/upload.png"
import more from "../../Assert/images/more.png"
import notificatiom from "../../Assert/images/notification.png"
import Jack from "../../Assert/images/Jack.png"
import search from "../../Assert/images/search.png"
import voiceSearch from "../../Assert/images/voice-search.png"
import "./Header.scss"

import "../../"
import { useSidebar } from '../../Providers/HandleSideBar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';

const Header = () => {
    // const [sidebar, setSidebar] = useSidebar(false)
    // console.log(handeleMenu);
    const seacrhInput = useRef()
    const users = useSelector(state => state.todos.todos)
    const [seacrh, setSearch] = useState([]);
    const usersFiltered = users.filter(item=> item.title !== seacrhInput.current.value)
    // handleSearch(users, seacrhInput.current.val)
    // function handleSearch() {
    //     return users.filter(item=> item.title !== seacrhInput.current.value)
    //  }

    
    return (
        <nav className='flex-div'>
           <div className='nav-left flex-div'>
                <img  src={hamburger} alt="" className='nav-left__menu-icon'/>
             
                <Link to='/home'>
                    <img src={navLogo} alt="" className='nav-left__logo'  />                
                </Link>

           </div>
           <div className='nav-middle flex-div'>
                <label className='nav-middle__search-box flex-div'>
                    <input ref={seacrhInput} type="text" placeholder='Введите запрос' />
                    <Button type='submit'> Submit</Button>
                    <img src={search} alt="" />
                </label>
                <img src={voiceSearch} alt="" className='nav-middle__mic-icon'/>
           </div>
           <div className='nav-right flex-div'>
                <img src={upload} alt="" />
                <img src={more} alt="" />
                <img src={notificatiom} alt="" />
                <img src={Jack} alt="" className='user-icon' />
            
           </div>
        </nav>
    );
}

export default Header;

