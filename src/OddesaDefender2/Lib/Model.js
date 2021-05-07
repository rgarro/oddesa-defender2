import * as THREE from "three";
var FBXLoader = require('three-fbx-loader');

class Model {
  constructor() {
    this.Game={};
    this.game_is_set = false;
    this.vehicleMesh = null;
    this.vehicleObject = null;
    this.vehicleGeometry = null;
    this.vehicleColor = 0x0FFA65;
    this.vehicleTexture = null;
    this.vehicleTexture = null;
  }

  loadModel(modelUrl) {
 console.log(modelUrl);   
    if (this.game_is_set) {
      var loader = new FBXLoader();
      loader.load(modelUrl, function (object3d){
        this.vehicleObject = object3d;
        var texture = new THREE.TextureLoader().load(this.vehicleTexture);
        var material = new THREE.MeshBasicMaterial({map:texture});

        this.vehicleGeometry = (this.vehicleObject.children[0]).geometry;
        //var material = new THREE.MeshPhongMaterial();
        //var material = new THREE.MeshBasicMaterial();
        //material.color.set(this.vehicleColor);
       this.vehicleMesh = new THREE.Mesh(this.vehicleGeometry,material);
       this.vehicleMesh.name = this.vehicleMeshName;
       this.Game.Scene.add(this.vehicleMesh);
        //this.vehicleObject.castShadow = true;
        //this.Game.Scene.add(this.vehicleObject);
        console.log(this.vehicleMesh.position);
        this.postLoaded();
      }.bind(this));
    } else {
      throw new Error("Needs a Game parent object");
    }
  }

  init(){

  }

  preRender() {}

  onRender() {}

  postRender() {}

  postLoaded() {}

  setParent(game) {
    this.Game = game;
    this.game_is_set = true;
  }
}

export default Model;
