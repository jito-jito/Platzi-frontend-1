import React from 'react'


const Academic = ({children}) => {
    return (
    <div className="Academic">
        <h1 className="Academic-title">Academic</h1>
        <div className="Academic-container">
            {children}
        </div>
    </div>
    )
}


export default Academic