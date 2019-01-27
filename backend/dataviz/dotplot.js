(function() {


	var data = [{
	  x: ['Montreal', 'Quebec City', 'Another one'],
	  y: [20, 14, 23],
	  type: 'bar'
	}];


	var layout = {
		title: 'Average rating per city'
	};

Plotly.newPlot('bar2', data, layout, {showSendToCloud:true});
})();