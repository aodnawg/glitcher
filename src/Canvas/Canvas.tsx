import React from "react";
import { Box } from "@chakra-ui/core";

import useInit from "./hooks/useInit";
import useAnimate from "./hooks/useAnimate";
import useTextureLoader from "./hooks/useTextureLoader";

import { initUniforms } from "./uniforms";
import initThreeObjects from "./initThreeObjects";

const getFileFromEvent = (ev: React.DragEvent) => ev.dataTransfer.files[0];

const dragOverHandler = (ev: React.DragEvent) => {
  ev.preventDefault();
};

export const Canvas = () => {
  const uniforms = initUniforms();
  const { camera, renderer, scene } = initThreeObjects();

  const fr = useTextureLoader(uniforms);
  const canvasWrapperRef = useInit(scene, renderer, uniforms);
  useAnimate(scene, renderer, uniforms, camera);

  const dropHandler = (ev: React.DragEvent) => {
    ev.preventDefault();
    const file = getFileFromEvent(ev);
    fr.readAsDataURL(file);
  };

  const downloadButtonHandler = (ev: React.MouseEvent) => {
    if (canvasWrapperRef.current === null) return;
    const canvasDOM = canvasWrapperRef.current.children[0] as HTMLCanvasElement;
    const url = canvasDOM.toDataURL();
    let link = document.createElement("a");
    link.href = url;
    link.download = "test.png";
    link.click();
  };

  return (
    <>
      <Box
        h="70vw"
        w="70vw"
        ref={canvasWrapperRef}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
      />
      <Box onClick={downloadButtonHandler}>DOWNLOAD</Box>
    </>
  );
};
