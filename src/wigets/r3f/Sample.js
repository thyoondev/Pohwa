import {
  Environment,
  Lightformer,
  OrbitControls,
  ScrollControls,
  Text,
} from "@react-three/drei";
import { Effects } from "@/features/r3f/effects";
import { Model } from "@/features/r3f/v4r";

import Camera from "@/features/r3f/camera";
import { Canvas } from "@react-three/fiber";
import { isMobile } from "react-device-detect";

export default function SampleR3f() {
  return (
    <Canvas
      onTouchStart={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
      onTouchEnd={(e) => e.preventDefault()}
    >
      <color attach="background" args={["#0A0A0A"]} />

      {!isMobile && (
        <Text
          scale={[6, 10, 10]}
          position={[0, 0, -10]}
          color="red" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          POHWA
        </Text>
      )}
      <ScrollControls ages={3}>
        <Camera />
        <hemisphereLight intensity={0.5} />
        {/* <ContactShadows
          resolution={1024}
          frames={1}
          position={[0, -1.16, 0]}
          scale={15}
          blur={0.5}
          opacity={1}
          far={20}
        /> */}

        <Environment resolution={512}>
          {/* Ceiling */}
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -9]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 0]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 9]}
            scale={[10, 1, 1]}
          />
          {/* Sides */}
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-50, 2, 0]}
            scale={[100, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[50, 2, 0]}
            scale={[100, 2, 1]}
          />
          {/* Key */}
          <Lightformer
            form="ring"
            color="red"
            intensity={10}
            scale={2}
            position={[10, 5, 10]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>
        <Effects />
        <Model
          scale={0.06}
          position={isMobile ? [0, 0, 10] : [0, 0, 0]}
          rotation={isMobile ? [0, 1, 0] : [0, 0, 0]}
        />
        {isMobile && (
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
          />
        )}
      </ScrollControls>
    </Canvas>
  );
}
