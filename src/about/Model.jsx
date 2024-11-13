/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { RigidBody } from "@react-three/rapier";
import hamburgerModel from "../assets/3Dmodel/hamburger.glb";
import { useGLTF } from "@react-three/drei";

const Model = ({ hamburger }) => {
  const hamburgerObj = useGLTF(hamburgerModel);

  return (
    <>
      <RigidBody
        colliders="hull"
        restitution={0} // 弾性をゼロに
        friction={10} // 摩擦を上げる
        mass={50} // 質量を増やして安定性を上げる
        linearDamping={2} // 線速度の減衰
        angularDamping={20} // 角速度の減衰
        type={hamburger.isFalling ? "dynamic" : "fixed"} // 落下前は固定、ボタンで動的に変更
        position={hamburger.position} // 各ハンバーガーの位置を使用
      >
        <primitive object={hamburgerObj.scene.clone()} scale={0.35} />
      </RigidBody>
    </>
  );
};

export default Model;
