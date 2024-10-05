import React from 'react'   //siempre se tiene que importar React

// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }

//[A]
/*export*/ const Greet = props => {    //la convención es usar arrow function
  console.log('hola') //ver que este código de JS esta antes del return
  //props.name = 'Some name';   //Como props es inmutable, esto tirará un error
  return (    //si es solo un tag de jsx no requiere de parentesis
    <div> {/*solo se puede regresar un solo html tag por lo que props.children no puede quedar fuera del div ó más bien se tiene que agregar el div para englobar props.childre */}
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  )
}

export default Greet    

/*
Como se esta usando la palabra default para exportar se puede cambiar el nombre
En lugar de:
import Greet from './components/Greet'
Se puede poner:
import MyComponent from './components/Greet'

Pero también se pudo haber usado named export [A] y se tiene que usar el nombre de Greet tal cual
Para importar sería:
import { Greet } from './components/Greet'
*/


/*
Para usar sería 
<Greet/>
*/
