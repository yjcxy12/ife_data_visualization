'use strict';

var React = require('../bower_components/react/react');
var Chart = require('./Chart');

var IfeChartRound = React.createClass({
	displayName: 'IfeChartRound',

	getInitialState: function getInitialState() {
		return {
			tab: 'donut'
		};
	},

	handleTabCLick: function handleTabCLick(tab) {
		this.setState({
			tab: tab
		});
	},

	componentDidMount: function componentDidMount() {
		if (this.state.tab === 'pie') {
			Chart.drawPieChart('round-chart-display');
		} else {
			Chart.drawDonutChart('round-chart-display');
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				null,
				React.createElement(
					'h4',
					{ className: this.state.tab === 'donut' ? 'active' : null,
						onClick: this.handleTabCLick.bind(this, 'donut') },
					'Donut Chart'
				),
				React.createElement(
					'h4',
					{ className: this.state.tab === 'pie' ? 'active' : null,
						onClick: this.handleTabCLick.bind(this, 'pie') },
					'Pie Chart'
				)
			),
			React.createElement('div', { id: "round-chart-display" })
		);
	}
});

module.exports = IfeChartRound;