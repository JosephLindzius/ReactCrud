import React from "react";
import {Canvas} from "react-three-fiber";
import * as THREE from 'three';

import Scene from "./subcomponents/Scene";


function Homepage () {

    return (
        <div className="canvasContainer">
          <Canvas className="homepageCanvas" onCreated={({ gl }) => {
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;}}>
          <Scene/>
          </Canvas>
        </div>
    )
}

export default Homepage;
