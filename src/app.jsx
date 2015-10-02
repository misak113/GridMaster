
var React = require('react');
var Grid = require('./Grid');

React.render(
	React.createElement(Grid, { width: 3, height: 4 }),
	document.getElementById('app')
);
