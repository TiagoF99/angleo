(function(){


	var data = [{
	  x: ['Montreal', 'Pointe-Aux-Trembles', 'Laval'],
	  y: [6448,37,28],
	  type: 'bar'
	}];


	var layout = {
		title: 'Number of places per city'
	};

	Plotly.newPlot('myDiv', data, layout, {showSendToCloud:true});
})();