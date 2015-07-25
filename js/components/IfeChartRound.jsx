var React = require('../bower_components/react/react');
var Chart = require('./Chart');

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
	    if (this.state.tab === 'pie') {
	    	Chart.drawPieChart('round-chart-display');
	    }  
	    else {
	    	Chart.drawDonutChart('round-chart-display');
	    }
	},

	render: function () {
		return (
			<div>
				<div>
					<h4 className={this.state.tab === 'donut'? 'active' : null} 
						onClick={this.handleTabCLick.bind(this, 'donut')}>
						Donut Chart
					</h4>
					<h4 className={this.state.tab === 'pie'? 'active' : null} 
						onClick={this.handleTabCLick.bind(this, 'pie')}>
						Pie Chart
					</h4>
				</div>

				<div id="round-chart-display">
				</div>
			</div>
		);
	}
});

module.exports = IfeChartRound;