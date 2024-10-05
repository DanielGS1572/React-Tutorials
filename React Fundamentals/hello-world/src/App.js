import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
##########################################################################################################
          Hello world -> https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2
##########################################################################################################
npx es un npm package runner que se instala cuando se intala node
Hay dos formas de crear un proyecto de react:
1- npx
npx create-react-app <project_name>
ventajas: 
- no se instala de forma global
- no se tiene que estar haciendo update al package
2- npm
npm install create-react-app -g     ... se instala de forma global
create-react-app <project-name>

=> Para ejecutar el proyect 
npm start
si se descargó, primero sería npm install


##########################################################################################################
          Folder structure -> https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3
##########################################################################################################
package.json (si se usara yarn se vería yarn-lock)
- Contiene dependencias y scripts

El archivo de /public/manifest.json se hace uso para Progressive Web Apps
/public/index.html es el unico html que existe en el proyecto (ya que trabaja con Single Page Application y la entrada es el tag de div con id="root")
*/
class App extends Component {
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
