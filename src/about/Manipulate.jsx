import { Html } from "@react-three/drei";
import React from "react";

const Manipulate = ({
  moveHamburgerLeft,
  moveHamburgerRight,
  dropHamburger,
  addHamburger,
  targetModels,
}) => {
  return (
    <Html>
      {/* コントロールボタン */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={moveHamburgerLeft}
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
        >
          Move Left
        </button>
        <button
          onClick={() => dropHamburger(targetModels)} // 対象のハンバーガーIDを渡す
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
        >
          Drop
        </button>
        <button
          onClick={moveHamburgerRight}
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
        >
          Move Right
        </button>
        <button
          onClick={addHamburger}
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
        >
          Add
        </button>
      </div>
    </Html>
  );
};

export default Manipulate;
