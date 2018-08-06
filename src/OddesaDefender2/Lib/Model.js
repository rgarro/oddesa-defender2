import * as THREE from "three";

class Model {
  constructor() {
    this.Game;
    this.game_is_set = false;
    this.vehicleMesh = null;
    this.vehicleColor = 0x0FFA65;
  }

  loadModel(modelUrl) {
    if (this.game_is_set) {
      var loader = new THREE.ObjectLoader();
      loader.load(
        modelUrl,
        function(model, materials) {
console.log(model);
          var material = new THREE.MeshPhongMaterial();
          //var material = new THREE.MeshBasicMaterial();
          material.color.set(this.vehicleColor);
          this.vehicleMesh = new THREE.Mesh(model, material);
          //this.vehicleMesh.name = this.vehicleMeshName;
          //this.vehicleMesh.scale.set(this.scale, this.scale, this.scale);
          this.Game.Scene.add(this.vehicleMesh);
          //this.vehicleMesh.rotation.y = -360;
          this.postLoaded();
        }.bind(this)
      );
    } else {
      throw new Error("Needs a Game parent object");
    }
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
