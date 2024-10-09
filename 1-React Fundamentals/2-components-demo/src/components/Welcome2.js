import React, { Component } from 'react'    
//Se tienen que importar dos componentes, extender de components, implementar el metodo render que puede retornar null o JSX

class Welcome2 extends Component {
  render() {
    const {name,heroName} = this.props;
    return <h1>Welcome {name} a.k.a {heroName}</h1>   
    //props es palabra reservada para class components
    //props es inmutable, es decir su valor no puede cambiar
  }
}

export default Welcome2