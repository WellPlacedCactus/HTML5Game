

export default class Entity {
	
	constructor(x, y, width, height, color='white') {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.dead = false;
		this.handler = null;
	}

	die() {
		this.dead = true;
	}

	tick() {}

	draw(c) {
		c.fillStyle = this.color;
		c.fillRect(this.x, this.y, this.width, this.height);
	}
}