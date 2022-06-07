import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
state={
  name:"circle"
}
startRotate=()=>{
  this.setState({
    name:"circle start-rotate"
  });

  setTimeout(()=>{
    this.setState({
      name:"circle start-rotate stop-rotate"
    })
  },Math.floor(Math.random()*5000)+1);
}
  render() {
    return (
      <div>
        <div className='arrow'></div>
        <ul className={this.state.name}>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">1</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">2</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">3</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">4</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">5</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">6</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">7</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">8</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">9</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">10</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">11</div>
          </li>
          <li>
            <div className='text'
              contentEditable="true"
              spellCheck="false">12</div>
          </li>

        </ul>
        <button className='spin-button' onClick={this.startRotate}>SPIN</button>
      </div>
    );
  }



}




export default App;