
var React = require('react');
var Grid = require('./Grid');

React.render(
	React.createElement(Grid, { width: 40, height: 40 }),
	document.getElementById('app')
);
