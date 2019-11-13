import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faSkull)

class Error extends Component {
  render() {
   return (
    <div>
      Error{this.props.error} <FontAwesomeIcon icon="skull" />
    </div>
   );
  }
};

export default Error;
