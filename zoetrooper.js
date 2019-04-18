//this has all the storm trooper poses in it. 
var troopergroup = new THREE.Group();
//# of frames elapsed since start 
var timer = 0;
//this is what's strobed
var ambientLight; 

//12 poses of the model 
var action1;
var action2;
var action3;
var action4;
var action5;
var action6;
var action7;
var action8;
var action9;
var action10;
var action11;
var action12;

var avatar1, avatar2, avatar3, avatar4, avatar5; 


if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats, clock, controls;
var  renderer, mixer1, mixer2, mixer3, mixer4, mixer5;
var mixer6, mixer7, mixer8, mixer9, mixer10, mixer11, mixer12;

init();
//animate();

function init() {

	container = document.getElementById( 'container' );
   
	// collada
   var loader1 = new THREE.ColladaLoader();
	loader1.load( 'stormtrooper.dae', function ( collada1 ) {

		var animations1 = collada1.animations;
		avatar1 = collada1.scene;
		mixer1 = new THREE.AnimationMixer( avatar1 );
        action1 = mixer1.clipAction( animations1[ 0] ).play();  
        avatar1.position.set(11 * Math.cos(1 * 30 / 180 * 3.14 ),0,11 * Math.sin(1*30 / 180 * 3.14));
        avatar1.material = new THREE.MeshBasicMaterial({color: 0x00ffff,side: THREE.DoubleSide});

      	troopergroup.add( avatar1 );
      
//                   download(exporter.parse(avatar1), 'stormtrooper1.obj','text/obj' );
	} );
   
   
   var loader2 = new THREE.ColladaLoader();
	loader2.load( 'stormtrooper.dae', function ( collada2 ) {

		var animations2 = collada2.animations;
		avatar2 = collada2.scene;
		mixer2 = new THREE.AnimationMixer( avatar2 );
        action2 = mixer2.clipAction( animations2[ 0] ).play();
      	avatar2.position.set(11 * Math.cos(2*30 / 180 * 3.14 ),0,11 * Math.sin(2*30 / 180 * 3.14));
      	avatar2.material = new THREE.MeshBasicMaterial({color: 0x00ffff,side: THREE.DoubleSide});
        troopergroup.add( avatar2 );
//                   download(exporter.parse(avatar2), 'stormtrooper2.obj','text/obj' );

	} );
	//
   var loader3 = new THREE.ColladaLoader();
	loader3.load( 'stormtrooper.dae', function ( collada3 ) {

		var animations3 = collada3.animations;
		var avatar3 = collada3.scene;
		mixer3 = new THREE.AnimationMixer( avatar3 );
        action3 = mixer3.clipAction( animations3[ 0] ).play();
      	avatar3.position.set(11 * Math.cos(3*30 / 180 *3.14),0,11 * Math.sin(3*30 / 180 * 3.14));
        troopergroup.add( avatar3 );
//                   download(exporter.parse(avatar3), 'stormtrooper3.obj','text/obj' );

	} );
   
   var loader4 = new THREE.ColladaLoader();
	loader4.load( 'stormtrooper.dae', function ( collada4 ) {

		var animations4 = collada4.animations;
		var avatar4 = collada4.scene;
		mixer4 = new THREE.AnimationMixer( avatar4 );
        action4 = mixer4.clipAction( animations4[ 0] ).play();
        avatar4.position.set(11 * Math.cos(4*30 / 180 * 3.14),0,11 * Math.sin(4*30 / 180 * 3.14));
        troopergroup.add( avatar4 );
//               download(exporter.parse(avatar4), 'stormtrooper4.obj','text/obj' );
	} );

   var loader5 = new THREE.ColladaLoader();
	loader5.load( 'stormtrooper.dae', function ( collada5 ) {

		var animations5 = collada5.animations;
		var avatar5 = collada5.scene;
		mixer5 = new THREE.AnimationMixer( avatar5 );
        action5 = mixer5.clipAction( animations5[ 0] ).play();
      	avatar5.position.set(11 * Math.cos(5*30 / 180 * 3.14 ),0,11 * Math.sin(5*30 / 180 * 3.14));
        troopergroup.add( avatar5 );
//                   download(exporter.parse(avatar5), 'stormtrooper5.obj','text/obj' );
	} );
   
   var loader6 = new THREE.ColladaLoader();
	loader6.load( 'stormtrooper.dae', function ( collada6 ) {

		var animations6 = collada6.animations;
		var avatar6 = collada6.scene;
		mixer6 = new THREE.AnimationMixer( avatar6 );
        action6 = mixer6.clipAction( animations6[ 0] ).play();

        troopergroup.add( avatar6 );
      	avatar6.position.set(11 * Math.cos(6*30 / 180 * 3.14 ),0,11 * Math.sin(6*30 / 180 * 3.14));
//                   download(exporter.parse(avatar6), 'stormtrooper6.obj','text/obj' );
	} );
   
   var loader7 = new THREE.ColladaLoader();
	loader7.load( 'stormtrooper.dae', function ( collada7 ) {

		var animations7 = collada7.animations;
		var avatar7 = collada7.scene;
		mixer7 = new THREE.AnimationMixer( avatar7 );
        action7 = mixer7.clipAction( animations7[ 0] ).play();
     	avatar7.position.set(11 * Math.cos(7*30 / 180 * 3.14 ),0,11 * Math.sin(7*30 / 180 * 3.14));
        troopergroup.add( avatar7 );
//                   download(exporter.parse(avatar7), 'stormtrooper7.obj','text/obj' );
	} );
   
   var loader8 = new THREE.ColladaLoader();
	loader8.load( 'stormtrooper.dae', function ( collada8 ) {

		var animations8 = collada8.animations;
		var avatar8 = collada8.scene;
		mixer8 = new THREE.AnimationMixer( avatar8 );
        action8 = mixer8.clipAction( animations8[ 0] ).play();
      	avatar8.position.set(11 * Math.cos(8*30 / 180 * 3.14),0,11 * Math.sin(8*30 / 180 * 3.14));
        troopergroup.add( avatar8 );
//                    download(exporter.parse(avatar8), 'stormtrooper8.obj','text/obj' );
	} );
   
   
   var loader9 = new THREE.ColladaLoader();
	loader9.load( 'stormtrooper.dae', function ( collada9 ) {

		var animations9 = collada9.animations;
		var avatar9 = collada9.scene;
		mixer9 = new THREE.AnimationMixer( avatar9 );
        action9 = mixer9.clipAction( animations9[ 0] ).play();
        avatar9.position.set(11 * Math.cos(9*30 / 180 * 3.14 ),0,11 * Math.sin(9*30 / 180 * 3.14));
        troopergroup.add( avatar9 );
//                    download(exporter.parse(avatar9), 'stormtrooper9.obj','text/obj' );
	} );
   
   var loader10 = new THREE.ColladaLoader();
	loader10.load( 'stormtrooper.dae', function ( collada10 ) {

		var animations10 = collada10.animations;
		var avatar10 = collada10.scene;
		mixer10 = new THREE.AnimationMixer( avatar10 );
        action10 = mixer10.clipAction( animations10[ 0] ).play();
      	avatar10.position.set(11 * Math.cos(10*30 / 180 * 3.14),0,11 * Math.sin(10*30 / 180 * 3.14));
        troopergroup.add( avatar10 );
//                    download(exporter.parse(avatar10), 'stormtrooper10.obj','text/obj' );
	} );
   
    var loader11 = new THREE.ColladaLoader();
	loader11.load( 'stormtrooper.dae', function ( collada11 ) {

		var animations11 = collada11.animations;
		var avatar11 = collada11.scene;
		mixer11 = new THREE.AnimationMixer( avatar11 );
        action11 = mixer11.clipAction( animations11[ 0] ).play();
      	avatar11.position.set(11 * Math.cos(11*30 / 180 * 3.14),0,11 * Math.sin(11*30 / 180 * 3.14));
        troopergroup.add( avatar11 );
//                    download(exporter.parse(avatar11), 'stormtrooper11.obj','text/obj' );
	} );
   
   var loader12 = new THREE.ColladaLoader();
	loader12.load( 'stormtrooper.dae', function ( collada12 ) {

		var animations12 = collada12.animations;
		var avatar12 = collada12.scene;
		mixer12 = new THREE.AnimationMixer( avatar12 );
        action12 = mixer12.clipAction( animations12[ 0] ).play();
        avatar12.position.set(11 * Math.cos(12*30 / 180 * 3.14 ),0,11 * Math.sin(12*30 / 180 * 3.14)); 
        troopergroup.add( avatar12 );
//                  download(exporter.parse(avatar12), 'stormtrooper12.obj','text/obj' );
	} );
   
	// var gridHelper = new THREE.GridHelper( 10, 20 );
	// scene.add( gridHelper );

	//

	ambientLight = new THREE.AmbientLight( 0xffffff, 0.8 );
	//scene.add( ambientLight );

	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
	//directionalLight.position.set( 0, , -1);
	//scene.add( directionalLight );
	//stats = new Stats();
	//container.appendChild( stats.dom );
	//scene.add(troopergroup);
}


function animate() {
	requestAnimationFrame( animate );
	render();
	stats.update();
}

function render() {

   var _DELTA = 0.1;
   if (action1 && !action1.paused && Math.abs(action1.time - 0.3) < _DELTA) {
      action1.paused = true;
      console.log("action1 time" + action1.time);
   }
   
   if (action2 && !action2.paused && Math.abs(action2.time - 0.6) < _DELTA) {
      action2.paused = true;
      console.log("action2 time" + action2.time);
   }
   
   if (action3 && !action3.paused && Math.abs(action3.time - 0.9) < _DELTA) {
      action3.paused = true;
      console.log("action3 time" + action3.time);
   }
  
   if (action4 && !action4.paused && Math.abs(action4.time - 1.2) < _DELTA) {
      action4.paused = true;
      console.log("action4 time" + action4.time);
   }
   
   if (action5 && !action5.paused && Math.abs(action5.time - 1.5) < _DELTA) {
      action5.paused = true;
      console.log("action5 time" + action5.time);
   }
   
   if (action6 && !action6.paused && Math.abs(action6.time - 1.8) < _DELTA) {
      action6.paused = true;
   }

   if (action7 && !action7.paused && Math.abs(action7.time - 2.1) < _DELTA) {
      action7.paused = true;
   }
   
   if (action8 && !action8.paused && Math.abs(action8.time - 2.4) < _DELTA) {
      action8.paused = true;
   }
   
   if (action9 && !action9.paused && Math.abs(action9.time - 2.7) < _DELTA) {
      action9.paused = true;
   }
   
   if (action10 && !action10.paused && Math.abs(action10.time - 3.0) < _DELTA) {
      action10.paused = true;
   }
   
   if (action11 && !action11.paused && Math.abs(action11.time - 3.3) < _DELTA) {
      action11.paused = true;
   }
   
   if (action12 && !action12.paused && Math.abs(action12.time - 3.59) < _DELTA) {
      action12.paused = true;
   }
   
	var delta = clock.getDelta();

	if ( mixer1 !== undefined  ) {
       mixer1.update( delta );
	}

   if (mixer2 !== undefined) {
      mixer2.update(delta);
   }
   
   if (mixer3 !== undefined) {
      mixer3.update(delta);
   }
   
   if (mixer4 !== undefined) {
      mixer4.update(delta);
   }
   
   if (mixer5 !== undefined) {
      mixer5.update(delta);
   }
   
   if (mixer6 !== undefined) {
      mixer6.update(delta);
   }
   
   if (mixer7 !== undefined) {
      mixer7.update(delta);
   }
   if (mixer8 !== undefined) {
      mixer8.update(delta);
   }
   if (mixer9 !== undefined) {
      mixer9.update(delta);
   }
   if (mixer10 !== undefined) {
      mixer10.update(delta);
   }
   if (mixer11 !== undefined) {
      mixer11.update(delta);
   }
   if (mixer12 !== undefined) {
      mixer12.update(delta);
   }

	renderer.render( scene, camera );

	timer += 1; 

	if (timer > 200) {
		troopergroup.rotation.y -= .1;
		
		if (timer % 5 < 2) {
			ambientLight.visible = false; 
		} else {
			ambientLight.visible = true; 
		}
	}
}