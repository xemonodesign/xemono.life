import React from 'react';
import './App.css';
import Navi from './Navi'


const Right = (props) => (
    <div className="right">{props.children}</div>
)

const Left = (props) => (
    <div className="Left">{props.children}</div>
)



const Header = (props) => (
    <header className={`theme-black layout-box`}>
        <Navi />
        <p className='text-large bold'>使いやすくてかっこいい道具を作る<br />
            Design Studio Xemono
        </p>
        
    </header>
)

export default Header;
