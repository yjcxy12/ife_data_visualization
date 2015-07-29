var React = require('../bower_components/react/react');
var Chart = require('../services/Chart');
var Data = require('../services/Data');

var IfeChartRound = React.createClass({
	getInitialState: function () {
		return {
			tab: 'donut'
		};
	},

	handleTabCLick: function (tab) {
		this.setState({
			tab: tab
		});
	},

	componentDidMount: function () {
	    this.drawChart();
	},

	componentDidUpdate: function () {
		this.drawChart();
	},

	drawChart: function () {
		if (this.state.tab === 'pie') {
			Data.getAqiPie(this.props.city).then(function (data) {
				Chart.drawPieChart('round-chart-display', data);
			});
		}
		else {
			Data.getAqiDonut(this.props.city).then(function (data) {
				Chart.drawDonutChart('round-chart-display', data);
			});
		}
	},

	render: function () {
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

		return (
			<div style={boxStyle}>
				<div>
					<h4 className={this.state.tab === 'donut'? 'active' : null} 
						onClick={this.handleTabCLick.bind(this, 'donut')}
						style={tabStyle}>
						Donut Chart
					</h4>
					<h4 className={this.state.tab === 'pie'? 'active' : null} 
						onClick={this.handleTabCLick.bind(this, 'pie')}
						style={tabStyle}>
						Pie Chart
					</h4>
				</div>

				<div id="round-chart-display" style={chartStyle}>
				</div>
			</div>
		);
	}
});

module.exports = IfeChartRound;