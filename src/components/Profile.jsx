import React from 'react'


const Profile = ({ personalInfo }) => {
    return (
    <div className="Profile">
        <h1 className="Profile-title">Profile</h1>
        <p className="Profile-desc">{personalInfo}</p>
    </div>
    )
}


export default Profile