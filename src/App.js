import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* 
App SafeLock:
Create and store a passcode, enter the passcode again to display a message!

Last Edited: 2/7/2017
By: James Xie
*/


function Grid(props){
  return(
    <div className = "grid">
      <div className="gridSquare">{props.valueGrid[0]}</div>
      <div className="gridSquare">{props.valueGrid[1]}</div>
      <div className="gridSquare">{props.valueGrid[2]}</div>
    </div>
    )
}


function UpButton(props) {
  return(
    <button onClick={()=>props.onClick()} className="valButton">+</button>
    )
}

function DownButton(props) {
  return(
        <button onClick={()=>props.onClick()} className="valButton">-</button>
        )
}

class App extends Component {
constructor(props){
  super(props)
  this.state={
    valueGrid: [0,0,0],
    storedValue: [0,0,0],
  }
}



AddValue(ii){
  const newGrid = this.state.valueGrid;
  newGrid[ii] = newGrid[ii]+1; 
    this.setState({
    valueGrid:[newGrid[0],newGrid[1],newGrid[2]]
  })
}

StoreValue(){
  this.setState({
    storedValue: this.state.valueGrid, 
    valueGrid: [0,0,0]
  });
}

MinusValue(ii){
  const newGrid = this.state.valueGrid;
  newGrid[ii] = newGrid[ii]-1;
  this.setState({
    valueGrid:[newGrid[0],newGrid[1],newGrid[2]]
  })
}


guessValue(ii){
  if (this.state.valueGrid[0] == this.state.storedValue[0] && this.state.valueGrid[1] == this.state.storedValue[1] && this.state.valueGrid[2] == this.state.storedValue[2])
  {return (alert('YOU GUESSED CORRECTLY!!'))} 
  else { return (alert('Sorry, try again.'))}
}

  render() {
    return (<div> hello </div>
      /*
      <div>
        
        <Grid valueGrid={this.state.valueGrid} />
        <UpButton onClick={()=>this.AddValue(0)} />
        <DownButton onClick={()=>this.MinusValue(0)}/>
        <UpButton onClick={()=>this.AddValue(1)} />
        <DownButton onClick={()=>this.MinusValue(1)}/>
        <UpButton onClick={()=>this.AddValue(2)} />
        <DownButton onClick={()=>this.MinusValue(2)}/>
        
        <br />
        <br />
        <br />

        <div>
          <button className="storeButton" onClick = {()=>this.StoreValue()}>
          Store
          </button>
          <button className="guessButton" onClick={()=>this.guessValue()}>
          Guess
          </button>
        </div>
      
      </div>);
      */
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

/* improvements to be made: 
 
 - immutability (when changing this.state.valGrid)
 
 - Make it possible to store the combination and scramble
 - 

*/
