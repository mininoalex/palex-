import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components.css'

const DinoCard = ({ dino, dinosaur }) => {
  const item = dinosaur || dino
  return (
    <div className="dino-card">
      <div className="dino-image-container">
        <img 
          src={`${item.image}?auto=format&fit=crop&w=600&q=80`} 
          alt={item.name}
          className="dino-image"
        />
        <span className="dino-diet">{item.diet}</span>
      </div>
      <div className="dino-info">
        <h3>{item.name}</h3>
        <p className="dino-period">📅 {item.period}</p>
        <p className="dino-size">📏 {item.size}</p>
        <p className="dino-description">
          {item.description?.substring(0, 100)}...
        </p>
        <Link to={`/dino/${item.id}`} className="view-details-btn">
          Ver detalles
        </Link>
      </div>
    </div>
  )
}

export default DinoCard
