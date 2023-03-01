import React from 'react'

export const Boton = ({text, manejarClic}) => {
  return (
    <button onClick={manejarClic}>
        {text}
    </button>
  )
}
