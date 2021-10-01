import React, { useRef, useState } from "react";
import { Stage, Layer, Star, Rect, Image } from "react-konva";
import ApplyFromKonva from "./ApplyFromKonva";

function KonvaStage(props) {
  const { dispatch, selectedPart } = props;
  const [shapes, setShapes] = useState([]);
  const stageRef = useRef(null);
  const layerRef = useRef(null);

  return (
    <div>
      {selectedPart ? (
        <>
          <h3>Part: {selectedPart} </h3>
        </>
      ) : (
        ""
      )}
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer ref={layerRef}>
          <Rect
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            // fill="white"
          />
          {shapes.length !== 0 &&
            // eslint-disable-next-line array-callback-return
            shapes.map((shape) => {
              if (shape.type === "star") return <Star {...shape} />;
              if (shape.type === "image") return <Image {...shape} />;
            })}
        </Layer>
      </Stage>
      <ApplyFromKonva
        dispatch={dispatch}
        stageRef={stageRef}
        shapes={shapes}
        setShapes={setShapes}
      />
    </div>
  );
}

export default KonvaStage;
