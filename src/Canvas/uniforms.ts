import * as THREE from "three";

export interface Uniform {
  type: string;
  value: any;
}

export type UniformsKeys = "u_time" | "u_resolution" | "u_mouse";

export type Uniforms = { [key in UniformsKeys]: Uniform };

export const initUniforms = (): Uniforms => {
  return {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_mouse: { type: "v2", value: new THREE.Vector2() }
  };
};
