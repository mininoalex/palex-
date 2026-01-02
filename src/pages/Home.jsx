import React from 'react'
import { dinosaurs } from '../data/dinosaurs.js'
import DinoCard from '../components/DinoCard.jsx'

export default function Home(){
  return (
    <div>
      <h2>Bienvenido a Dinopedia</h2>
      <section className="gallery">
        {dinosaurs.map(d => <DinoCard key={d.id} dino={d} />)}
      </section>
    </div>
  )
}
