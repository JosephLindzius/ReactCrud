import React from "react";
import {useThree} from "react-three-fiber";

function Scene () {
    const { camera } = useThree();

    camera.fov = 60;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.near = 0.01;
    camera.far = 10000;

    camera.up.set(0, 0, 1);
    camera.position.set(0, 0, 2);
    return (
        <>
            <mesh position={[-2.5, 0, 2.5]} rotation={[0, Math.PI/2, 0]}>
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshPhongMaterial attach="material" color="#50402D" />
            </mesh>
        </>
    )
}

export default Scene;
