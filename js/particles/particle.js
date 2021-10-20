

export default class Particle {

	constructor(x, y, size, color, vx, vy, decay) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = color;
		this.vx = vx;
		this.vy = vy;
		this.decay = decay;
		this.dead = false;
		this.handler = null;
	}

	die() {
		this.dead = true;
	}

	tick() {}

	draw(c) {
		c.fillStyle = this.color;
		c.fillRect(this.x, this.y, this.size, this.size);
	}
}