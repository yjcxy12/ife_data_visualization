var React = require('./bower_components/react/react');
var IfeChartRound = require('./components/IfeChartRound.js');
var IfeChartLine = require('./components/IfeChartLine.js');

var IfeChart = React.createClass({
	getInitialState: function () {
		return {
			city: 'beijing'
		};
	},

	render: function () {
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

		return (
			// <IfeChartMap />
			<div>
				<div style={styleChartRound}>
					<IfeChartRound city={this.state.city} />
				</div>

				<div style={styleChartLine}>
					<IfeChartLine city={this.state.city} />
				</div>
			</div>
		);
	}
});

React.render(<IfeChart />, document.body);