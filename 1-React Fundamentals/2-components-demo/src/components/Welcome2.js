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

/*
ChatGPT:Realizar el destructuring de props dentro de cada método que las necesita, como render y greetUser, no es redundante. De hecho, es una práctica recomendada que asegura que cada método acceda a los datos más actualizados y mejora la claridad y mantenibilidad del código. Esto es especialmente importante en componentes de clase de React, donde las props pueden cambiar en cualquier momento debido a actualizaciones externas.
Tambien tiene sentido destructurar dentro de greetUser pues se pierde el scope de los valores destructurados
De igual manera se le pudiera pasar como parametros a greetUser
*/

/*
import React, { Component } from 'react';

class Welcome2 extends Component {
  greetUser() {
    const { name, heroName } = this.props;
    console.log(`Hello ${name}, also known as ${heroName}!`);
  }

  render() {
    const { name, heroName } = this.props;
    return (
      <div>
        <h1>Welcome {name} a.k.a {heroName}</h1>
        <button onClick={() => this.greetUser()}>Greet</button>
      </div>
    );
  }
}

export default Welcome2;


*/