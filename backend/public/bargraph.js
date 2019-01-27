(function(){


	var data = [{
	  x: ['Montreal', 'Quebec City', 'Another one'],
	  y: [20, 14, 23],
	  type: 'bar'
	}];


	var layout = {
		title: 'Num items per city'
	};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud:true});
})();