import React, {Component} from 'react';

class Kata7 extends Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.state={count:0};
    }

    increment(){
        this.setState((prev)=> ({
           count: prev.count + 1
        }));
    }

    render(){
        return <div>{this.state.count} - <button onClick={this.increment}>Increment</button></div>
    }
}

export default Kata7;