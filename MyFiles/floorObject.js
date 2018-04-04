
var bs = 100;

function FloorObject(){

  this.show = function(width, height, x, y, z){

    var floorGeometry = new THREE.PlaneGeometry(width, height, x, y, z)

    var floorMaterial = new THREE.MeshLambertMaterial( {color:0xffffff, side: THREE.DoubleSide });

    meshFloor = new THREE.Mesh(floorGeometry, floorMaterial);
    meshFloor.castShadow = true;
    meshFloor.receiveShadow = true;
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;

    textureLoader.load( "models/grid.png", function( texture ) {
					texture.wrapS = THREE.RepeatWrapping;
					texture.wrapT = THREE.RepeatWrapping;
					texture.repeat.set(bs * 10 , bs * 10 );
					meshFloor.material.map = texture;
					meshFloor.material.needsUpdate = true;
		});

    scene.add(meshFloor);

    return meshFloor;

  }

}
