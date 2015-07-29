'use strict';

var React = require('../bower_components/react/react');
var Chart = require('../services/Chart');
var Data = require('../services/Data');

var IfeChartLine = React.createClass({
	displayName: 'IfeChartLine',

	getInitialState: function getInitialState() {
		return {
			tab: 'line'
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
		if (this.state.tab === 'bar') {
			Data.getAqiBar(this.props.city).then(function (data) {
				Chart.drawBarChart('line-chart-display', data);
			});
		} else {
			Data.getAqiLine(this.props.city).then(function (data) {
				Chart.drawLineChart('line-chart-display', data);
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
					{ className: this.state.tab === 'line' ? 'active' : null,
						onClick: this.handleTabCLick.bind(this, 'line'),
						style: tabStyle },
					'Line Chart'
				),
				React.createElement(
					'h4',
					{ className: this.state.tab === 'bar' ? 'active' : null,
						onClick: this.handleTabCLick.bind(this, 'bar'),
						style: tabStyle },
					'Bar Chart'
				)
			),
			React.createElement('div', { id: "line-chart-display", style: chartStyle })
		);
	}
});

module.exports = IfeChartLine;