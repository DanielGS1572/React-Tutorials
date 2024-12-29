import React from 'react'

export default () => {
  function clickHandler() {
    console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button> {/*Ver que no se hace el llamado de la función clickHandler() */}
      {/*
      - Tomar en cuenta que si se pone mal la función y se hace un llamado, en un class component, por tener estado
      estará disparando constantemente la función (porque estaría haciendo un re-render )
      -Recordar que Function Component es stateless (si no se hace uso de hooks)
      */}
    </div>
  )
}
