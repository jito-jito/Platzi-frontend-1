import React from 'react'

const Header = ({ children }) => {
    return (
        <header className="HeaderLayout">
            <div className="HeaderLayout-container">
                {children}
            </div>
        </header>
    )
}


export default Header