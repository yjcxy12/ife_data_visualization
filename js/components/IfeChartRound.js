'use strict';

var React = require('../bower_components/react/react');
var Chart = require('../services/Chart');
var Data = require('../services/Data');

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
		this.drawChart();
	},

	componentDidUpdate: function componentDidUpdate() {
		this.drawChart();
	},

	drawChart: function drawChart() {
		if (this.state.tab === 'pie') {
			Data.getAqiPie(this.props.city).then(function (data) {
				Chart.drawPieChart('round-chart-display', data);
			});
		} else {
			Data.getAqiDonut(this.props.city).then(function (data) {
				Chart.drawDonutChart('round-chart-display', data);
			});
		}
	},

	render: function render() {
		var boxStyle = {
			border: "1px solid #bbb",
			borderRadius: "2px",
			boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
		};

		var chartStyle = {
			display: "inline-block",
			position: "relative",
			width: "100%",
			height: "300px"
		};

		var tabStyle = {
			display: "inline-block",
			cursor: "pointer",
			padding: "10px",
			WebkitUserSelect: "none",
			userSelect: "none"
		};

		return React.createElement(
			'div',
			{ style: boxStyle },
			React.createElement(
				'div',
				null,
				React.createElement(
					'h4',
					{ className: this.state.tab === 'donut' ? 'active' : null,
						onClick: this.handleTabCLick.bind(this, 'donut'),
						style: tabStyle },
					'Donut Chart'
				),
				React.createElement(
					'h4',
					{ className: this.state.tab === 'pie' ? 'active' : null,
						onClick: this.handleTabCLick.bind(this, 'pie'),
						style: tabStyle },
					'Pie Chart'
				)
			),
			React.createElement('div', { id: "round-chart-display", style: chartStyle })
		);
	}
});

module.exports = IfeChartRound;