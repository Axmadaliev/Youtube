import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPage from '../MyPage/MyPage';
import Navbar from '../Navbar/Navbar';
import RightBar from '../RightSideBar/RightBar';
import Sidebar from '../SideBar/SideBar';

const Adminlayout = () => {
    return (
        <div>          
            
            <Outlet/>
            
        </div>
    );
}

export default Adminlayout;
