import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      	<div className="menu">
			<NavLink to="/index">Inicio</NavLink>
		</div>
    );
  }
};

class MyFooter extends Component {
  render() {
  	console.log(this.props.location.pathname !== '/index');
  	if (this.props.location.pathname !== '/' && this.props.location.pathname !== '/index' && !this.props.location.pathname.startsWith('/name')) {
  		return <div></div>
  	}
    return (
      	<div className="footer">
			Rick y Morty by clara-jr
		</div>
    );
  }
};

export const Footer = withRouter(MyFooter);
