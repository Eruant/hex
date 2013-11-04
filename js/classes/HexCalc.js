define(['Class'], function (Class) {

  return Class.extend({
    init: function () {
    },
    /**
     * @method hexRound - rounds cube co-ordinates to the nearest hexigon
     */
    hexRound: function (obj) {
      
      var rx, ry, rz, x_diff, y_diff, z_diff;

      rx = Math.round(obj.x);
      ry = Math.round(obj.y);
      rz = Math.round(obj.z);

      x_diff = Math.abs(rx - obj.x);
      y_diff = Math.abs(ry - obj.y);
      z_diff = Math.abs(rz - obj.z);

      if (x_diff > y_diff && x_diff > z_diff) {
        rx = -ry - rz;
      } else if (y_diff > z_diff) {
        ry = -rx - rz;
      } else {
        rz = -rx - ry;
      }

      return {
        x: rx,
        y: ry,
        z: rz
      };
    },
    /**
     * @method cubeToAxial - take a cube object and converts it to an axial object
     */
    cubeToAxial: function (obj) {
      return {
        q: obj.x,
        r: obj.z
      };
    },
    /**
     * @method axialToCube - takes an axial object and converts it to a cube object
     */
    axialToCube: function (obj) {
      var x, y, z;

      x = obj.q;
      z = obj.r;
      y = -x - z;

      return {
        x: x,
        y: y,
        z: z
      };
    }
  });
});
