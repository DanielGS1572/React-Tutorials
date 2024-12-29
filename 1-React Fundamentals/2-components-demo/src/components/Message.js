import React, { Component } from 'react'

class Message extends Component {
//!! Se inicializa el estado en el constructor
  constructor(props) {
    super(props)          //se tiene que llamar super del padre que hace extends -> Components
    this.state = {
      message: props.message    //como props es inmutable se tiene que pasar al state
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'   //ver como no se usa this.message 
      //porque en realidad es this.state.message pero es manejado internamente por react
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message

/*
K7-9
- "state is handled in the component"
- "state can manipulate what is rendered in the browser"
*/