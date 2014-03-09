Scene.Game = function ( game ) {
}

Scene.Game.prototype.create = function () {
	this.map = this.game.add.tilemap( 'level' );
	this.tileset = this.game.add.tileset( 'bgtiles' );

	this.tileset.setCollisionRange(0, this.tileset.tiles.length-1, false, false, false, false);

	this.layers = this.game.add.tilemapLayer( 0, 0, 320, 480, this.tileset, this.map, 0);
}
