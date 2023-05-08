"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./shirt";
import CameraRing from "./camera-ring";
import Backdrop from "./backdrop";

export default function CanvasModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRing>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRing>
    </Canvas>
  );
}
