var React = require('./bower_components/react/react');
var IfeChartRound = require('./components/IfeChartRound.js');
// require('./components/IfeChartLine.js');

var IfeChart = React.createClass({
	render: function () {
		var styleChartRound = {
			width: '30%',
			position: 'relative'
		};

		var styleChartLine = {
			width: '70%',
			position: 'relative'
		};

		return (
			// <IfeChartMap />
			<div>
				<div style={styleChartRound}>
					<IfeChartRound />
				</div>

				<div style={styleChartLine}>
					// <styleChartLine />
				</div>
			</div>
		);
	}
});

React.render(<IfeChart />, document.body);