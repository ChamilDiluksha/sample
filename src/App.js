import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends React.Component{

  state = {
    persons : [
      {name :'max', age : 23},
      {name :'Chamil', age : 25}
    ]
  }

  switchNameHandler = () =>{
    this.setState({
      persons : [
        {name :'dilshan', age : 23},
        {name :'Chamil', age : 20 }
      ]
    });
  }
   
  render(){
    return(
      <div className="App">
          Hello world
          <button onClick={this.switchNameHandler}> switch user</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <person>Hii I am  vidusha </person>
      </div> 
    );
  }
}



export default App;
