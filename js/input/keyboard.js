

export default class Keyboard {

	constructor() {
		this.keys = [];
		this.setupEvents();
	}

	keydown({keyCode}) {
		this.keys[keyCode] = true;
	}

	keyup({keyCode}) {
		this.keys[keyCode] = false;
	}

	setupEvents() {
		addEventListener('keydown', e => this.keydown(e));
		addEventListener('keyup', e => this.keyup(e));
	}
}