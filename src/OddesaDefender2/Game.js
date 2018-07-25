import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";

class Game extends Component {
  constructor(props) {
    super(props);
    this.Scene;
    this.Renderer;
    this.Camera;
    this.Controls;
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

    const animate = () => {
      requestAnimationFrame(animate);
      const zoom = this.Controls.object.position.distanceTo(
        this.Controls.target
      );

      this.Renderer.render(this.Scene, this.Camera);
    };
    this.container.appendChild(this.Renderer.domElement);

    animate();
  }

  shouldComponentUpdate() {
    return false;
  }
}

export default Game;
