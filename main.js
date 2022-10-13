title = "GOLD HUNTER";

description = `
`;

characters = [];

const G = {
	WIDTH: 200,
	HEIGHT: 150
};

options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
    isCapturing: true,
    isCapturingGameCanvasOnly: true,
    isReplayEnabled: true,
    captureCanvasScale: 2,
};

/**
 * @typedef {{
 * pos: Vector,
 * }} Player
 */

/**
 * @type { Player }
 */
let player;

/**
 * @typedef {{
 * pos: Vector,
 * }} Enemy
 */

/**
 * @type { Enemy [] }
 */
let enemies;

/**
 * @type { number }
 */
 let currentEnemySpeed;

/**
 * @typedef {{
 * pos: Vector,
 * }} Gold
 */

/**
 * @type { Gold [] }
 */
let golds;

function update() {
	if (!ticks) {

		player = {
			pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5)
		};

	}

	player.pos = vec(input.pos.x, input.pos.y);
    player.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);
	color ("green");
	box(player.pos, 4);


}
