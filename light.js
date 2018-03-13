

function Light() {

  this.ambientLight = function ( color, intensity) {
    ambientLight = new THREE.AmbientLight(color, intensity);
    ambientLight.position.set(-3,6,-3);
    ambientLight.castShadow = true;
  	ambientLight.shadow.camera.near = 0.1;
  	ambientLight.shadow.camera.far = 25;
  	scene.add(ambientLight);
  }

  this.pointLight = function (color, intensity, distance) {
    light = new THREE.PointLight(color, intensity, distance);
  	light.position.set(-3,6,-3);
  	light.castShadow = true;
  	light.shadow.camera.near = 0.1;
  	light.shadow.camera.far = 25;
  	scene.add(light);
  }

  this.hemisphereLight = function () {
    hemisphere = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
		hemisphere.position.set( -3,6,-3 );
		scene.add( hemisphere );
  }

}
