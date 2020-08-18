import React from 'react'
import Header from '../components/Header'
import BodyNav from '../components/BodyNav'
import Footer from '../components/Footer'

const LandingPage = () => {
    return <div className="container" style={{position:"fixed", width:'50%'}}>
        <div className="flex flex-column">
            <div>
                <Header />
            </div>
            <div className="w-25">
                <BodyNav />
            </div>
            <div className="m-auto">
                <Footer />
            </div>
        </div>
    </div>
}

export default LandingPage