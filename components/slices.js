import Slice from "./slice";
import signatures from "../lib/state/signatures";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Slices = () => {
  const [rotate, setRotate] = useState(-180);
  const slicesRef = useRef();
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [sliceCoords, setSliceCoords] = useState({ x: 0, y: 0 });
  const [dragDirection, setDragDirection] = useState(null);
  const keys = [...Array(signatures.length).keys()].map((sig, idx) => {
    const item = signatures[idx];
    const newItem = {
      index: idx,
      position: idx,
      image: `${
        item.accidentals ? item.accidentals.count + item.accidentals.type : null
      }`,
      ...item,
    };
    return newItem;
  });

  function getRotate(e) {
    console.log(e.target);
    setRotate(e.target.value);
  }

  function handleDrag(e) {
    // console.log(e.target.getClientRects());
    const rect = e.target.getClientRects()[0];
    const rect1 = e.target.getBoundingClientRect();
    const { x, y, width, height } = rect1;
    console.log(x, y, width, height);
    // console.log(rect1);
    setSliceCoords({
      x: slicesRef.current.offsetHeight - slicesRef.current.offsetLeft,
      y: slicesRef.current.offsetWidth - slicesRef.current.offsetTop,
    });
    setMouseCoords({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handleWheel(e) {
    // prevent scrolling on Slices
    // e.target.classList.add("no-scroll");
    // console.log(e.target.classList);
  }

  useEffect(() => {
    console.log(rotate);
  }, [rotate]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          zIndex: "9999",
        }}
      >
        <span>Slices at: {JSON.stringify(sliceCoords)}</span>
        <span>Mouse at: {JSON.stringify(mouseCoords)}</span>
        <label htmlFor="rotate">Rotate! {rotate}</label>
        <input
          type="text"
          name="range"
          id="rotate"
          value={rotate}
          onChange={(e) => setRotate(e.target.value)}
        />
        <input
          // style={{ position: 'absolute' }}
          type="range"
          min="-180"
          max="180"
          value={rotate}
          onChange={(e) => getRotate(e)}
        />
      </div>
      <div className="sliceContainer">
        <div
          className="slices"
          style={{
            //   position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `rotate(${rotate}deg)`,
            //   transform: `translate(-50%, -50%)`,
            height: "100%",
            width: "100%",
            //   transformOrigin: "bottom right",
            border: "3px solid black",
            // transformOrigin: 'center',
            // animation
            // transform: `rotate(${rotate}deg) `,
            //   outline: `3px solid blue`,
            //   top: "50%",
            //   left: "50%",
            zIndex: -1,
          }}
          onWheel={handleWheel}
          ref={slicesRef}
        >
          {keys.map((item) => {
            return (
              <Slice
                key={item.index}
                item={item}
                rotateDegree={rotate}
                handleDrag={handleDrag}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slices;
