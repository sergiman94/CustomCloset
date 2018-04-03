

// X red, Y green, Z blue 

function Axis() {

  this.show = function (size) {

    var axis = new THREE.AxisHelper(size);
    scene.add(axis);

  }

}
