define(['Class', 'RegularPolygon', 'Board'], function (Class, RegularPolygon, Board) {
					 
	return Class.extend({
		/**
		 * @method init - initializes the Class
		 */
		init: function (canvas, width, height) {
			
			// set up the canvas
			this.canvas = canvas || document.querySelector('canvas');
			this.canvas.width = this.width = width || 600;
			this.canvas.height = this.height = height || 400;
			
			// set up the context
			this.ctx = this.canvas.getContext('2d');
			
			this.modules = {
				board: new Board(width, height)
			};
			
			requestAnimationFrame(this.animate.bind(this));
		},
		/**
		 * @method update - updates the login
		 */
		update: function () {
		},
		/**
		 * @method draw - draws to the canvas
		 */
		draw: function () {
			this.ctx.clearRect(0, 0, this.width, this.height);
			this.modules.board.draw(this.ctx);
		},
		/**
		 * @method animate - a loop triggered when the browser is ready for another frame
		 */
		animate: function () {
			this.update();
			this.draw();
			
			requestAnimationFrame(this.animate.bind(this));
		}
	});
});