import React from 'react'
import logo from  '../../img/Breaking_Bad_logo.png'

export default function Header() {
    return (
        <div className="header">
            <img className="header-img" src={logo}/>
            <h1 className="header-text">Breaking Bad testing api using React.js</h1>
        </div>
    )
}
