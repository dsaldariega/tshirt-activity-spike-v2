import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import TshirtModel from "./components/TshirtModel";
import { OrbitControls } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import TshirtPartSelection from "./components/TshirtPartSelection";
import TshirtModeSelection from "./components/TshirtModeSelection";
import TshirtTextureSelection from "./components/TshirtTextureSelection";
import ApplyTexture from "./components/ApplyTexture";

function App() {
  const dispatch = useDispatch();
  const partList = useSelector((state) => state.tshirtmodel.partList);
  console.log(
    "%c 🍈 partList: ",
    "font-size:20px;background-color: #4b4b4b;color:#fff;",
    partList
  );
  const selectedPart = useSelector((state) => state.tshirtmodel.selectedPart);
  const selectedMode = useSelector((state) => state.tshirtmodel.selectedMode);
  const selectedTexture = useSelector(
    (state) => state.tshirtmodel.selectedTexture
  );
  return (
    <div>
      <div>
        <TshirtModeSelection dispatch={dispatch} selectedMode={selectedMode} />
      </div>
      {selectedMode === "Part" ? (
        <div>
          <TshirtPartSelection
            dispatch={dispatch}
            partList={partList}
            selectedPart={selectedPart}
          />
        </div>
      ) : (
        ""
      )}
      <div>
        {selectedMode === "Model" || selectedPart ? (
          <TshirtTextureSelection
            dispatch={dispatch}
            selectedTexture={selectedTexture}
          />
        ) : (
          ""
        )}

        {Object.keys(selectedTexture).length ? (
          <ApplyTexture
            dispatch={dispatch}
            partList={partList}
            selectedTexture={selectedTexture}
            selectedMode={selectedMode}
          />
        ) : (
          ""
        )}
      </div>

      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <Canvas camera={{ position: [-5, 2, 117], fov: 50 }}>
          <OrbitControls />
          <pointLight position={[0, 0, 90]} />
          <pointLight position={[0, 0, -90]} />
          <pointLight position={[0, 90, 0]} />
          <pointLight position={[0, -90, 0]} />
          <pointLight position={[50, 0, 0]} />
          <pointLight position={[-50, 0, 0]} />
          <Suspense fallback={null}>
            <TshirtModel dispatch={dispatch} newPartList={partList} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
