import React, { useRef, useState } from "react";
import { Stage, Layer, Star, Rect, Image } from "react-konva";
import ApplyFromKonva from "./ApplyFromKonva";

function KonvaStage(props) {
  const { dispatch, selectedPart, partLists } = props;
  const [shapes, setShapes] = useState([]);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const img = new window.Image();
  img.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwAAAAMAAQAAAAC7+j0jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAHdElNRQfhCAgMOwDRoBf1AAABFklEQVR42u3NIQEAAAACIP+f1hU2OEB6FoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEgq8BaxHwwz4L1VsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDgtMDhUMTI6NTk6MDArMDA6MDAVAzDwAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA4LTA4VDEyOjU5OjAwKzAwOjAwZF6ITAAAAABJRU5ErkJggg==";

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
            fillPatternImage={img}
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
        partLists={partLists}
        selectedPart={selectedPart}
      />
    </div>
  );
}

export default KonvaStage;
