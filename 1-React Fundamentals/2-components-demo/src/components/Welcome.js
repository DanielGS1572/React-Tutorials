import React, { Component } from 'react'    
//Se tienen que importar dos componentes, extender de components, implementar el metodo render que puede retornar null o JSX

class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
  }
}

export default Welcome