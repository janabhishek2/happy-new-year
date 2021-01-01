import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Confetti from 'react-confetti';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Message from './components/message';
class App extends Component {

  state={
    clicked:false,
    displayMsg:false,
    classMsg:'d-none',
    classFirst:'col-6',
   
  }
 
  handleClick=()=>{
    this.setState({clicked:true});
    window.setTimeout(()=>{
     this.setState({classMsg:'col-12'});
     this.setState({classFirst:'d-none'});
    },3000);
  }
  getStylesFirst=()=>{
    const styles={transform: 'translate(-100%,0px)'}
    if(this.state.clicked==true)
    {
      return styles;
    }
    else return null;
  }
  getStylesSecond=()=>{
    const styles={transform: 'translate(100%,0px)'}
    if(this.state.clicked==true)
    {
      return styles;
    }
    else return null;
  }


render(){
 
  return(<div className="container">
    {this.state.clicked==true ? <Confetti  width={window.innerWidth} height={window.innerHeight+500}/> : null}
    <div className="card">
      <div className="card-header d-flex">
        <button onClick={this.handleClick} className="btn btn-primary btn-lg mx-auto btn-block">Click Me</button>
      </div>
      <div className="card-body cb" style={{width : '300'}}>
     <div className="row">
     <img  id="fhalf" className={this.state.classFirst} style={this.getStylesFirst()} src="https://raw.githubusercontent.com/janabhishek2/images/main/783-7830138_2-theater-curtain-1.png"/>
    <span  className={this.state.classMsg} id="message"><div className="d-flex"><h3 className="mx-auto"><i>HAPPY NEW YEAR</i></h3>
    
    </div>
    <div>
      <p>On this New Year, may you change your direction and not dates, change your commitments and not the calendar, change your attitude and not the actions, and bring about a change in your faith, your force, and your focus and not the fruit. May you live up to the promises you have made and may you create for you and your loved ones the happiest New Year ever.</p>
    </div>

    <div>
      <p className="text-right"><i>- Renu Raina</i></p>
    </div>
    </span>
      <img id="shalf" className={this.state.classFirst} style={this.getStylesSecond()} src="https://raw.githubusercontent.com/janabhishek2/images/main/783-7830138_2-theater-curtain.png"/>
     </div>
        
     
      </div>
    </div>
  </div>);
}
}
export default App;
