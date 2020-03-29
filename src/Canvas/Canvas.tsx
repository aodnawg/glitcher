import React from "react";

import useInit from "./hooks/useInit";
import useAnimate from "./hooks/useAnimate";

import { initUniforms } from "./uniforms";
import initThreeObjects from "./initThreeObjects";
import { Box } from "@chakra-ui/core";

export const Canvas = () => {
  const uniforms = initUniforms();
  const { camera, renderer, scene } = initThreeObjects();

  const cnvsRef = useInit(scene, renderer, uniforms);
  useAnimate(scene, renderer, uniforms, camera);

  return <Box h="100px" ref={cnvsRef} />;
};
