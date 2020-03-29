import { useEffect } from "react";
import { TextureLoader } from "three";

import { Uniforms } from "../uniforms";

const loadTextureToUniforms = (uniforms: Uniforms, src: string): void => {
  const texLoader = new TextureLoader();
  const texture = texLoader.load(src);
  uniforms.u_texture.value = texture;
};

const makeFileOnloadEvHandler = (uniforms: Uniforms) => (
  ev: ProgressEvent<FileReader>
) => {
  if (ev.target === null) return;
  const { result } = ev.target;
  if (typeof result !== "string") return;
  loadTextureToUniforms(uniforms, result);
};

/**
 * updated texture in uniforms automatically
 * when the FileReader event triggered.
 * @param uniforms
 */
const useTextureLoader = (uniforms: Uniforms) => {
  const fr = new FileReader();
  useEffect(() => {
    fr.onload = makeFileOnloadEvHandler(uniforms);
  }, []);
  return fr;
};

export default useTextureLoader;
