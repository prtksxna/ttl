(function () {
	var game = new Phaser.Game(320, 480, Phaser.AUTO, '');
	game.state.add('Boot', Scene.Boot);
	game.state.add('Preloader', Scene.Preloader);
	game.state.add('Menu', Scene.Menu);
	game.state.start('Boot');
})();
