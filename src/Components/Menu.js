import React from 'react'
import '../Css/Menu.css'
import '../Css/Pages.css'
import { Link } from 'react-router-dom'


const Menu = (params) => {
    return(
        <div className="menuStyle">
            <ul>
                <li><Link to = "/"> Home </Link></li>
                <li><Link to = "/about"> About </Link></li>
                <li><Link to = "/contact"> Contact </Link></li>
            </ul>
        </div>
    )
}


export default Menu