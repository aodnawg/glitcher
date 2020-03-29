import { useEffect } from "react";
import { Uniforms } from "../uniforms";

const resize = (renderer: THREE.Renderer, uniforms: Uniforms): void => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
};

const useReize = (renderer: THREE.Renderer, uniforms: Uniforms) => {
  resize(renderer, uniforms);
  useEffect(() => {
    const resize_ = () => resize(renderer, uniforms);
    window.addEventListener("resize", resize_, false);
    return () => {
      window.removeEventListener("resize", resize_, false);
    };
  }, []);
};

export default useReize;
