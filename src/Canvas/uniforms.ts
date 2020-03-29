import { Vector2, TextureLoader } from "three";

/**
 * https://threejs.org/docs/#api/en/core/Uniform
 */
export interface Uniform {
  type: string;
  value: any;
}

export type UniformsKeys = "u_time" | "u_resolution" | "u_mouse" | "u_texture";

export type Uniforms = { [key in UniformsKeys]: Uniform };

const getSampleTex = () => {
  const loader = new TextureLoader();
  const img = document.getElementById("tex")! as HTMLImageElement;
  const src = img.getAttribute("src")!;
  const tex = loader.load(src);
  return tex;
};

export const initUniforms = (): Uniforms => {
  return {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new Vector2() },
    u_mouse: { type: "v2", value: new Vector2() },
    u_texture: { type: "sampler2D", value: getSampleTex() }
  };
};
