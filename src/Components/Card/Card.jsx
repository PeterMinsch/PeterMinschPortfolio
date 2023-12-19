import React from 'react'
import './Card.css'
const Card = ({img, heading, detail}) => {
    return (
        <div className = "card">
            <div className = "image">
            <img src = {img} alt = ""/>
            </div>
            <span>{heading}</span>
            <span> {detail}</span>
        </div>
    )
}

export default Card