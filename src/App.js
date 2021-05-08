import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Input from './Components/Input/Input';

import Footer from './Components/Footer/Footer'


export class App extends Component {
  
  render() {
      return (
        <div >
      
        <Header/>
        <Input/>
        
        <Footer/>
      </div>
          
      )
  }
}

export default App
