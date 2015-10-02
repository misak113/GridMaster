
import {EventEmitter} from 'events';

class ClickStore extends EventEmitter {

	static get() {
		if (!ClickStore.instance) {
			ClickStore.instance = new ClickStore();
		}
		return ClickStore.instance;
	}

	dispatchSelectedPoint(x, y) {
		this.emit('selected-point', x, y);
	}

	bindSelectedPoint(listener) {
		this.on('selected-point', listener);
	}
}
export default ClickStore;
