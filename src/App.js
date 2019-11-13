import React, {Component} from 'react';
import logo from './rickandmorty-logo.png';
import './App.css';
import { Input } from 'reactstrap';
import * as characters from './characters.json';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      characters: []
    }
  }
  componentDidMount() {
    this.setState({characters: characters.results});
  }
  find = (e) => {
    this.setState({characters: characters.results.filter((v, i) => v.name.toLowerCase().includes(e.target.value.toLowerCase()))})
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