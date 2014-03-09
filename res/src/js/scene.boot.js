Scene.Boot = function ( game ) {
}

Scene.Boot.prototype = {
	preload: function () {
		this.game.stage.backgroundColor = "#021d20";
		this.game.load.atlasJSONArray( 'logo', 'res/assets/img/logo.png', 'res/assets/img/logo.json' );
	},

	create: function () {
		this.game.state.start( 'Preloader' );
	}
}
