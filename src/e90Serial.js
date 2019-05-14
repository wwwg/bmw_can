const SerialPort = require("serialport");
const EventEmitter = require('events');

const KCAN_BAUD = 100000; // Baud rate on KCAN 1 line

const e90Serial = class e90Serial extends EventEmitter {
	// device must be a K-CAN USB interface
	constructor(device) {
		super();
		let me = this;
		this.port = new SerialPort(device, {
		  baudRate: KCAN_BAUD
		});
		this.port.on('error', (err) => {
			me.emit('error', err);
		});
		this.port.on('data', data => {
			// todo
			console.log("recieved:", data);
		});
		this.port.on('open', (err) => {
			if (err) {
				me.emit('error', err);
				return;
			}
			me.emit('open');
		});
	}
	writeRaw(data) {
		let me = this;
		return new Promise((resolve, reject) => {
			port.write(data, err => {
				if (err)
					reject(err);
				else
					resolve();
			});
		});
	}
}
e90Serial.locateCANInterface = () => {
	return new Promise((resolve, reject) => {
		SerialPort.list().then(arr => {
			let canInterface;
			for (let i = 0; i < arr.length; ++i) {
				let interface = arr[i];
				if (interface.pnpId.includes('D-CAN')) {
					// Located interface with D-CANin pnpId
					canInterface = interface;
					break;
				}
			}
			resolve(canInterface);
		});
	});
}
module.exports = e90Serial;