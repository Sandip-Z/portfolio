import React from 'react'

const Box = ({description, technology, code, live, title}) => {
    const getTechnology = () => {
        if(technology && technology.length){
            const kbdRendered = technology.map(tech => {
                return <small key={tech} className="mx-1 font-weight-lighter">{tech}</small>
            })
            return kbdRendered
        }else{
            return <small>Technology n/a</small>
        }
    }
    return <div className="box">
        <div>
            <h3 className="mb-0">{title || 'Title'}</h3>
            <p className="mt-2">
                {getTechnology()}
            </p>
            <p className="text-overflow-ellipsis h-100 work-description">{description || 'Description n/a'}</p>
        </div>
        <div className="d-flex justify-content-start mt-3 font-weight-light work-footer">
            {live && <div>
                <i className="fa fa-eye" aria-hidden="true"></i>
                <a href={live} className="text-decoration-none ml-1 work-footer" target="_blank">Live</a>
            </div>}
            {
                code && <div className="mx-3">
                <i className="fa fa-code" aria-hidden="true"></i>
                <a href={code} className="text-decoration-none ml-1 work-footer" target="_blank">Code</a>
            </div>
            }
        </div>
    </div>
}

export default Box