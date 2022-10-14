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
    <>
      <div
        className="sliceCopy"
        style={{
          rotate: `${item.position * 25.75}deg`,
          //   transform: `skewY(-66deg)`,
        }}
      >
        <div
          className="topper"
          style={
            {
              // rotate: `${item.position * 25.75}deg`,
              // transform: `skew(-66deg)`,
            }
          }
        >
          HUH
        </div>
        <div
          className="slice"
          style={
            {
              //   rotate: `${item.position * 25.75}deg`,
              // transform: "skewY(-66deg)",
            }
          }
        >
          <span>{item.position * 25.75}</span>
          {/* <div className="slice" style={{ rotate: `${item.position * 25.75}deg` }}> */}
          <SignatureSVG
            index={item.index}
            type={item.accidentals.type}
            count={item.accidentals.count}
            accidentalCoords={accidentalCoords}
            position={position}
            degrees={item.position * 25.75}
          />
        </div>
      </div>
    </>
  );
};

export default Slice;
