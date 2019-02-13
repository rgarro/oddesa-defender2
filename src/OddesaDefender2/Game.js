import React, { Component } from "react";
import * as THREE from "three";

import Lockheed from "./Lib/Lockheed"; //Ac130h

const OrbitControls = require('three-orbitcontrols');

class Game extends Component {
  constructor(props) {
    super(props);
    this.Scene = {};
    this.Renderer = {};
    this.Camera = {};
    this.Controls = {};
    this.Ac130h = new Lockheed();
    this.animate = {};
    this.enable_shadows = true;
    this.rotationSpeed = 0.001;
    this.ambientLightColor={};
    this.clearColor = 0xa3e1ff;
    this.floorTextureUrl = '/Textures/floorc.png';
    this.floorTexture = null;
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
    this.container.appendChild(this.Renderer.domElement);
    this.onRenderer();
    this.animate();
    this.postInit();
  }

  testSomethingIsOnTheScene(){
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshNormalMaterial({color: 0xff0000});
    const globe = new THREE.Mesh(geometry, material);
    this.Scene.add(globe);
  }

  init() {
    this.Scene = new THREE.Scene();
    this.Scene.background = new THREE.Color(0x222222);

    this.Renderer = new THREE.WebGLRenderer({ antialias: true });
    this.Renderer.setSize(window.innerWidth, window.innerHeight);
    this.Renderer.shadowMap.enabled = this.enable_shadows;
    if(this.Renderer.shadowMap.enabled){
      //this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.Renderer.shadowMap.type = THREE.BasicShadowMap;
    }

    this.Camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.Camera.position.z = 15;

    this.Controls = new OrbitControls(this.Camera, this.Renderer.domElement);
    //this.Controls = new THREE.OrbitControls( this.Camera, this.Renderer.domElement );
    this.Controls.enabled = true;
    this.Controls.maxDistance = 1500;
    this.Controls.minDistance = 0;
  }

  onPreRender() {}

  onRenderer() {
    this.onPreRender();
    this.animate = () => {
      requestAnimationFrame(this.animate);
      /*const zoom = this.Controls.object.position.distanceTo(
        this.Controls.target
      );*/
      this.Renderer.render(this.Scene, this.Camera);
    };
  }

  postInit() {
    //this.testSomethingIsOnTheScene();
    this.loadPlane();
    this.setLights();
    this.floorAndSky()
  }

  loadPlane() {
    this.Ac130h.setParent(this);
    this.Ac130h.loadModel(this.Ac130h.modelPath);
    this.Ac130h.init();
  }

//masaya noon sun ....
  setLights(){
     var ambientLight = new THREE.AmbientLight(0xF47a42);
     if(this.enable_shadows){
       //ambientLight.castShadow = true;
       //this.scene.add(new THREE.CameraHelper( ambientLight.shadow.camera ));
       //ambientLight.shadowCameraVisible = true;
     }
     this.Scene.add(ambientLight);
     var light = new THREE.PointLight(0xffffff);
     light.position.set(0,250,0);
  if(this.enable_shadows){
    light.castShadow = true;
    light.shadow.camera.visible = true;
    light.shadow.camera.right     =  5;
    light.shadow.camera.left     = -5;
    light.shadow.camera.top      =  5;
    light.shadow.camera.bottom   = -5;
  }
    this.Scene.add(light);
  }

  floorAndSky() {
    this.floorTexture = new THREE.TextureLoader().load(this.floorTextureUrl);
  	this.floorTexture.wrapS = this.floorTexture.wrapT = THREE.RepeatWrapping;
  	this.floorTexture.repeat.set( 10, 10 );
  	var floorMaterial = new THREE.MeshBasicMaterial( { map: this.floorTexture, side: THREE.DoubleSide } );
  	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
  	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.name = "floor";
  	floor.position.y = -0.5;
  	floor.rotation.x = Math.PI / 2;
    if(this.enable_shadows){
      floor.receiveShadow = true;
    }
  	this.Scene.add(floor);
  }

  shouldComponentUpdate() {
    return false;
  }
}

export default Game;
