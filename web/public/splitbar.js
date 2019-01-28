(function() {
	
	var trace1 = {
		  x: ['Montreal', 'Pointe-Aux-Trembles', 'Laval'],
		  y: [2304, 329, 291],
		  type: 'bar',
		  name: 'English',
		  marker: {
		    color: 'rgb(49,130,189)',
		    opacity: 0.7,
		  }
		};

		var trace2 = {
		  x: ['Montreal', 'Pointe-Aux-Trembles', 'Laval'],
		  y: [6719, 928, 729],
		  type: 'bar',
		  name: 'French',
		  marker: {
		    color: 'rgb(204,204,204)',
		    opacity: 0.5
		  }
		};

		var trace3 = {
		  x: ['Montreal', 'Pointe-Aux-Trembles', 'Laval'],
		  y: [7291, 1130, 928],
		  type: 'bar',
		  name: 'Bi-Lingual',
		  marker: {
		    color: 'rgb(123,104,54)',
		    opacity: 0.5
		  }
		};

		var trace4 = {
		  x: ['Montreal', 'Pointe-Aux-Trembles', 'Laval'],
		  y: [720, 52, 72],
		  type: 'bar',
		  name: 'Neither',
		  marker: {
		    color: 'rgb(214,81,75)',
		    opacity: 0.5
		  }
		};

		var data = [trace1, trace2, trace3, trace4];

		var layout = {
		  title: 'Language speaking comparison',
		  xaxis: {
		    tickangle: -45
		  },
		  barmode: 'group'
		};

		Plotly.newPlot('splitbar', data, layout,{showSendToCloud:true});




})();