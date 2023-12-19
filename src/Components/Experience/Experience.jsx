import React from 'react'
import './Experience.css'
import ExperienceCards from '../ExperienceCards/ExperienceCards'
const Experience = () => {
    return (
        
        <div className= "experience" id = 'Experiences'>
            <div className = "head">
                <span>My Experience</span>
            </div>
            <div>
                <ExperienceCards
                job = {'Computer Science Tutor'}
                date = {'April 2023 - Present'}
                description = {
                    "Provided 1 on 1 tutoring to 100+ students and created personalized lesson plans for students.\nTutor all lower division CS courses, teaching topics such as C++, OOP, Data Structures, MIPS, Assembly, and Digital Circuits. \nNetworked with students and professors for external opportunities for tutoring"
                }
                />
                <ExperienceCards
                job = {'Treasurer for Society of Asian Scientists and Engineers'}
                date = {'January 2024 - Present'}
                description = {
                    "Manage the organization’s funds, ensuring accurate financial transactions and budget allocation.\nProvided leadership and mentorship to new members, fostering a cohesive and motivated team."
                }
                />
                <ExperienceCards
                job = {'Cashier & Manager of Sesame Donuts'}
                date = {'May 2021 - May 2023'}
                description = {
                    "Led a team of employees, overseeing daily operations and ensuring excellent customer service.\nConducted interviews and selected candidates to build a strong and capable workforce."
                }
                />
            </div>
        </div>

    )
}

export default Experience