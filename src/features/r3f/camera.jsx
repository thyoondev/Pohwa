import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Camera = () => {
  const scrollData = useScroll();
  const cameraRef = useRef();

  useFrame(() => {
    const fullScrollRange = 1; // Define the range of one full scroll
    const zStart = 15; // Starting z position
    const zEnd = 5; // Ending z position

    // Calculate the interpolated z position based on the scroll offset
    let zPosition =
      zStart -
      (scrollData.offset % fullScrollRange) *
        ((zStart - zEnd) / fullScrollRange);

    // Clamp the z position to 6 when the user reaches the end of the scrolling
    if (scrollData.offset >= fullScrollRange) {
      zPosition = zEnd;
    }

    // Calculate the interpolation factor based on the scroll offset
    const lerpFactor = scrollData.offset % fullScrollRange;

    // Interpolate the camera position using lerp
    cameraRef.current.position.lerp(
      new THREE.Vector3(0, 0, zPosition),
      lerpFactor
    );
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 15]} />
    </>
  );
};

export default Camera;
