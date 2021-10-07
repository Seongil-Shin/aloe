import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { Renderer, TextureLoader, THREE } from "expo-three";

let rafID: number;
let glView: GLView;

export const onContextCreate = async (gl: ExpoWebGLRenderingContext) => {
   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
   );

   const renderer = new Renderer({ gl });
   renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
   renderer.setClearColor(0xffffff, 0);

   const geometry = new THREE.BoxGeometry(1, 1, 1);
   const material = new THREE.MeshBasicMaterial({
      map: new TextureLoader().load(
         require("../../assets/images/swmansion.png")
      ),
   });
   const cube = new THREE.Mesh(geometry, material);
   scene.add(cube);

   camera.position.z = 3;

   const animate = () => {
      rafID = requestAnimationFrame(animate);

      cube.rotation.x += 0.02;
      cube.rotation.y += 0.03;
      cube.position.x = Math.sin(cube.rotation.x);
      cube.position.y = Math.cos(cube.rotation.y);

      renderer.render(scene, camera);

      gl.endFrameEXP();
   };
   animate();
};
