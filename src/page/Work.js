import React from 'react'
import Box from '../components/Box'
const Work = () => {
    return <div className="text-white d-flex flex-wrap mt-5">
        <Box 
            technology={['React', 'HTML', 'CSS']}
            title="Portfolio"
            description="My portfolio website."
            code="https://github.com/Sandip-Z/portfolio"
            live="http://www.sandipsatyal.com.np"
        />
        <Box />
        <Box />
        <Box 
            description="This is a dummy description"
            title="I am a title"
            technology={['node', 'express', 'ejs', 'mysql', 'react', 'javascript']}
            code="https://something.com"
            live="s"
            detail
        />
    </div>
}

export default Work