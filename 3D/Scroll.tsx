import type { NextPage } from 'next';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Text } from 'troika-three-text';
import Header from '../components/Header';

const init = async (canvas: any) => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas || undefined,
    alpha: true,
  });
  renderer.setClearAlpha(0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000);

  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 120);
  scene.add(camera);

  const ambientLight = new THREE.AmbientLight(0xfff, 0.3);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xfff, 0.3);
  scene.add(spotLight);

  const boxGeo = new THREE.BoxGeometry(80, 80, 80);
  const boxMat = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const box = new THREE.Mesh(boxGeo, boxMat);
  box.position.set(70, 0, 0);
  box.scale.set(1, 1, 1);
  scene.add(box);

  const boxGeo2 = new THREE.BoxGeometry(80, 80, 80);
  const boxMat2 = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });
  const box2 = new THREE.Mesh(boxGeo2, boxMat2);
  box2.position.set(-70, -150, 0);
  box2.scale.set(1, 1, 1);
  scene.add(box2);

  const boxGeo3 = new THREE.BoxGeometry(80, 80, 80);
  const boxMat3 = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
  });
  const box3 = new THREE.Mesh(boxGeo3, boxMat3);
  box3.position.set(70, -300, 0);
  box3.scale.set(1, 1, 1);
  scene.add(box3);

  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    console.log(scrollY);
  });

  function animate() {
    box.rotateX(0.02);
    box.rotateY(0.02);
    box2.rotateX(0.02);
    box2.rotateY(0.02);
    box3.rotateX(0.02);
    box3.rotateY(0.02);
    camera.position.y = -scrollY / 5;
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);

  window.addEventListener('resize', function () {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
};

const Scroll: NextPage = () => {
  let canvas: HTMLElement;

  useEffect(() => {
    if (canvas) return;
    // Canvas
    canvas = document.getElementById('canvas')!;
    // GUI init
    init(canvas);
  }, []);

  return (
    <>
      <div className='absolute top-0 w-full z-10'>
        <Header />
      </div>
      <div>
        <canvas className='fixed top-0 left-0 z-0' id='canvas'></canvas>
        <section className='flex relative justify-start items-center mx-64 py-64 my-32 z-10'>
          <h1 className='text-white text-6xl font-serif tracking-wide justify-content'>
            good morning
          </h1>
        </section>

        <section className='flex relative justify-end items-center mx-64 py-64 my-32 z-10'>
          <h1 className='text-white text-6xl font-serif tracking-wide justify-content'>
            good evening
          </h1>
        </section>

        <section className='flex relative justify-center items-center py-64 my-32 z-10'>
          <h1 className='text-white text-6xl font-serif tracking-wide justify-content'>
            good night
          </h1>
        </section>
      </div>
    </>
  );
};

export default Scroll;
