import Model from "./Model";
const Models = ({ hamburgers, setIsFalling, addHamburger }) => {
  return (
    <>
      {hamburgers.map((hamburger) => (
        <Model
          hamburger={hamburger}
          key={hamburger.id}
          hamburgerPosition={hamburger.position} // ハンバーガーごとの位置を渡す
          isFalling={hamburger.isFalling}
          setIsFalling={setIsFalling}
          hamburgers={hamburgers}
          addHamburger={addHamburger}
        />
      ))}
    </>
  );
};

export default Models;
