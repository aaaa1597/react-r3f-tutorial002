import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <Canvas>
        <ambientLight />
        <directionalLight />
        <mesh>
          <boxGeometry args={[4, 4, 4]}/>
          <meshBasicMaterial color={0x00ff00} wireframe />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
