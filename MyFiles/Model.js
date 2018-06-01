
var mixer;
var companion;
var mesh, materialStandard, materialDepthBasic, materialDepthRGBA, materialNormal;

var height = 500; // of camera frustum
var SCALE = 2.436143; // from original model
var BIAS = - 0.428408; // from original model


function Model() {

  // MODEL WITH MTL
  this.showModelWithTexture = function (x, y, z, rotate, modelMtl, modelObj) {
    var mtlLoader = new THREE.MTLLoader();
  	mtlLoader.load(modelMtl, function(materials){
  	materials.preload();

  		var objLoader = new THREE.OBJLoader();
  		objLoader.setMaterials(materials);

  		objLoader.load(modelObj, function(mesh){
  			mesh.traverse(function(node){
  				if( node instanceof THREE.Mesh ){
  					node.castShadow = true;
  					node.receiveShadow = true;
            node.material.color.set(0x00ff00);
  				}
  			});
  			scene.add(mesh);
  			mesh.position.x = x;
        mesh.position.y = y;
        mesh.position.z = z;
  		});
  	});
  }

  this.OBJModelWithoutTexture = function (x, y, z, rotate, modelObj, material) {

    var mat1 = new THREE.MeshPhongMaterial({color: 0xff6600,specular: 0x111111, shininess: 1 , reflectivity: 0.3});
    var mat2 = new THREE.MeshPhongMaterial({color: 0x001133, specular: 0x111111, shininess: 1 , reflectivity: 0.3});

    while (root.children.length > 0){

      var object = root.children[0];
      object.parent.remove( object );
    }


    var objLoader = new THREE.OBJLoader();

    objLoader.load(modelObj, function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
          node.material = material;
        }
      });

      mesh.position.set(x, y, z);
      mesh.rotation.y = Math.PI/rotate;
      mesh.scale.set(0.5, 0.5, 0.5);
      root.add( mesh );

      companion = mesh;
    });



  }

  this.OBJModelWithTexture = function (x, y, z, rotate, modelObj, material) {

    while (root.children.length > 0){

      var object = root.children[0];
      object.parent.remove( object );
    }

    var objLoader = new THREE.OBJLoader();
  	objLoader.load(modelObj, function(mesh){



  		mesh.traverse(function(node){
  			if( node instanceof THREE.Mesh ){
  				node.castShadow = true;
  				node.receiveShadow = true;
          node.material = material
  			}
  		});

  		mesh.position.set(x, y, z);
  		mesh.rotation.y = Math.PI/rotate;
      mesh.scale.set(0.5,0.5,0.5);

      root.add( mesh );

  	});

  }

  this.modelLoadWithJSON = function (x, y, z, rotate, jsonModel) {

    mixer = new THREE.AnimationMixer( scene );
		var loader = new THREE.JSONLoader();

    loader.load( jsonModel, function ( geometry, materials ) {
			// adjust color a bit
			var material = materials[ 0 ];
			material.morphTargets = true;
			material.color.setHex( 0xFACC2E );

			var mesh = new THREE.Mesh( geometry, materials );

      mesh.position.set(x,y,z);
      mesh.rotation.y = -Math.PI/rotate;
			mesh.matrixAutoUpdate = false;
			mesh.updateMatrix();
			scene.add( mesh );

    });
  }

  this.GUIOBJRender = function(mesh){



  }


} 
