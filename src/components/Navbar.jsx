import React from 'react'
export default function Navbar({onNavigate, active}){
  return (
    <nav className="dino-nav">
      <button onClick={() => onNavigate('home')} className={active==='home'? 'active':''}>Inicio</button>
      <button onClick={() => onNavigate('gallery')} className={active==='gallery'? 'active':''}>Galería</button>
      <button onClick={() => onNavigate('timeline')} className={active==='timeline'? 'active':''}>Línea de tiempo</button>
    </nav>
  )
}
