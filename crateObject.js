
function CrateObject() {

  this.show = function (width, height, depth) {
    crate = new THREE.Mesh(
      new THREE.BoxGeometry(width,height,depth),
      new THREE.MeshPhongMaterial({
        color:0xffffff,
        map:crateTexture,
        bumpMap:crateBumpMap,
        normalMap:crateNormalMap
      })
    );
    scene.add(crate);
    crate.position.set(2.5, 3/2, 2.5);
    crate.receiveShadow = true;
    crate.castShadow = true;
  }

  crateTextures("crate0/crate0_diffuse.jpg","crate0/crate0_bump.jpg", "crate0/crate0_normal.jpg" );

}

function crateTextures(map, bumpMap, normalMap){
	var textureLoader = new THREE.TextureLoader();
	crateTexture = textureLoader.load(map);
	crateBumpMap = textureLoader.load(bumpMap);
	crateNormalMap = textureLoader.load(normalMap);
}
