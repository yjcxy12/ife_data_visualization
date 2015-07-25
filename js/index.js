'use strict';

var React = require('./bower_components/react/react');
var IfeChartRound = require('./components/IfeChartRound.js');
// require('./components/IfeChartLine.js');

var IfeChart = React.createClass({
	displayName: 'IfeChart',

	render: function render() {
		var styleChartRound = {
			width: '30%',
			position: 'relative'
		};

		var styleChartLine = {
			width: '70%',
			position: 'relative'
		};

		return(
			// <IfeChartMap />
			// <IfeChartMap />
			React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ style: styleChartRound },
					React.createElement(IfeChartRound, null)
				),
				React.createElement(
					'div',
					{ style: styleChartLine },
					'// ',
					React.createElement('styleChartLine', null)
				)
			)
		);
	}
});

React.render(React.createElement(IfeChart, null), document.body);