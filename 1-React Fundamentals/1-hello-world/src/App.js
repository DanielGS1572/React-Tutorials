import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
##########################################################################################################
          Hello world -> https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2
##########################################################################################################
React es una librería crea un component base application

npx es un npm package runner que se instala cuando se intala node

Hay dos formas de crear un proyecto de react:
1- npx
npx create-react-app <project_name>
ventajas: 
- no se instala de forma global
- no se tiene que estar haciendo update al package

2- npm
npm install create-react-app -g     ... se instala de forma global
create-react-app <project-name>     ... una desventaja es que se tiene que actualizar create-react-app constantemente

=> Para ejecutar el proyect 
npm start
si se descargó, primero sería npm install

React es una libreria que se basa en componentes

Components:
- Describen una parte de la UI
- Son reutilizables y pueden estar anidados en otros components


##########################################################################################################
          Folder structure -> https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3
##########################################################################################################
package.json (si se usara yarn se vería yarn-lock, en cambio se llama package-lock.json)
- Contiene dependencias y scripts

El archivo de /public/manifest.json se hace uso para Progressive Web Apps (registerServiceWorker.js se usa para PWA)
/public/index.html es el unico html que existe en el proyecto (ya que trabaja con Single Page Application y la entrada es el tag de div con id="root")
index.js es quien hace la inyección de los cambios en el DOM

src folder. index.js se le indica el componente root que es App.js



##########################################################################################################
          Components -> https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4
##########################################################################################################
Cada componente es un archivo de js (ver que App.js es el componente principal, tmb se le llama root component)
Hay componentes que pueden tener la extensión jsx, pero este curso solo se vera con extensión .js
Hay 2 tipos de componentes:
- Stateless Functional Component
- Stateful Class Component


- Stateless Functional Component
Basicamente son funciones de js con jsx (html) que describen la ui 

function Welcom(props){
  return <h1>Hello,{props.name}</h1>
}

- Stateful Class Component
ES6 classes que extienden de Component Class (Libreria de React)
Tienen un metodo render() que regresan un jsx (html)



*/

//ver que es un class component y no un functional component
class App extends Component {     //React.Component
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
