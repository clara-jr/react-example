import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkull, faHeart, faQuestion, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import Error from './Error';
library.add(faSkull, faHeart, faQuestion, faMale, faFemale)

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      error: ''
    }
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/"+this.props.match.params.id)
      .then(result => result.json())
      .then(character => {
        if (character.error) this.setState({error: character.error})
        else this.setState({result: character})
      })
      .catch(error => this.setState({error: error}))
  }
  render() {
    if (this.state.error) {
      return <Error error={": Character with id " + this.props.match.params.id + " not found"}/>
    }
    return (
      <Col xs="12" sm="6" md="4" lg="3" style={{ margin: 'auto' }}>
        { this.state.result.length === 0 && <div>Cargando...</div> }
        <Card style={{ borderColor: '#282c34', marginBottom: '20px' }}>
          <CardImg top width="100%" src={this.state.result.image} />
          <CardHeader style={{ color: '#ff', backgroundColor: '#282c34', borderColor: '#282c34' }} tag="h4">{this.state.result.name}</CardHeader>
          <CardBody>
            <CardText>Status: { this.state.result.status === "Alive" ? <FontAwesomeIcon icon="heart" /> : this.state.result.status === "Dead" ?
              <FontAwesomeIcon icon="skull" /> : <FontAwesomeIcon icon="question" /> }</CardText>
            <CardText>Gender: { this.state.result.gender === "Male" ? <FontAwesomeIcon icon="male" /> : this.state.result.gender === "Female" ?
              <FontAwesomeIcon icon="female" /> : <FontAwesomeIcon icon="question" /> }</CardText>
            <CardText>Species: {this.state.result.species}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
};

export default MyCard;
