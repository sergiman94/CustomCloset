

function Light() {

  this.ambientLight = function ( x, y, z, color, intensity) {
    ambientLight = new THREE.AmbientLight(color, intensity);
    ambientLight.position.set(x,y,z);
  	scene.add(ambientLight);
  }

  this.pointLight = function ( x,y,z, color, intensity, distance) {
    light = new THREE.PointLight(color, intensity, distance);
  	light.castShadow = true;
  	light.receiveShadow = true;
  	scene.add(light);

    var sphereSize = 1;
    var pointLightHelper = new THREE.PointLightHelper( light, sphereSize );

    scene.add( pointLightHelper );

    return light;

  }

  this.hemisphereLight = function () {
    hemisphere = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
		hemisphere.position.set( -3,6,-3 );
		scene.add( hemisphere );
  }

}
