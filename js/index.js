'use strict';

var React = require('./bower_components/react/react');
var IfeChartRound = require('./components/IfeChartRound.js');
var IfeChartLine = require('./components/IfeChartLine.js');

var IfeChart = React.createClass({
	displayName: 'IfeChart',

	getInitialState: function getInitialState() {
		return {
			city: 'beijing'
		};
	},

	render: function render() {
		var styleChartRound = {
			display: 'inline-block',
			width: '30%',
			position: 'relative',
			margin: '0 1%'
		};

		var styleChartLine = {
			display: 'inline-block',
			width: '60%',
			position: 'relative',
			margin: '0 1%'
		};

		return(
			// <IfeChartMap />
			React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ style: styleChartRound },
					React.createElement(IfeChartRound, { city: this.state.city })
				),
				React.createElement(
					'div',
					{ style: styleChartLine },
					React.createElement(IfeChartLine, { city: this.state.city })
				)
			)
		);
	}
});

React.render(React.createElement(IfeChart, null), document.body);