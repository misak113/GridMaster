
import {EventEmitter} from 'events';

class ClickStore extends EventEmitter {

	constructor() {
		super();
		this.counter = 0;
	}

	static get() {
		if (!ClickStore.instance) {
			ClickStore.instance = new ClickStore();
		}
		return ClickStore.instance;
	}

	dispatchSelectedPoint(x, y) {
		this.emit('selected-point', x, y);
	}

	dispatchClick() {
		this.counter++;
		if (this.counter >= 2) {
			this.emit('reach');
		}
	}

	dispatchWidth(width) {
		this.emit('width', width);
	}

	dispatchRerenderIsDone() {
		this.emit('dispatchRerenderIsDone');
	}

	bindRerenderIsDone(listener) {
		this.on('dispatchRerenderIsDone', listener);
	}

	dispatchRerenderIsStarted() {
		this.emit('dispatchRerenderIsStarted');
	}

	bindRerenderIsStarted(listener) {
		this.on('bindRerenderIsStarted', listener);
	}

	bindWidth(listener) {
		this.on('width', listener);
	}

	bindSelectedPoint(listener) {
		this.on('selected-point', listener);
	}

	bindReachCounter(listener) {
		this.on('reach', listener);
	}
}
export default ClickStore;
