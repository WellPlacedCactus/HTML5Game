
import Mouse from './input/mouse.js';
import Keyboard from './input/keyboard.js';
import EntityHandler from './entities/entity-handler.js';
import GreenSquare from './entities/children/green-square.js';
import Random from './misc/random.js';

export default class Game {

	constructor() {
		this.canvas = document.querySelector('canvas');
		this.canvas.width = innerWidth;
		this.canvas.height = innerHeight;
		this.c = this.canvas.getContext('2d');
		Game.width = this.canvas.width;
		Game.height = this.canvas.height;

		this.random = new Random();
		this.entityHandler = new EntityHandler();
		for (let i = 0; i < 10; i++) {
			this.entityHandler.add(new GreenSquare(
				this.random.randint(0, Game.width - 150),
				this.random.randint(0, Game.height - 150),
				this.random.randint(100, 200),
				this.random.randint(100, 200)
			));
		}

		this.setupEvents();
		this.loop();
	}

	loop() {
		this.tick();
		this.draw();
		requestAnimationFrame(() => this.loop());
	}

	tick() {
		this.entityHandler.tick();
	}

	draw() {
		this.c.fillStyle = 'black';
		this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.entityHandler.draw(this.c);
	}

	resize() {
		this.canvas.width = innerWidth;
		this.canvas.height = innerHeight;
		Game.width = this.canvas.width;
		Game.height = this.canvas.height;
	}

	setupEvents() {
		addEventListener('resize', e => this.resize());
	}
}

Game.width = 0;
Game.height = 0;
Game.mouse = new Mouse();
Game.keyboard = new Keyboard();

addEventListener('load', function(){
	new Game();
});