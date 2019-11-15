import React, {Component} from 'react';
import logo from './rickandmorty-logo.png';
import './App.css';
import { Input } from 'reactstrap';
import List from './List';

import { actions } from './store';
import { connect } from 'react-redux';

export class App extends Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.all_characters.length === 0 || this.props.all_characters.length !== this.props.characters.length) {
      fetch("https://rickandmortyapi.com/api/character")
        .then(result => result.json())
        .then(characters => this.props.set(characters.results));
    }
  }
  find = (e) => {
    console.log(e.target.value.toLowerCase());
    this.props.find(e.target.value.toLowerCase());
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <Input style={{ margin: 'auto', width: '200px' }} type="text" onChange={this.find} placeholder="name" />
        </header>
        { this.props.characters.length === 0 && <div>Cargando...</div> }
        <List valores={this.props.characters}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return { characters: state.characters, all_characters: state.all_characters, character: state.character };
}

const mapActions = {
  set: actions.setChars,
  find: actions.findChars
}

const characters = connect(mapState, mapActions)(App);

export default characters;