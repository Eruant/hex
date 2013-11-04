define(['Class', 'RegularPolygon', 'Board', 'Pointer', 'HexCalc', 'Players'], function (Class, RegularPolygon, Board, Pointer, HexCalc, Players) {

  var selectedTileX = 0,
    selectedTileY = 0;
					 
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
				board: new Board(width, height),
        pointer: new Pointer(this.canvas),
        hexCalc: new HexCalc(),
        players: new Players()
			};

			requestAnimationFrame(this.animate.bind(this));
		},
		/**
		 * @method update - updates the login
		 */
		update: function () {
      var pointerPosition = this.modules.pointer.getPosition(),
        size = this.modules.board.tileSize,
        x = pointerPosition.x - this.modules.board.cameraX,
        y = -(pointerPosition.y - this.modules.board.cameraY),
        q = 2 / 3 * x / size;
        r = (1 / 3 * Math.sqrt(3) * y - 1 / 3 * x) / size,
        axialObj = this.modules.hexCalc.axialToCube({ q:q, r:r }),
        cubeObj = this.modules.hexCalc.hexRound(axialObj);

      if (selectedTileX !== cubeObj.x || selectedTileY !== cubeObj.y) {
        // new turn see which player clicked and if the move is allowed
				console.log('new turn');
      }
      
      selectedTileX = cubeObj.x;
      selectedTileY = cubeObj.y;
		},
		/**
		 * @method draw - draws to the canvas
		 */
		draw: function () {
			this.ctx.clearRect(0, 0, this.width, this.height);
			this.modules.board.draw(this.ctx, selectedTileX, selectedTileY);
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
