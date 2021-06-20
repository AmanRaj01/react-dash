import React from 'react'
//import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
//import * as IoIcons from 'react-icons/io';
import * as IooIcons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <IooIcons.IoRocketOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Clients',
        path: '/clients',
        icon: <BsIcons.BsPerson />,
        cName: 'nav-text'
    },
    {
        title: 'Invoices',
        path: '/invoices',
        icon: <FaIcons.FaFileInvoice />,
        cName: 'nav-text'
    },
    {
        title: 'Estimates',
        path: '/estimates',
        icon: <RiIcons.RiBillLine />,
        cName: 'nav-text'
    },
    {
        title: 'My Team',
        path: '/myTeam',
        icon: <MdIcons.MdPeopleOutline />,
        cName: 'nav-text'
    },
]
