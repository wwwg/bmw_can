const e90Serial = require('./e90Serial');

e90Serial.locateCANInterface().then(canInterface => {
	console.log('Detected D-CAN interface:');
	console.log(canInterface.pnpId);
	// create e90 serial connection with located interface
	let e90 = new e90Serial(canInterface.comName);
	e90.on('open', () => {
		console.log('e90 serial port opened!');
	});
	e90.on('error', console.log);
})