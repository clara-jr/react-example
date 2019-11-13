import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkull, faHeart, faQuestion, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

library.add(faSkull, faHeart, faQuestion, faMale, faFemale)

class MyCard extends Component {
  render() {
   return (
    <Col xs="12" sm="6" md="4" lg="3">
      <Card style={{ borderColor: '#282c34', marginBottom: '20px' }}>
        <Link to={"/name/"+this.props.id}>
          <CardImg top width="100%" src={this.props.image} />
          <CardHeader style={{ color: '#ff', backgroundColor: '#282c34', borderColor: '#282c34' }} tag="h4">{this.props.name}</CardHeader>
        </Link>
        <CardBody>
          <CardText>Status: { this.props.status === "Alive" ? <FontAwesomeIcon icon="heart" /> : this.props.status === "Dead" ?
            <FontAwesomeIcon icon="skull" /> : <FontAwesomeIcon icon="question" /> }</CardText>
          <CardText>Gender: { this.props.gender === "Male" ? <FontAwesomeIcon icon="male" /> : this.props.gender === "Female" ?
            <FontAwesomeIcon icon="female" /> : <FontAwesomeIcon icon="question" /> }</CardText>
          <CardText>Species: {this.props.species}</CardText>
        </CardBody>
      </Card>
    </Col>
   )
  }
};

export default MyCard;
