import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";
import Lockheed from "./Lib/Lockheed"; //Ac130h

class Game extends Component {
  constructor(props) {
    super(props);
    this.Scene = {};
    this.Renderer = {};
    this.Camera = {};
    this.Controls = {};
    this.Ac130h = new Lockheed();
    this.animate = {};
    //console.log(this.Ac130h);
  }

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh"
        }}
        ref={el => (this.container = el)}
      />
    );
  }

  componentDidMount() {
    this.init();
    /*
const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshNormalMaterial({
      color: 0xff0000
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
 */
    this.onRenderer();
    this.container.appendChild(this.Renderer.domElement);

    this.animate();
  }

  init() {
    this.Scene = new THREE.Scene();
    this.Scene.background = new THREE.Color(0x222222);

    this.Renderer = new THREE.WebGLRenderer({ antialias: true });
    this.Renderer.setSize(window.innerWidth, window.innerHeight);

    this.Camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.Camera.position.z = 15;

    this.Controls = new OrbitControls(this.Camera, this.Renderer.domElement);
    this.Controls.enabled = true;
    this.Controls.maxDistance = 1500;
    this.Controls.minDistance = 0;
    this.postInit();
  }

  //postInit() {}

  onPreRender() {}

  onRenderer() {
    this.onPreRender();
    this.animate = () => {
      requestAnimationFrame(this.animate);
      const zoom = this.Controls.object.position.distanceTo(
        this.Controls.target
      );

      this.Renderer.render(this.Scene, this.Camera);
    };
  }

  postInit() {
    this.loadPlane();
  }

  loadPlane() {
    this.Ac130h.setParent(this);
    this.Ac130h.loadModel(this.Ac130h.modelPath);
  }

  floorAndSky() {}

  shouldComponentUpdate() {
    return false;
  }
}

export default Game;
