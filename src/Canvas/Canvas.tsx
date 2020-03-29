import React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";

import useInit from "./hooks/useInit";
import useAnimate from "./hooks/useAnimate";
import useTextureLoader from "./hooks/useTextureLoader";

import { initUniforms, UniformsKeys } from "./uniforms";
import initThreeObjects from "./initThreeObjects";

import { makeSliders } from "../components/Slider";

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

  const adjustableUniformKeys: UniformsKeys[] = [
    "u_value1",
    "u_value2",
    "u_value3"
  ];

  const uiHandlers = adjustableUniformKeys.map(key => (val: number) =>
    (uniforms[key].value = val)
  );

  return (
    <>
      <Flex align="center" justify="center">
        <Box
          h="70vw"
          w="70vw"
          ref={canvasWrapperRef}
          onDragOver={dragOverHandler}
          onDrop={dropHandler}
        />
      </Flex>
      <Box w="70vw" m="3vw 15vw">
        {makeSliders(uiHandlers)}
      </Box>
      <Flex align="center" justify="center">
        <Button onClick={downloadButtonHandler}>DOWNLOAD</Button>
      </Flex>
    </>
  );
};
