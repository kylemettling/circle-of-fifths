const SignatureSVG = ({
  type,
  count,
  accidentalCoords,
  position,
  index,
  degrees,
}) => {
  // const arr = [...Array(12).keys()];

  const accidentals = [...Array(count).keys()].map((accidental, i) => {
    return (
      <g id="c8nw51m" className={type} key={i}>
        <use
          xlinkHref={`#${type}Symbol`}
          x={accidentalCoords[type][i].x}
          y={accidentalCoords[type][i].y}
          height="720px"
          width="720px"
        />
      </g>
    );
  });
  return (
    <div className="signature" style={{ rotate: `-${degrees + 180}deg` }}>
      <span>{count}</span>
      <svg
        width="auto"
        height="180px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsmei="http://www.music-encoding.org/ns/mei"
        overflow="visible"
      >
        <defs>
          <symbol id="clefSymbol" viewBox="0 0 1000 1000" overflow="inherit">
            <path
              transform="scale(1,-1)"
              d="M562 -21c0 89 -65 150 -155 150c7 -44 34 -203 55 -323c71 29 100 102 100 173zM420 -206l-58 329c-59 -14 -104 -63 -104 -124c0 -49 22 -75 61 -99c12 -8 22 -13 22 -22s-9 -13 -17 -13c-80 0 -135 96 -135 166c0 94 62 190 153 217c-7 41 -14 88 -23 142 c-15 -15 -31 -29 -48 -44c-88 -76 -174 -185 -174 -307c0 -151 122 -251 265 -251c19 0 38 2 58 6zM332 822c-8 -31 -11 -65 -11 -102c0 -42 5 -81 11 -121c69 68 146 146 146 250c0 69 -24 118 -39 118c-52 0 -98 -105 -107 -145zM122 -513c0 66 45 123 115 123 c75 0 116 -57 116 -111c0 -64 -47 -104 -94 -111c-3 -1 -5 -2 -5 -4c0 -1 2 -2 3 -3c2 0 23 -5 47 -5c101 0 154 55 154 159c0 53 -11 123 -30 219c-23 -4 -50 -7 -79 -7c-186 0 -349 147 -349 334c0 200 126 321 217 406c21 17 73 70 74 71c-17 112 -22 161 -22 215 c0 84 18 212 82 288c33 39 64 51 71 51c18 0 47 -35 71 -86c16 -36 44 -110 44 -201c0 -159 -73 -284 -179 -395c9 -56 19 -115 29 -175c146 0 253 -102 253 -253c0 -103 -73 -205 -171 -237c6 -39 12 -69 15 -89c10 -57 16 -102 16 -141c0 -63 -14 -129 -68 -167 c-36 -22 -77 -34 -124 -34c-135 0 -186 87 -186 153z"
            />
          </symbol>
          <symbol id="sharpSymbol" viewBox="0 0 1000 1000" overflow="inherit">
            <path
              transform="scale(1,-1)"
              d="M233 105l-38 -7v-165l33 7h2c8 0 14 -6 14 -14v-59c0 -6 -5 -13 -11 -14l-38 -7v-147h-28v141l-89 -18v-155h-28v149l-33 -7h-3c-8 0 -14 6 -14 14v58c0 6 5 13 11 14l39 8v165l-33 -7h-3c-8 0 -14 6 -14 14v-2v58v2c0 6 5 13 11 14l39 8v147h28v-141l89 18v155h28v-149 l33 7h2c8 0 14 -6 14 -14v-59c0 -6 -5 -13 -11 -14zM78 74v-166l89 19v165z"
            />
          </symbol>
          <symbol id="flatSymbol" viewBox="0 0 1000 1000" overflow="inherit">
            <path
              transform="scale(1,-1)"
              d="M201 79c1 -8 2 -16 2 -25c0 -41 -15 -90 -53 -133c-54 -61 -119 -93 -123 -95c-2 -1 -6 -2 -8 -2c-8 0 -14 6 -14 14l-5 601c0 8 6 14 14 14h12c8 0 14 -6 14 -14l-4 -321c5 6 34 37 84 37c51 0 75 -37 81 -76zM132 40v11c0 21 -3 55 -39 55c-40 0 -55 -29 -57 -38 l-3 -195c19 15 53 42 70 68c25 38 29 84 29 99z"
            />
          </symbol>
        </defs>
        <style type="text/css">
          {
            "g.page-margin{font-family:Times;} g.ending, g.fing, g.reh, g.tempo{font-weight:bold;} g.dir, g.dynam, g.mNum{font-style:italic;} g.label{font-weight:normal;}"
          }
        </style>
        {/* Notation Line Color */}
        <svg className="definition-scale" color="white" viewBox="0 0 2080 1800">
          <g className="page-margin" transform="translate(0, 0)">
            <g id="mn99xbe" className="mdiv pageMilestone" />
            <g id="s8dzeec" className="score pageMilestone" />
            <g id="s3xs6u7" className="system">
              <g id="sj972sj" className="section systemMilestone" />
              <g id="s1s1d21" className="staff">
                <path
                  d="M0 540 L2080 540"
                  stroke="currentColor"
                  strokeWidth="18"
                />
                <path
                  d="M0 720 L2080 720"
                  stroke="currentColor"
                  strokeWidth="18"
                />
                <path
                  d="M0 900 L2080 900"
                  stroke="currentColor"
                  strokeWidth="18"
                />
                <path
                  d="M0 1080 L2080 1080"
                  stroke="currentColor"
                  strokeWidth="18"
                />
                <path
                  d="M0 1260 L2080 1260"
                  stroke="currentColor"
                  strokeWidth="18"
                />

                {/* Clef */}
                <g id="c8nw51m" className="clef">
                  <use
                    xlinkHref="#clefSymbol"
                    x="90"
                    y="1080"
                    height="720px"
                    width="720px"
                  />
                </g>
                {accidentals}
                {/* <g id="c8nw51m" className="flat">
                  <use
                    xlinkHref="#flatSymbol"
                    x="1154"
                    y="450"
                    height="720px"
                    width="720px"
                  />
                </g>
                <g id="khgaj48" className="sharp">
                  <use
                    xlinkHref="#sharpSymbol"
                    x="730"
                    y="540"
                    height="720px"
                    width="720px"
                  />
                </g> */}
                <g id="lsabfq0" className="layer" />
              </g>
              <g id="ss81e85" className="systemMilestoneEnd sj972sj" />
            </g>
            <g id="p4l6gxb" className="pageMilestoneEnd s8dzeec" />
            <g id="pbxw6jo" className="pageMilestoneEnd mn99xbe" />
            <g id="p2xpaq7" className="pgHead autogenerated" />
          </g>
        </svg>
      </svg>
      <span>{count}</span>
    </div>
  );
};
export default SignatureSVG;
