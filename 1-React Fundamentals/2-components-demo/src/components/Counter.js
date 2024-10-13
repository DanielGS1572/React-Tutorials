import React, { Component } from "react";

class Counter extends Component {
  //!! Se inicializa el estado en el constructor
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  /*
########################################################################################
                        DO'S
########################################################################################
*/
  increment() {
    this.setState((prevState, props) => ({     //[A] - ademas el segundo parametro es el props object
      //usar setState react hara re-render del componente
      count: prevState.count + 1,     //ver que no se usa this.state.count sino prevstate.count
    }));
  }

  //Ver que setState puede recibir un callback function ó un objeto y un callback function

  asyncIncrementCorrect() {
    this.setState(
      { count: this.state.count + 1 },                        //ver que se le pasa un objeto
      () => {
      console.log("Callback", this.state.count);              
    });//PARA TRABAJAR LA ASINCRONÍA DE LE PASA UN CALLBACK COMO SEGUNDO PARAMETRO
  }
  
  incrementFive() {
    console.log("Inside incrementFive");
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
/*
########################################################################################
                        DONT'S
########################################################################################
*/
  asyncIncrementWrong() {
    /* Don't #1 */
    this.setState({
      count: this.state.count + 1,
    });
    /*Hacer el seteo de un estado es asyncrono, por lo que si se setea y luego se hace console.log, lo que muestre estará desfasado */
    console.log("Callback", this.state.count); //es llamado antes de que se ha seteado el estado
  }

  incrementWrong() {
    /* Don't #2 */
    //si se incrementa el estado directamente no se vera reflejado en la UI (pero si en consola)
    //por lo que el incremento se tiene que hacer a traves de this.setState
    this.state.count = this.state.count + 1;      //[K7-6]
    //IMPORTANTE -> El unico lugar para modificar this.state es en el constructor
    console.log(this.state.count);
  }
  incrementFiveIncorrectly() {
    console.log("Inside incrementFive Incorrectly");
    this.asyncIncrementCorrect();   //Ver que a pesar que se esta llamanda una forma correcta, no lo hace bien
    this.asyncIncrementCorrect();
    this.asyncIncrementCorrect();
    this.asyncIncrementCorrect();
    this.asyncIncrementCorrect();
  }



  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        {/* DO'S */}
        <button onClick={() => this.incrementFive()}>Increment five</button>
        {/* Dar click mostrará correctamente en UI y en consola 
        
        En lugar de usar  <button onClick={() => this.incrementFive()}>
        y poder usar      <button onClick={this.incrementFive}> ... ver que aqui no se le pasa ningun parámetro
        se tiene que poner esto en el constructor
        this.incrementFive = this.incrementFive.bind(this);

        Usar una función flecha (increment = () => { ... }) es una alternativa que evita la necesidad de bind

        => this.incremente se refiere a una propiedad de la propia clase y el .bind(this) se refiere a la instancia del objeto que utilizará dicha funcion. 
        
        this.increment se refiere a una propiedad de la clase (en este caso, un método de la clase).
        .bind(this) asegura que this dentro de increment apunte a la instancia específica del objeto que está usando esa función, es decir, al componente actual de React.
        
        */}
        <button onClick={() => this.asyncIncrementCorrect()}>Async - console</button>
        
        <br />

        {/* DONT'S */}

        {/* Don't #1 - No incrementar el estado directamente con this.state.count */}
        {/* Dar click y ver que se incrementa en consola pero no en UI */}
        <button onClick={() => this.incrementWrong()}>Direct state</button>
        {/* Don't #2 - No hacer nada fuera de la función de setState ya que es asincrono */}
        {/* Dar click y ver que se incrementa en UI pero no en consola (1 valor abajo) */}
        <button onClick={() => this.asyncIncrementWrong()}>Asynchronous</button>
        {/* Don't #3 - No hacer referencia al estado anterior en el que se encontraba, en lugar de pasar un objeto, se pasa una función a setState [A] */}
        {/* Dar click y ver que despliega 5 veces la misma información y no incrementa en 5 */}
        <button onClick={() => this.incrementFiveIncorrectly()}>Increment five Incorrectly</button>

      </div>
    );
  }
}

export default Counter;
