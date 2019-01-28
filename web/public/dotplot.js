(function() {


	var data = [{
	  x: ['Montreal', 'Pointe-Aux-Trembles', 'Laval'],
	  y: [4, 3.23, 3.74],
	  type: 'bar'
	}];


	var layout = {
		title: 'Average rating per city'
	};

Plotly.newPlot('bar2', data, layout, {showSendToCloud:true});
})();