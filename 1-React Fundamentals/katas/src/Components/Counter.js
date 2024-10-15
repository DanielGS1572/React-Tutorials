import React, {Component} from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        };
    }
    increment(){
        this.setState({count: this.state.count + 1},()=>{console.log(this.state.count)})
    }
    renderFiveTimes(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        return <div>{this.state.count} - <button onClick={()=>{this.renderFiveTimes()}}>Click me</button></div>
    }
}


export default Counter;
