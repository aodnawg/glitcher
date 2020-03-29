import React from "react";

import useInit from "./hooks/useInit";
import useAnimate from "./hooks/useAnimate";
import useTextureLoader from "./hooks/useTextureLoader";

import { initUniforms } from "./uniforms";
import initThreeObjects from "./initThreeObjects";
import { Box } from "@chakra-ui/core";

const getFileFromEvent = (ev: React.DragEvent) => ev.dataTransfer.files[0];

const dragOverHandler = (ev: React.DragEvent) => {
  ev.preventDefault();
};

export const Canvas = () => {
  const uniforms = initUniforms();
  const { camera, renderer, scene } = initThreeObjects();

  const fr = useTextureLoader(uniforms);
  const cnvsRef = useInit(scene, renderer, uniforms);
  useAnimate(scene, renderer, uniforms, camera);

  const dropHandler = (ev: React.DragEvent) => {
    ev.preventDefault();
    const file = getFileFromEvent(ev);
    fr.readAsDataURL(file);
  };

  return (
    <Box
      h="70vw"
      w="70vw"
      ref={cnvsRef}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    />
  );
};
