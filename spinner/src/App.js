import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    name: "circle",
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
  startRotate = () => {
    this.setState({
      name: "circle start-rotate"
    });

    setTimeout(() => {
      this.setState({
        name: "circle start-rotate stop-rotate"
      })
    }, Math.floor(Math.random() * 5000) + 1);
  }
  render() {
    return (
      <div>
        <div className='arrow'></div>
        <ul className={this.state.name}>
          <li>
            <div className='text'>{this.state.values[0]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[1]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[2]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[3]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[4]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[5]} Puan </div>
          </li>
          <li>
            <div className='text'>{this.state.values[6]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[7]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[8]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[9]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[10]} Puan</div>
          </li>
          <li>
            <div className='text'>{this.state.values[11]} Puan</div>
          </li>
        </ul>
        <button className='spin-button' onClick={this.startRotate}>SPIN</button>
      </div>
    );
  }



}




export default App;
