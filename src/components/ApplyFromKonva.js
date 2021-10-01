import React, { useState } from "react";
import { TextureLoader } from "three";

function ApplyFromKonva(props) {
  const { dispatch, stageRef, shapes, setShapes } = props;

  const handleGenerateStar = () => {
    setShapes([
      ...shapes,
      {
        type: "star",
        key: Math.random().toString(),
        id: Math.random().toString(),
        x: 50,
        y: 50,
        rotation: Math.random() * 180,
        numPoints: 5,
        innerRadius: 100,
        outerRadius: 200,
        fill: "#89b717",
        opacity: 0.8,
        draggable: true,
        // onDragStart: () => {
        //   setStar({
        //     isDragging: true,
        //   });
        // },
        // onDragEnd: (e) => {
        //   setStar({
        //     isDragging: false,
        //     x: e.target.x(),
        //     y: e.target.y(),
        //   });
        // },
      },
    ]);
  };

  const handleGenerateImage = (image) => {
    setShapes([
      ...shapes,
      {
        id: "image".concat(Math.random().toString()),
        type: "image",
        key: Math.random().toString(),
        id: Math.random().toString(),
        x: (Math.random() * window.innerWidth) / 100,
        y: (Math.random() * window.innerHeight) / 100,
        // isDragging: false,
        draggable: true,
        opacity: 0.8,
        image,
      },
    ]);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleUploadPicture = async (e) => {
    const file = e.target.files[0];
    if (file !== null && file !== undefined) {
      const base64 = await convertBase64(file);
      const image = new window.Image();
      image.src = base64;

      handleGenerateImage(image);
    }
  };
  const clearStage = () => {
    setShapes([]);
  };

  const handleApply = () => {
    const img = stageRef.current.toDataURL({ type: "image/jpeg" });
    const textureImg = new TextureLoader().load(img);

    textureImg.flipY = false;
  };

  return (
    <div>
      <input
        type="file"
        inputprops={{ accept: "image/*" }}
        onChange={handleUploadPicture}
        id="myPic"
        name="myPic"
      />
      <button onClick={handleApply}>Apply</button>
      <button onClick={handleGenerateStar}>Add Star</button>
      <button onClick={clearStage}>Clean Stage</button>
    </div>
  );
}

export default ApplyFromKonva;
