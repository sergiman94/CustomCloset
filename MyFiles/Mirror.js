

var y,z;

function Mirror() {

  this.verticalMirror = function (width, height, x, y, z) {

    var geometry = new THREE.PlaneBufferGeometry( width, height );
    var verticalMirror = new THREE.Reflector( geometry, {
        clipBias: 0.003,
        textureWidth: WIDTH * window.devicePixelRatio,
        textureHeight: HEIGHT * window.devicePixelRatio,
        color: 0x777777,
        recursion: 1
      } );

      verticalMirror.castShadow = true;
      verticalMirror.receiveShadow = true;

      verticalMirror.position.x = x;
      verticalMirror.position.y = y;
      verticalMirror.position.z = z;

      scene.add( verticalMirror );

      return verticalMirror;

  }

}
