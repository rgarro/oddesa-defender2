import * as THREE from "three";
var FBXLoader = require('three-fbx-loader');

class Model {
  constructor() {
    this.Game={};
    this.game_is_set = false;
    this.vehicleMesh = null;
    this.vehicleColor = 0x0FFA65;
  }

  loadModel(modelUrl) {
    if (this.game_is_set) {
      var loader = new FBXLoader();
      loader.load(modelUrl, function (object3d) {
console.log(typeof object3d);
        this.Game.Scene.add(object3d);
      }.bind(this));
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
