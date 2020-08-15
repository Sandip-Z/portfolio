import React from 'react'
import {headerTexts} from '../content/HeaderText'
const Header = () => {
    return (
        <div>
            <h1>{headerTexts.title}</h1>
            <h5>{headerTexts.subtitle}</h5>
            <p>{headerTexts.description}</p>
        </div>
    )
}

export default Header