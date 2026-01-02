import React from 'react'
export default function DinoDetail({dino}){
  if(!dino) return null
  return (
    <section className="dino-detail">
      <h2>{dino.name}</h2>
      <p><strong>Tamaño:</strong> {dino.size}</p>
      <p>{dino.description}</p>
    </section>
  )
}
