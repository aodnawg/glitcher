import { Vector2, TextureLoader } from "three";

/**
 * https://threejs.org/docs/#api/en/core/Uniform
 */
export interface Uniform {
  type: string;
  value: any;
}

export type UniformsKeys =
  | "iTime"
  | "iResolution"
  | "u_mouse"
  | "u_texture"
  | "u_value1"
  | "u_value2"
  | "u_value3";

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
    iTime: { type: "f", value: 1.0 },
    iResolution: { type: "v2", value: new Vector2() },
    u_mouse: { type: "v2", value: new Vector2() },
    u_texture: { type: "sampler2D", value: getSampleTex() },
    u_value1: { type: "f", value: 0.5 },
    u_value2: { type: "f", value: 0.5 },
    u_value3: { type: "f", value: 0.5 }
  };
};
