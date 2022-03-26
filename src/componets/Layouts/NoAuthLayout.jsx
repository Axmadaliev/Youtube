import React from 'react';
import { Outlet } from 'react-router-dom';


const NoAuthlayout = () => {
    return (
        <div>
            No Authenticated Navbar
            <Outlet/>
        </div>
    );
}

export default NoAuthlayout;
