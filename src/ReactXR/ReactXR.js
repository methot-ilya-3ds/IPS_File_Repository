import React, { memo } from "react";
import ReactDOM from "react-dom";
import { OrbitControls, Box } from "@react-three/drei";
import { ARCanvas } from "react-xr";

export default memo(function ReactXR() {
  return (
    <ARCanvas>
      <ambientLight />
      <spotLight />

      <OrbitControls />

      <Box position={[0, 0.8, -1]} scale={[0.3, 0.3, 0.3]}>
        <meshStandardMaterial color="#e23" />
      </Box>
    </ARCanvas>
  );
});
