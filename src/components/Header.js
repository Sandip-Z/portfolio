import React from 'react'
import {headerTexts} from '../content/HeaderText'
const Header = () => {
    return (
        <div>
            <h1 className="text-white">{headerTexts.title}</h1>
            <h5 className="text-white">{headerTexts.subtitle}</h5>
            <p className="text-white">{headerTexts.description}</p>
        </div>
    )
}

export default Header