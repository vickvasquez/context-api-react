import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {MyProvider} from './components/Provider'

import Perfil from './components/Perfil'

class App extends Component {
  render() {
    return (
		<MyProvider>
			<Perfil />
	  	</MyProvider>
    );
  }
}

export default App;
