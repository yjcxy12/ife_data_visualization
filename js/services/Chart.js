var d3 = require('../bower_components/d3/d3');

exports.drawPieChart = function (id, data) {
	d3.select('#' + id).select('svg').remove();

	var rect = d3.select('#' + id).node().getBoundingClientRect();
	var width = rect.width,
		height = rect.height;
	var radius = Math.min(width, height) / 2;

	var color = d3.scale.ordinal()
		.range(["#9b59b6", "#3498db", "#e67e22"]);

	var arc = d3.svg.arc()
		.outerRadius(radius - 10);

	var pie = d3.layout.pie()
		.sort(null)
		.value(function(d) { 
			return d.days; 
		});

	var svg = d3.select('#' + id).append("svg")
		.attr("width", width)
		.attr("height", height)
	.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var g = svg.selectAll(".arc")
		.data(pie(data))
		.enter().append("g")
		.attr("class", "arc");

	g.append("path")
		.attr("d", arc)
		.style("fill", function(d, i) { 
			return color(i); 
		});

	g.append("text")
		.attr("transform", function(d) { 
			return "translate(" + arc.centroid(d) + ")"; 
		})
		.attr("dy", ".35em")
		.style("text-anchor", "middle")
		.text(function(d) { 
			return d.data.name; 
		});
};

exports.drawDonutChart = function (id, data) {
	d3.select('#' + id).select('svg').remove();
};

exports.drawLineChart = function (id, data) {
	d3.select('#' + id).select('svg').remove();
};

exports.drawBarChart = function (id, data) {
	d3.select('#' + id).select('svg').remove();
};