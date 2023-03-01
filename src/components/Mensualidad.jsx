import React from 'react'

const Mensualidad = ({sueldo, comision}) => {
  return (
    <div>
        <span >{sueldo} - {comision}</span>
    </div>
  )
}

export default Mensualidad