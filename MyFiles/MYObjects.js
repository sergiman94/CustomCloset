


function MYObjects(){

  this.show = function(width, height){

    var floorGeometry = new THREE.PlaneGeometry(width, height)

    var floorMaterial = new THREE.MeshLambertMaterial( {color:0x2EFE64});

    meshFloor = new THREE.Mesh(floorGeometry, floorMaterial);

    scene.add(meshFloor);

    return meshFloor;

  }

}
