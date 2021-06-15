import React from 'react';
import './Navigation.css';
import brain from './brain.png';

const Navigation = () => {
    return (<nav >
        <div className='signout'><p className='f3 link dim black underline pa3 pointer'>Sign out</p></div>
        <div className='logo'><img  className=' br2 shadow-2'alt='logo' src ={brain}></img></div>
    </nav>
    );
}

export default Navigation;