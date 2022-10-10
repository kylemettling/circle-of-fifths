import Slice from "./slice";
import signatures from "../lib/state/signatures";
import Image from "next/image";
import { useState } from "react";

const Slices = () => {
  const keys = [...Array(12).keys()].map((idx) => {
    const item = signatures[idx];
    const newItem = {
      index: idx,
      image: `${
        item.accidentals ? item.accidentals.count + item.accidentals.type : null
      }`,
      ...item,
    };
    return newItem;
  });

  //   const items = keys.map(async (item) => {});
  return (
    <div>
      {/* {items} */}
      {/* {keys.map((item) => {
        return (
          <Image
            src={`/images/${item.image}.svg`}
            alt="test"
            height={"300px"}
            width={"300px"} 
          />
        );
      })} */}
    </div>
  );
};

export default Slices;
