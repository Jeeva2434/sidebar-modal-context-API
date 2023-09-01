import React from 'react'
import {FaTimes} from 'react-icons/fa';
import { links} from '../data';
import { SideBarModalContext } from '../ContextApi';

const SideBar = () => {

    const{isSidebarOpen,sideBarToggle} = SideBarModalContext();

    return (
        <div className={`${isSidebarOpen ? 'sideBarOpen':''} sideBar`}>
            <div className='sidebarContainer'>
                <h3>Header</h3>
                <button className='sideBarClose'
                onClick={sideBarToggle}>
                    <FaTimes/>
                </button>
            </div>
            
            {links &&  <ul className='link_list'> {links.map(link => {
                return (
                    <li key={link.id} className='link_item'>
                    <span>{link.icon}</span> <span>{link.text}</span>
                    </li>
                )
            })}</ul>
            }
        </div>
    )
}

export default SideBar