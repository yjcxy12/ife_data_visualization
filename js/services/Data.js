var d3 = require('../bower_components/d3/d3');
var q = require('../bower_components/q/q');

module.exports = (function () {
	return {
		getAqiData: function () {
			var defer = q.defer();

			d3.csv("../../data/aqidata.csv", function(error, data) {
				if (error) {
					defer.reject(error);
				}
				else {
					defer.resolve(data);
				}
			});

			return defer.promise;
		},

		getAqiPie: function (city) {
			var defer = q.defer();

			this.getAqiData()
				.then(function (csv) {
					var high = 0,
						mid = 0,
						low = 0;

					csv.map(function (data) {
						var aqi = +data[city];

						if (aqi > 300) {
							high += 1;
						}
						else if (aqi > 200) {
							mid += 1;
						}
						else {
							low += 1;
						}
					});

					defer.resolve([
						{
							name: "AQI > 300",
							days: high,
							percent: (high / (csv.length)).toFixed(2) * 100
						},
						{
							name: "200 < AQI < 300",
							days: mid,
							percent: (mid / (csv.length)).toFixed(2) * 100
						},
						{
							name: "AQI < 200",
							days: low,
							percent: (low / (csv.length)).toFixed(2) * 100
						}
					]);
				})
				.catch(function (e) {
					defer.reject(e);
				});

			return defer.promise;
		},

		getAqiDonut: function (city) {
			var defer = q.defer();

			this.getAqiData()
				.then(function (csv) {
					var high = 0,
						low = 0;

					csv.map(function (data) {
						var aqi = +data[city];
						
						if (aqi > 200) {
							high += 1;
						}
						else {
							low += 1;
						}
					});

					defer.resolve([
						{
							name: "AQI > 200",
							days: high,
							percent: (high / (csv.length)).toFixed(2) * 100
						},
						{
							name: "AQI < 200",
							days: low,
							percent: (low / (csv.length)).toFixed(2) * 100
						}
					]);
				})
				.catch(function (e) {
					defer.reject(e);
				});

			return defer.promise;
		},

		getAqiLine: function (city) {
			return this.getAqiData();
		},

		getAqiBar: function (city) {
			return this.getAqiData();
		}
	};
})();