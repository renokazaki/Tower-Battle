import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Objects from "./Objects";

const About = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 10, 8], near: 0.1, far: 1000 }}>
        <OrbitControls makeDefault />
        <ambientLight />
        <directionalLight />
        <Objects />
      </Canvas>
    </>
  );
};

export default About;
