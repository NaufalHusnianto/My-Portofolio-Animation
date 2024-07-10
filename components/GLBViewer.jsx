import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const GLBModel = ({ url }) => {
  const { scene, animations } = useGLTF(url);
  const ref = useRef();

  const rotationSpeed = 1.5;
  const targetRotation = Math.PI / 8; 

  useFrame((state) => {
     const rotation = Math.sin(state.clock.getElapsedTime() * rotationSpeed) * targetRotation;

     ref.current.rotation.y = rotation;

    ref.current.position.y = -1.5 + Math.sin(state.clock.getElapsedTime()) * 0.1;
  });

  return <primitive object={scene} ref={ref} scale={0.08} position={[0, -3, 0]} />;
};

const GLBViewer = ({ url }) => {
  return (
    <Canvas className='-z-50'>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <GLBModel url={url} />
      </Suspense>
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
};

export default GLBViewer;
