Scene.Game = function ( game ) {
}

Scene.Game.prototype.create = function () {

	this.map = this.game.add.tilemap( 'level' );

	// Background
	this.map.addTilesetImage( 'bgtiles' );
	this.bgLayer = this.map.createLayer( 'Background' );
	this.bgLayer.resizeWorld();
	// this.tileset.setCollisionRange(0, this.tileset.tiles.length-1, false, false, false, false);
	// TODO some sort of collisions

	// MovingPads
	this.movingPads = this.game.add.group();
	this.map.createFromObjects( 'MovingPads', 4, 'pad', 0, true, false, this.movingPads); //TODO Change the sprite here and in Tiled as well
	this.movingPads.setAll('body.velocity.x', -100);

	// HUD
	this.hud = this.game.add.sprite( this.game.world.centerX, 10, 'hud');
	this.hud.anchor.setTo( 0.5, 0 );

	this.scanlines = this.game.add.sprite( this.game.world.centerX, 10, 'scanlines' );
	this.scanlines.anchor.setTo( 0.5, 0 );
	this.scanlines.animations.add( 'move' );
	this.scanlines.animations.play( 'move', 10, true );
}

Scene.Game.prototype.update = function () {

	// Flipping movingPads
	this.game.physics.overlap(this.movingPads, this.movingPads, function (pad) {
		pad.body.velocity.x *= -1;
	} );

	this.movingPads.forEach(function (pad) {
		if ( pad.body.x < 0 || ( pad.body.x + pad.body.width ) > this.game.world.width) {
			pad.body.velocity.x *= -1;
		}
	}, this, true);
}
