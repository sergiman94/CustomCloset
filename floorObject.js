
var bs = 100;

function FloorObject(){

  this.show = function(x,y, width, height){

    var floorGeometry = new THREE.PlaneGeometry(x, y, width, height)

    var floorMaterial = new THREE.MeshLambertMaterial( {color:0xffffff, side: THREE.DoubleSide });

    meshFloor = new THREE.Mesh(floorGeometry, floorMaterial);
    meshFloor.castShadow = true;
    meshFloor.receiveShadow = true;
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;
    scene.add(meshFloor);
    textureLoader.load( "models/grid.png", function( texture ) {
					texture.wrapS = THREE.RepeatWrapping;
					texture.wrapT = THREE.RepeatWrapping;
					texture.repeat.set(bs * 10 , bs * 10 );
					meshFloor.material.map = texture;
					meshFloor.material.needsUpdate = true;
				}

    );


  }


  this.ground = function(){

    var pos = new THREE.Vector3();
				var quat = new THREE.Quaternion();
				// Ground
				pos.set( 0, - 0.5, 0 );
				quat.set( 0, 0, 0, 1 );
				var ground = createParalellepiped( 40, 1, 40, 0, pos, quat, new THREE.MeshPhongMaterial( { color: 0xFFFFFF } ) );
				ground.castShadow = true;
				ground.receiveShadow = true;
				textureLoader.load( "crate0/crate0_diffuse.jpg", function( texture ) {
					texture.wrapS = THREE.RepeatWrapping;
					texture.wrapT = THREE.RepeatWrapping;
					texture.repeat.set( 40, 40 );
					ground.material.map = texture;
					ground.material.needsUpdate = true;
				} );

  }

  floorTextures("crate0/crate0_diffuse.jpg","crate0/crate0_bump.jpg", "crate0/crate0_normal.jpg");

}

function floorTextures(map, bumpMap, normalMap){
  var textureLoader = new THREE.TextureLoader();
  crateTexture = textureLoader.load(map);
  crateBumpMap = textureLoader.load(bumpMap);
  crateNormalMap = textureLoader.load(normalMap);
}
