(function(){


	var data = [{
	  x: ['Montreal', 'Pointe-Aux-Trembles', 'Laval'],
	  y: [1,2,3],
	  type: 'bar'
	}];


	var layout = {
		title: 'Num items per city'
	};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud:true});
})();