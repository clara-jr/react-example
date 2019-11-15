import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkull, faHeart, faQuestion, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import Error from './Error';
import { actions } from './store';
import { connect } from 'react-redux';
library.add(faSkull, faHeart, faQuestion, faMale, faFemale);

export class MyCard extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.get(this.props.match.params.id);
    console.log(this.props);
  }
  render() {
    if (!this.props.characters.length || !this.props.all_characters.length) {
      return <Error error={": No character has been loaded"}/>
    }
    else if (!this.props.character) {
      return <Error error={": Character with id " + this.props.match.params.id + " not found"}/>
    } else {
      return (
        <Col xs="12" sm="6" md="4" lg="3" style={{ margin: 'auto' }}>
          { this.props.character.length === 0 && <div>Cargando...</div> }
          <Card style={{ borderColor: '#282c34', marginBottom: '20px' }}>
            <CardImg top width="100%" src={this.props.character.image} />
            <CardHeader style={{ color: '#ff', backgroundColor: '#282c34', borderColor: '#282c34' }} tag="h4">{this.props.character.name}</CardHeader>
            <CardBody>
              <CardText>Status: { this.props.character.status === "Alive" ? <FontAwesomeIcon icon="heart" /> : this.props.character.status === "Dead" ?
                <FontAwesomeIcon icon="skull" /> : <FontAwesomeIcon icon="question" /> }</CardText>
              <CardText>Gender: { this.props.character.gender === "Male" ? <FontAwesomeIcon icon="male" /> : this.props.character.gender === "Female" ?
                <FontAwesomeIcon icon="female" /> : <FontAwesomeIcon icon="question" /> }</CardText>
              <CardText>Species: {this.props.character.species}</CardText>
            </CardBody>
          </Card>
        </Col>
      );
    }
  }
};

const mapState = (state) => {
  return { characters: state.characters, all_characters: state.all_characters, character: state.character };
}

const mapActions = {
  get: actions.getChar
}

const character = connect(mapState, mapActions)(MyCard);

export default character;
