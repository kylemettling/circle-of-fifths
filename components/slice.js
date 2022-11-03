import { useState } from "react";
import SignatureSVG from "./SignatureSVG";
const Slice = ({ item, rotateDegree, handleDrag }) => {
  const accidentalCoords = {
    sharp: [
      { x: "730", y: "540" },
      { x: "942", y: "810" },
      { x: "1154", y: "450" },
      { x: "1366", y: "720" },
      { x: "1578", y: "990" },
      { x: "1790", y: "630" },
      { x: "2002", y: "900" },
    ],
    flat: [
      { x: "730", y: "900" },
      { x: "919", y: "630" },
      { x: "1108", y: "990" },
      { x: "1297", y: "720" },
      { x: "1486", y: "1080" },
      { x: "1675", y: "810" },
      { x: "1864", y: "1170" },
    ],
  };
  const position = {
    height: "720px",
    width: "720px",
  };

  return (
    <div
      className="wrapper"
      style={{
        position: "absolute",
        rotate: `${item.position * 30}deg`,
        transformOrigin: "center",
        // transform: `translate(-50%, -50%)`,
        // transform: `translateY(379px) translateX(0%)`,
        // transform: `translateY(${}%) translateX(0%)`,
        transform: `translateY(438px)`,
        // top: "75px",
        // left: "27.75%",
      }}
      onMouseMove={handleDrag}
      // onMouseDown={(e) => handleDrag(e.target)}
    >
      <div
        className="slice"
        style={{
          rotate: `-${item.position * 30 - rotateDegree}deg`,
        }}
      >
        <SignatureSVG
          item={item}
          index={item.index}
          type={item.accidentals.type}
          count={item.accidentals.count}
          accidentalCoords={accidentalCoords}
          position={item.position}
          degrees={item.position * 30}
          rotateDegrees={rotateDegree}
          height={"125px"}
          width={"125px"}
        />
      </div>
    </div>
  );
};

export default Slice;
