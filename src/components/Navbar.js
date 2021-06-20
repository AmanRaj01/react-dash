import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';
import { Userdata } from './Userdata';



const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#000'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <BsIcons.BsThreeDots onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='navbar-user'>
                    {Userdata.map((item,index) => {
                        return(
                            <li key={index} className='userAvatar'>
                                <Link to={item.path}>
                                {item.Avatar}
                                </Link>
                                <p className={item.cName}>Welcome Back,</p>
                                <p className={item.cName}>{item.Name}</p>
                            </li>
                        )
                    })}
                </ul>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName} >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <li className='navbar-toggle'>
                        <Link to='/settings' className='settingsLink'>
                            <AiIcons.AiFillSetting />
                            <span>Settings</span>
                        </Link>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineLeft />
                            {/* <span>{`Settings`}</span>
                            <AiIcons.AiOutlineLeft /> */}
                        </Link>
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
