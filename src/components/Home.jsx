import React from 'react'
import {FaBars} from 'react-icons/fa';
import { SideBarModalContext } from '../ContextApi';

const Home = () => {

    const {sideBarToggle,modalToggle} = SideBarModalContext();

    return (
        <section className='home'>
            <div className="sideBar_btn">
                <FaBars onClick={sideBarToggle}/>
            </div>
            <button className="btn btn-modal"
            onClick={modalToggle}>
                Show modal
            </button>
        </section>
    )
}

export default Home