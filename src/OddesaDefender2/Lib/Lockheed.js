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
    this.modelPath = "/Models/ac130.fbx";
    //this.modelPath = "/Models/tupolev.fbx";
    //this.modelPath = "/Models/blackhawk.fbx";
    //this.modelPath = "/Models/sikorsky.fbx";
    this.vehicleObject = null;
    this.vehicleGeometry = null;
    this.vehicleMesh = null;
    this.vehicleColor = 0x0FFA65;
    this.scale = 13;
    this.group = new THREE.Object3D();
  }

}

export default Lockheed;
