import React, {Component} from 'react';
import logo from './rickandmorty-logo.png';
import './App.css';
import { Input } from 'reactstrap';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      all_characters: [],
      characters: []
    }
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then(result => result.json())
      .then(characters => this.setState({characters: characters.results, all_characters: characters.results}));
  }
  find = (e) => {
    this.setState({characters: this.state.all_characters.filter((v, i) => v.name.toLowerCase().includes(e.target.value.toLowerCase()))})
  }
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <Input style={{ margin: 'auto', width: '200px' }} type="text" onChange={this.find} placeholder="name" />
        </header>
        <List valores={this.state.characters}/>
      </div>
    );
  }
}

export default App;