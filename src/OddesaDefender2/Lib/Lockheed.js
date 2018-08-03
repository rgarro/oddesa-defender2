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
    this.modelPath = "../Models/AC130/Models/AC130.obj";
    this.vehicleMesh = null;
    this.scale = 13;
    this.group = new THREE.Object3D();
  }

  init() {}
}

export default Lockheed;
