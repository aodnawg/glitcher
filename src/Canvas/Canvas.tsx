import React from "react";

import useInit from "./hooks/useInit";
import useAnimate from "./hooks/useAnimate";
import useResize from "./hooks/useResize";

import { initUniforms } from "./uniforms";
import initThreeObjects from "./initThreeObjects";

export const Canvas = () => {
  const uniforms = initUniforms();
  const { camera, renderer, scene } = initThreeObjects();

  const cnvsRef = useInit(scene, renderer, uniforms);
  useAnimate(scene, renderer, uniforms, camera);
  useResize(renderer, uniforms);

  return <div ref={cnvsRef} />;
};
