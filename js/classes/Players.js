define(['Class'], function (Class) {

  return Class.extend({
    init : function (players) {
      
      this.players = players || [
        { "name": "playerOne", "color": "#0000ff" },
        { "name": "playerTwo", "color": "#ff0000" }
      ];

      this.turn = 0;
    }
  });

});
