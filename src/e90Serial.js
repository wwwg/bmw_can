const SerialPort = require("serialport").SerialPort;
const EventEmitter = require('events');

const KCAN_BAUD = 100000; // Baud rate on KCAN 1 line

const e90Serial = class e90Serial extends EventEmitter {
	// device must be a K-CAN USB interface
	constructor(device) {
		super();
		this.port = new SerialPort(device, {
		  baudrate: KCAN_BAUD
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