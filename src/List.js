import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Card from './Card';

class List extends Component {
  render() {
    return (
      <Container>
        <Row className="show-grid">
          { this.props.valores.map((v, i) =>
              <Card key={i} id={v.id} name={v.name} image={v.image} status={v.status} gender={v.gender} species={v.species} />
            )
          }
        </Row>
      </Container>
    );
  }
};

export default List;
