
import Entity from './entity.js';
import Particle from '../particles/particle.js';


export default class EntityHandler {

	constructor() {
		this.entities = [];
		this.particles = [];
		this.arrays = [this.entities, this.particles];
	}

	add(object) {
		if (object instanceof Entity) {
			object.handler = this;
			this.entities.push(object);
		}
		if (object instanceof Particle) {
			object.handler = this;
			this.particles.push(object);
		}
	}

	tick() {
		for (const array of this.arrays) {
			for (let i = array.length - 1; i >= 0; --i) {
				const object = array[i];
				object.tick();
				if (object.dead) {
					array.splice(i, 1);
				}
			}
		}
	}

	draw(c) {
		for (const array of this.arrays) {
			for (let i = array.length - 1; i >= 0; --i) {
				const object = array[i];
				object.draw(c);
			}
		}
	}
}