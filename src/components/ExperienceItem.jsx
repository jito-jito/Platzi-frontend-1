import React from 'react'


const ExperienceItem = ({ experience }) => {
    return (
        <>
        <section className="ExperienceItem">
            <p><strong>Company:</strong> {experience.company}</p>
            <p><strong>JobDescription:</strong> {experience.jobDescription}</p>
            <p><strong>JobTitle:</strong> {experience.jobTitle}</p>
            <p><strong>StartDate:</strong> {experience.startDate}</p>
            <div className="ContainerImg">
                <div className="ContainerImg-Box1">
                </div>
                <div className="ContainerImg-Box2">
                </div>
            </div>
        </section>               
        </>
    )
}


export default ExperienceItem
