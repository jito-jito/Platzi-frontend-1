import React from 'react'


const Experience = ({ children }) => {
    return (
    <div className="Experience">
        <h1 className="Experience-title">Experience</h1>
        <div className="Experience-container">
         {children}
        </div>
        
    </div>
    )
}


export default Experience


