import { Uniforms } from "./uniforms";

export const resize = (
  container: Element,
  renderer: THREE.Renderer,
  uniforms: Uniforms
): void => {
  renderer.setSize(container.clientWidth, container.clientHeight);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
};

export default resize;
