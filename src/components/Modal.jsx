import React from 'react'
import {FaTimes} from 'react-icons/fa';
import { SideBarModalContext } from '../ContextApi';

const Modal = () => {

    const{isModalOpen,modalToggle} = SideBarModalContext();

    return (
        <div className={`${isModalOpen ? 'showModal':''} modalContainer`}>
            <div className='modalContent'>
                <h3>Modal Content</h3>
                <button className='modalClose' onClick={modalToggle}>
                    <FaTimes/>
                </button>
            </div>
        </div>
    )
}

export default Modal