import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';

function Navbar() {
	return (
		<div className="App-navbar">
		<Breadcrumbs>
			<Link  to="/">Home </Link>
			<Link to="/about">About </Link>
			<Link to="/register">Register </Link>
			<Link to="/finance">Finance</Link>
		</Breadcrumbs>
		</div>
	);
};

export default Navbar;
