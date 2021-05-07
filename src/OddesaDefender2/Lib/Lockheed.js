/**
 *                            _
 *                           | \
 *                          _|  \______________________________________
 *                         - ______        ________________          \_`,
 *                       -(_______            -=    -=        USAF       )
 *                                `--------=============----------------`   -JB
 *                                          -   -
 *                                         -   -
 *                              `   . .  -  -
 *                               .*` .* ;`*,`.,
 *                                `, ,`.*.*. *
 * _________________________________*  * ` ^ *____________________________
 *        :::: Cloud Development is "Black" Magic ... ::::
 */
import * as THREE from "three";
import Model from "./Model";

class Lockheed extends Model {
  constructor() {
    super();
    this.meshName = "Spooky";
    this.modelPath = "/Models/AC130anim.fbx";
    this.vehicleTexture = "/Models/MainBody.png";
    //this.modelPath = "/Models/tupolev.fbx";
    //this.modelPath = "/Models/blackhawk.fbx";
    //this.modelPath = "/Models/sikorsky.fbx";
    this.vehicleObject = null;
    this.vehicleGeometry = null;
    this.vehicleMesh = null;
    this.vehicleColor = 0x0FFA65;
    this.scale = 13;
    this.cruiseSpeed = 10;//Pixels Per Render time
    this.group = new THREE.Object3D();
    //console.log("my game got sponsors");
  }

  postLoaded(){
    console.log("post loaded ....");
    //this.vehicleMesh.rotation.y = 90;
  }

  moveForward(){
    //this.vehicleMesh.position.y += this.cruiseSpeed;
  }

  onRender() {
    this.moveForward();
  }

}

export default Lockheed;
