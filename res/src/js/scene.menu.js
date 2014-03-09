Scene.Menu = function ( game ) {
}

Scene.Menu.prototype.create = function () {
	var bg = this.game.add.tileSprite( 0, 0, 320, 480, 'bg_tile' );
	bg.body = null;

	this.putLasers();
	this.putTitle();
	this.putSubTitle();
	this.putTapToInit();

	// Start game on tap
	this.game.input.onDown.addOnce( function () {
		this.game.state.start( 'Game' );
	}, this );
}

Scene.Menu.prototype.putTapToInit = function () {
	var that = this;
	this.taptoinit = this.game.add.sprite(
		this.game.world.centerX,
		this.game.world.height - 20,
		'taptoinit');
	this.taptoinit.anchor.setTo( 0.5, 1);
	this.taptoinit.animations.add( 'blink', [1, 0]);

	setTimeout(function () {
		that.taptoinit.animations.play( 'blink', 2, true );
	}, 2200 );
}

Scene.Menu.prototype.putSubTitle = function () {
	var that = this;
	this.subtitle = this.game.add.sprite( 0, 240, 'subtitle');
	this.subtitle.animations.add( 'blink', [16,17] );
	this.subtitle.animations.add( 'type', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] );


	setTimeout(function() {
		that.subtitle.animations.play( 'type', 20, false );
	}, 1500 );

	this.subtitle.events.onAnimationComplete.add ( function () {
		this.subtitle.animations.play( 'blink', 5, true);
	}, this );
}

Scene.Menu.prototype.putLasers = function () {
	var frames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
	for( var i = 0; i < 100; i++ ) {
		frames.push(27);
	}

	this.laser1 = this.game.add.sprite( 0, 30, 'laser');
	this.laser1.animations.add( 'shoot', frames );
	this.laser1.animations.play( 'shoot', 30, true );

	this.laser2 = this.game.add.sprite( 0, 280, 'laser');
	this.laser2.animations.add( 'shoot', frames );
	this.laser2.animations.play( 'shoot', 30, true );
}

Scene.Menu.prototype.putTitle = function () {
	var that = this;
	this.title = this.game.add.sprite( 0, 40, 'title');
	this.title.animations.add( 'glitch', [0,1,2,3,4,5,6,7] );
	this.title.animations.add( 'blink', [8,9,10,11] );

	setTimeout(function() {
		that.title.animations.play( 'glitch', 30, false );
	}, 1000 );

	this.title.events.onAnimationComplete.add( function () {
		this.flickerTitle();
	}, this );
}

Scene.Menu.prototype.flickerTitle = function () {
	var that = this;
	var time = ( Math.random() * 3000 ) + 1000;
	var anim = Math.floor( Math.random() * 5 );
	anim = ( anim < 1 ) ? "glitch" : "blink";

	setTimeout( function () {
		that.title.animations.play( anim, 20, false );
	}, time );
}
