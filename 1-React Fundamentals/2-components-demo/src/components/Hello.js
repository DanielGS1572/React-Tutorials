import React from 'react'
//JSX es syntactic sugar de React.createElement
//es por eso que se tiene que importar la librería de React para usar JSX
const Hello = () => {
  return (
    <div className='dummyClass'>
      <h1>Hello Vishwas</h1>
    </div>
  )

//ver como createElement recibe 3 parametros y debe de ir dentro de la función Hello
/*
1.- html tag
2.- optional properties (js object with key value pairs)
3.- children element (puede ser un simple string u otro html tag)
*/

//se usa className ya que en js class es una palabra reservada

  // return React.createElement(
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', null, 'Hello Vishwas')
  // )
}

export default Hello

/*
JSX DIFFERENCES:
class -> className ... se planea que después se use class (react 18)
for   -> htmlFor

CamelCase property naming convention
onclick   -> onClick
tabindex  -> tabIndex

*/