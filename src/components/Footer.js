import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return <div className="d-flex">
        <h2 className="text-white">Sandip.</h2>
        <div className="d-flex align-items-center ml-4">
            <Link className="mx-2 text-decoration-none text-white">
            <i class="fa fa-github" aria-hidden="true"></i> 
            <span className="px-1">Github</span>
            </Link>
            <Link className="mx-2 text-decoration-none text-white">
                <i class="fa fa-twitter" aria-hidden="true"></i> 
                <span className="px-1">Twitter</span>
            </Link>
        </div>
    </div>
}

export default Footer