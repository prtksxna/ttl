Scene.Preloader = function ( game ) {
}

Scene.Preloader.prototype.preload = function () {
	this.game.stage.backgroundColor = "#021d20";

	var logo = this.game.add.sprite( this.game.world.centerX, this.game.world.centerY, 'logo' );
	logo.anchor.setTo( 0.5, 0.5 );
	logo.animations.add( 'pulse' );
	logo.animations.play( 'pulse', 30, true);

	// Menu
	this.game.load.image( 'bg_tile', 'res/assets/img/bg_tile.png' );
	this.game.load.atlasJSONArray( 'laser', 'res/assets/img/laser.png', 'res/assets/img/laser.json' );
	this.game.load.atlasJSONArray( 'title', 'res/assets/img/title.png', 'res/assets/img/title.json' );
	this.game.load.atlasJSONArray( 'subtitle', 'res/assets/img/subtitle.png', 'res/assets/img/subtitle.json' );
	this.game.load.atlasJSONArray( 'taptoinit', 'res/assets/img/taptoinit.png', 'res/assets/img/taptoinit.json' );

	// Game
	this.game.load.tilemap( 'level', 'res/assets/img/allevels.json', null, Phaser.Tilemap.TILED_JSON);
	this.game.load.image( 'bgtiles', 'res/assets/img/bgtiles.png', 32, 32 );
	this.game.load.atlasJSONArray( 'scanlines', 'res/assets/img/scanlines.png', 'res/assets/img/scanlines.json' );
	this.game.load.image( 'hud', 'res/assets/img/hud.png' );
	this.game.load.image( 'pad', 'res/assets/img/pad.png' );

}

Scene.Preloader.prototype.create = function () {
	this.game.state.start( 'Menu' );
}
