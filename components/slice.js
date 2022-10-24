import SignatureSVG from "./SignatureSVG";
const Slice = ({ item }) => {
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
      className="slice"
      style={{
        rotate: `${item.position * 30}deg`,
        transform: `translate(${125}%, ${0}%)`,
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
        height={"auto"}
        width={"250px"}
      />
    </div>
  );
};

export default Slice;
