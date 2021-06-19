import React from 'react';
import './Navigation.css';
import brain from './brain.png';

const Navigation = ({onRouteChange,isSignedin}) => {
        if(isSignedin){
            return (
                <div>
                <nav style={{display:'flex' , justifyContent:'flex-end'}} >
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                </nav>
                <div className='logo'>
                <img  className=' br2 shadow-2'alt='logo' src ={brain}></img>
                </div>
                </div>);
                }
        else{
            return(
                <div>
                <nav style={{display:'flex' , justifyContent:'flex-end'}} >
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
                <div className='logo'>
                <img  className=' br2 shadow-2'alt='logo' src ={brain}></img>
                </div>
                </div>
            );
        }

}

export default Navigation;