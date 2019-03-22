import React, { Component } from 'react';
import './App.css';

const ContentBox = (props) => (
    <div className={`theme-${props.theme} layout-box`}>
        {props.children}
    </div>
)

export default ContentBox;
