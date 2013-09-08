define(['Class'], function (Class) {
					 
	return Class.extend({
		
		/**
		 * @cfg {Object} levels - an array of level data
		 */
		levels: [
			[
				[-3,  0],
				[-3,  1],
				[-3,  2],
				[-3,  3],
				[-2, -1],
				[-2,  0],
				[-2,  1],
				[-2,  2],
				[-2,  3],
				[-1, -2],
				[-1, -1],
				[-1,  0],
				[-1,  1],
				[-1,  2],
				[-1,  3],
				[ 0, -3],
				[ 0, -2],
				[ 0, -1],
				[ 0,  0],
				[ 0,  1],
				[ 0,  2],
				[ 0,  3],
				[ 1, -3],
				[ 1, -2],
				[ 1, -1],
				[ 1,  0],
				[ 1,  1],
				[ 1,  2],
				[ 2, -3],
				[ 2, -2],
				[ 2, -1],
				[ 2,  0],
				[ 2,  1],
				[ 3, -3],
				[ 3, -2],
				[ 3, -1],
				[ 3,  0]
			]
		],
		/**
		 * @method init - initializes the Class
		 */
		init: function (lvl) {
			this.loadLevel(lvl || 0); // clone single level
		},
		loadLevel: function (id) {
			this.current = this.levels[id].slice(0);
		}
	});
});