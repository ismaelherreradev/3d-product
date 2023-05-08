"use client";
import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Backdrop from "./backdrop";
import CameraRing from "./camera-ring";
import Shirt from "./shirt";

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
