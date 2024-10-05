import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

/*
##########################################################################################################
          Functional Components -> https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=5
##########################################################################################################
Archivo: /src/components/Greet.js


##########################################################################################################
          Class Components -> https://www.youtube.com/watch?v=lnV34uLEzis&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=6
##########################################################################################################
Archivo: /src/components/Welcome.js
Class components aparte de poder recibir props así como Functional Components manejan un estado (manejar información)

[Ignorar [A]] Siempre es ideal trabajar con Functional Components
Ventajas de Functional Components
Tiene la ausencia de 'this' keyword
No se usa estado y se fuerza a pensar una solución cuyo componente no maneja estado (tener muchos componentes con estado es dificil)
[Ignorar [A] - ya no aplica a  partir de la versión 16.7.0] Tambien llamados como stateless components, dumb components o presentational components

Ventajas de Class Components
Mantienen su propios datos privados (estado)
Proveen lifecycle hooks
Logica compleja en la UI
Tambien conocidos como Stateful/smart/container (components)

##########################################################################################################
          Hooks Update -> https://www.youtube.com/watch?v=lnV34uLEzis&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=7
##########################################################################################################
Archivo: None
A partir de la versión 16.7.0
Hooks se pueden usar tanto para Functional Components como Class Components [A]
Antes de la introducción de Hooks es importante entender lo que es state, event binding y lifecycle hooks (tambien comprensión del uso de this)
*/


//Ver como se pone entre {} para poder leer codigo de js y así poner comentarios
class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        {/* <Hello />
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Message message='Welcome Visitor' />
        <Message message='Welcome Guest' />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting /> */}      
        
        {/*<NameList />*/}
        <Welcome name="Bruce" heroName="Batman" />
      </div>
    )
  }
}

export default App
