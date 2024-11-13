/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Models from "./Models";
import { Physics } from "@react-three/rapier";
import Ground from "./Ground";
import Manipulate from "./Manipulate";

const Objects = () => {
  const [hamburgers, setHamburgers] = useState([]); // 複数のハンバーガーを管理

  const [isFalling, setIsFalling] = useState(false); // 落下状態を管理する
  const [isSleeping, setIsSleeping] = useState(false); // 落下状態を管理する

  const initialPosition = [0, 5, 0];
  const [targetModels, setTargetModels] = useState("");

  // ユニークなIDを生成する関数
  const generateUniqueId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // ハンバーガーを追加する関数
  const addHamburger = () => {
    const newHamburger = {
      id: generateUniqueId(), // ユニークなIDを生成
      position: initialPosition, // 初期位置
      isFalling: false, // 落下状態
    };
    setTargetModels(newHamburger.id);
    setHamburgers((prevHamburgers) => [...prevHamburgers, newHamburger]);
  };

  useEffect(() => {
    addHamburger(); // 初回レンダリング時にハンバーガーを追加
  }, []);

  const dropHamburger = (id) => {
    setHamburgers((prevHamburgers) =>
      prevHamburgers.map((hamburger) =>
        hamburger.id === id
          ? { ...hamburger, isFalling: true } // 対象のハンバーガーだけ isFalling を true にする
          : hamburger
      )
    );
  };

  // Move Left / Right ボタンの処理を修正
  const moveHamburgerLeft = () => {
    if (hamburgers.length > 0) {
      const latestHamburger = hamburgers[hamburgers.length - 1]; // 最後に追加されたハンバーガー
      updateHamburgerPosition(latestHamburger.id, [
        latestHamburger.position[0] - 1,
        latestHamburger.position[1],
        latestHamburger.position[2],
      ]);
    }
  };

  const moveHamburgerRight = () => {
    if (hamburgers.length > 0) {
      const latestHamburger = hamburgers[hamburgers.length - 1];
      updateHamburgerPosition(latestHamburger.id, [
        latestHamburger.position[0] + 1,
        latestHamburger.position[1],
        latestHamburger.position[2],
      ]);
    }
  };

  // 新しいハンバーガーの位置を更新する関数
  const updateHamburgerPosition = (id, newPosition) => {
    setHamburgers((prevHamburgers) =>
      prevHamburgers.map((hamburger) =>
        hamburger.id === id
          ? { ...hamburger, position: newPosition }
          : hamburger
      )
    );
  };

  return (
    <>
      <Physics debug>
        <Models
          hamburgers={hamburgers} // 複数のハンバーガーをModelsに渡す
          updateHamburgerPosition={updateHamburgerPosition} // 位置更新用関数を渡す
          isFalling={isFalling}
          setIsSleeping={setIsSleeping}
          setIsFalling={setIsFalling}
          addHamburger={addHamburger}
        />
        <Ground />
      </Physics>
      <Manipulate
        moveHamburgerLeft={moveHamburgerLeft}
        moveHamburgerRight={moveHamburgerRight}
        dropHamburger={dropHamburger}
        addHamburger={addHamburger}
        targetModels={targetModels}
      />
    </>
  );
};

export default Objects;
