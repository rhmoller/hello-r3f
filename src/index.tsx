import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export const DemoBox = () => {
  const myMeshRef = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    if (!myMeshRef.current) return;
    myMeshRef.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <>
      <mesh scale={active ? 1.5 : 1} onClick={() => setActive(!active)} ref={myMeshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </>
  );
};

export const App = () => (
  <Canvas>
    <DemoBox />
  </Canvas>
);

ReactDOM.render(<App />, document.getElementById("app"));
