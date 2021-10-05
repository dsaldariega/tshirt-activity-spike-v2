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
import KonvaStage from "./components/KonvaStage";
import ChangePosition from "./components/ChangePosition";

function App() {
  const dispatch = useDispatch();
  const partLists = useSelector((state) => state.tshirtmodel.partLists);
  console.log(
    "%c 🍈 partList: ",
    "font-size:20px;background-color: #4b4b4b;color:#fff;",
    partLists
  );
  const selectedPart = useSelector((state) => state.tshirtmodel.selectedPart);
  console.log(
    "%c 🍚 selectedPart: ",
    "font-size:20px;background-color: #6EC1C2;color:#fff;",
    selectedPart
  );
  const selectedMode = useSelector((state) => state.tshirtmodel.selectedMode);
  console.log(
    "%c 🍈 selectedMode: ",
    "font-size:20px;background-color: #EA7E5C;color:#fff;",
    selectedMode
  );
  const selectedTexture = useSelector(
    (state) => state.tshirtmodel.selectedTexture
  );
  console.log(
    "%c 🥚 selectedTexture: ",
    "font-size:20px;background-color: #FFDD4D;color:#fff;",
    selectedTexture
  );
  return (
    <div>
      <TshirtModeSelection dispatch={dispatch} selectedMode={selectedMode} />

      {selectedMode === "Part" ? (
        <TshirtPartSelection
          dispatch={dispatch}
          partLists={partLists}
          selectedPart={selectedPart}
        />
      ) : (
        ""
      )}

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
          partLists={partLists}
          selectedTexture={selectedTexture}
          selectedMode={selectedMode}
          selectedPart={selectedPart}
        />
      ) : (
        ""
      )}
      <ChangePosition dispatch={dispatch} partLists={partLists} />
      <div>
        <Canvas camera={{ position: [-5, 2, 117], fov: 50 }}>
          <OrbitControls />
          <pointLight position={[-93.363, 64.468, -88.718]} />
          <pointLight position={[-114.328, -55.975, 100.364]} />
          <pointLight position={[120.977, 60.98, 47.058]} />
          <pointLight position={[94.856, 69.277, -125.89]} />
          <Suspense fallback={null}>
            <TshirtModel dispatch={dispatch} />
          </Suspense>
        </Canvas>
      </div>

      <KonvaStage
        dispatch={dispatch}
        selectedPart={selectedPart}
        partLists={partLists}
      />
    </div>
  );
}

export default App;
