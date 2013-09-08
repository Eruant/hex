define(['Class', 'Level', 'RegularPolygon'], function (Class, Level, RegularPolygon) {
					 
	return Class.extend({
		
		/**
		 * @method init - initializes the Class
		 */
		init: function (width, height) {
			this.width = width;
			this.height = height;
			this.cameraX = width / 2;
			this.cameraY = height / 2;
			this.tileSize = 32;
			this.level = new Level(0);
			this.regPoly = new RegularPolygon();
		},
		
		draw: function(ctx) {
			
			var tiles = this.level.current,
				len = tiles.length,
				i,
				item,
				x,
				y;
			
			ctx.save();
			ctx.translate(this.cameraX, this.cameraY);
			for (i = 0; i < len; i++) {
				tile = tiles[i];
				x = tile[0] * ((this.tileSize / 2) * 3);
				y = (tile[1] * (Math.sqrt(3) / 2) * (this.tileSize * 2)) + ((tile[0] * (Math.sqrt(3) / 2) * (this.tileSize * 2)) / 2);
				
				this.regPoly.drawPolygon(ctx, x, y, this.tileSize);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText(tile[0] + ':' + tile[1], x, y);
				ctx.stroke();
			}
			ctx.restore();
		}
	});
});