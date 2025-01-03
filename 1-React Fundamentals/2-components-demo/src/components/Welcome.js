import React, { Component } from 'react'    
//Basicamente son clases de ES6 y usan internamente estado (Class component)

//Se tienen que importar dos componentes, extender de components, implementar el metodo render que puede retornar null o JSX

class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>   
    //props es palabra reservada para class components
    //props es inmutable, es decir su valor no puede cambiar
  }
}

export default Welcome