import React, {Component} from 'react';

class Counter2 extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    increment(){
        this.setState(
            (prevState,props)=> ({
            counter: prevState.counter+8
        }),
        ()=>{console.log(this.state.counter)}
        )
    }

    
    
    render(){
        return <div>{this.state.counter} - <button onClick={()=>{this.increment()}}>increment</button></div>
    }
}

export default Counter2;