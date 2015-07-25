var d3 = require('../bower_components/d3/d3');



exports.drawPieChart = function (id) {
	
};

exports.drawDonutChart = function (id) {
	var rect = d3.select('#' + id).node().getBoundingClientRect();
	var width = rect.width,
		height = 300;
	var radius = Math.min(width, height) / 2;

	var color = d3.scale.ordinal()
		.range(["#98abc5", "#8a89a6", "#7b6888"]);

	var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(radius - 70);

	var pie = d3.layout.pie()
		.sort(null)
		.value(function(d) { return d; });

	var svg = d3.select('#' + id).append("svg")
		.attr("width", width)
		.attr("height", height)
	.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	d3.csv("../../data/aqidata.csv", function(error, data) {

		data.forEach(function(d) {
			d.beijing = +d.beijing;
		});

		var goodArr = data.filter(function (d) {
			return d.beijing < 200;
		});

		var middleArr = data.filter(function (d) {
			return d.beijing >= 200 && d.beijing < 300;
		});

		var badArr = data.filter(function (d) {
			return d.beijing >= 300;
		});

		var pieData = [goodArr.length, middleArr.length, badArr.length];

		var g = svg.selectAll(".arc")
			.data(pie(pieData))
			.enter().append("g")
			.attr("class", "arc");

		g.append("path")
			.attr("d", arc)
			.style("fill", function(d, i) { return color(i); });

		g.append("text")
			.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
			.attr("dy", ".35em")
			.style("text-anchor", "middle")
			.text(function(d) { return d.data; });

	});
};