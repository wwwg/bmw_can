window.onload = () => {
	var gauge = new Gauge(document.getElementById('tqGauge')).setOptions({
		angle: -0.2,
		lineWidth: 0.44,
		radiusScale: 1,
		pointer: {
			length: 0.6,
			strokeWidth: 0.035,
			color: '#000000'
		},
		limitMax: false, 
		limitMin: false, 
		colorStart: '#6FADCF', 
		colorStop: '#8FC0DA', 
		strokeColor: '#E0E0E0',
		generateGradient: true,
		highDpiSupport: true,
		percentColors: [[0.0, "#ffffff" ], [0.70, "#b30000"]],
		staticLabels: {
			font: "10px sans-serif",  // Specifies font
			labels: [100, 130, 150, 220.1, 260, 300],  // Print labels at these values
			color: "#000000",  // Optional: Label text color
			fractionDigits: 0  // Optional: Numerical precision. 0=round off.
		},
	}); 
	gauge.maxValue = 450;
	gauge.set(200);
}