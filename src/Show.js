import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkull, faHeart, faQuestion, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import Error from './Error';
import * as characters from './characters.json';
library.add(faSkull, faHeart, faQuestion, faMale, faFemale)

class MyCard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id)
    this.state = {
      result: characters.results.filter((v, i) => v.id == this.props.match.params.id)[0]
    }
  }
  render() {
    if (!this.state.result) {
      return <Error error={": Character with id " + this.props.match.params.id + " not found"}/>
    }
    return (
      <Col xs="12" sm="6" md="4" lg="3" style={{ margin: 'auto' }}>
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
