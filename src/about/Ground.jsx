import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
const Ground = () => {
  //負け判定の処理
  const collisionEnter = () => {
    console.log("enter");
  };

  return (
    <>
      //物理要素の付与
      <RigidBody type="fixed">
        <mesh
          scale={5}
          scale-x={10}
          position={[0, -2, 0]}
          rotation={[4.75, 0, 0]}
        >
          <planeGeometry />
          <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
        </mesh>
      </RigidBody>
      //最下部の板
      <RigidBody type="fixed" onCollisionEnter={collisionEnter}>
        <mesh scale={200} position={[0, -10, 0]} rotation={[4.75, 0, 0]}>
          <planeGeometry />
          <meshStandardMaterial color="#F5F7F9" side={THREE.DoubleSide} />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Ground;
