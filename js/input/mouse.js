

export default class Mouse {

	constructor() {
		this.x = 0;
		this.y = 0;
		this.buttons = [];
		this.setupEvents();
	}

	mousemoved({x, y}) {
		this.x = x;
		this.y = y;
	}

	mousedown({button}) {
		this.buttons[button] = true;
	}

	mouseup({button}) {
		this.buttons[button] = false;
	}

	setupEvents() {
		addEventListener('mousemove', e => this.mousemoved(e));
		addEventListener('mousedown', e => this.mousedown(e));
		addEventListener('mouseup', e => this.mouseup(e));
	}
}