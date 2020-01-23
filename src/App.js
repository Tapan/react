import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
  	persons: [
  	  { name: 'Tapan', age: '30' },
  	  { name: 'Sita', age: '31' },
  	  { name: 'Ram', age: '32' }
  	]
  }

  switchNameHandler = () => {
    console.log('clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm learning React</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
