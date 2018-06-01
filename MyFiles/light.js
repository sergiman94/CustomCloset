

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

    // var sphereSize = 5;
    // var pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
    // scene.add( pointLightHelper );

    return light;

  }

  this.hemisphereLight = function () {
    var hemisphere = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
		hemisphere.position.set( -3,6,-3 );
		scene.add( hemisphere );
  }

  this.directionalLight = function (){
    var directionalLight;
    directionalLight = new THREE.DirectionalLight( 0xffffff, 0.2 );
    scene.add(directionalLight);
  }

  this.spotLight = function (){

    var spotLight;
    spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set(133,177,216);
    spotLight.angle = 0.18;
    spotLight.distance = 320;
    spotLight.intensity = 1.9;

    // var spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);

    scene.add(spotLight);
  }

}
