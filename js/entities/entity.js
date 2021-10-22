
import Random from '../misc/random.js';


export default class Entity {
	
	constructor(position, size, color) {
		this.position = position;
		this.size = size;
		this.color = color;
		this.dead = false;
		this.handler = null;
		this.random = new Random();
	}

	die() {
		this.dead = true;
	}

	tick() {}

	draw(c) {
		c.fillStyle = `hsl(${this.color}, 100%, 50%)`;
		c.fillRect(
			this.position[0],
			this.position[1],
			this.size[0],
			this.size[1],
		);
	}
}