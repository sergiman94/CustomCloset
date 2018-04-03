

var y,z;

function Mirror() {


  this.verticalMirror = function (width, height, y, z) {

    var geometry = new THREE.PlaneBufferGeometry( width, height );
    var verticalMirror = new THREE.Reflector( geometry, {
        clipBias: 0.003,
        textureWidth: WIDTH * window.devicePixelRatio,
        textureHeight: HEIGHT * window.devicePixelRatio,
        color: 0x889999,
        recursion: 1
      } );

      verticalMirror.position.y = y;
      verticalMirror.position.z = z;
      verticalMirror.position.y = Math.PI / 2

      scene.add( verticalMirror );

  }

}
