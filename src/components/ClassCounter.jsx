import React, { Component } from 'react'
import './Counter.css';

export default class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state= {
            count: 0,
        };
        this.handleIncrease=this.handleIncrease.bind(this);
        this.handleDecrease=this.handleDecrease.bind(this);
    }

    handleIncrease(){
        this.setState((prevState) => ({
           count: prevState.count + 1, 
        }));
    }

    handleDecrease(){
        this.setState((prevState) => ({
           count: prevState.count - 1, 
        }));
    }

  render() {
    return (
      <div className='CounterApp'>
        <h1>Class Counter</h1>
        <h1>{this.state.count}</h1>
        <div className='buttons'>
        <button className='button' onClick={this.handleIncrease}>Increase</button>
        <button className='button' onClick={this.handleDecrease}>Decrease</button>
        </div>
              </div>
    )
  }
}
