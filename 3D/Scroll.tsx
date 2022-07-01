import type { NextPage } from 'next';
import { useEffect } from 'react';
import * as THREE from 'three';
import Header from '../components/Header';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const starsTexture = '/stars.jpeg';
const sunTexture = '/sun.jpeg';

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
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
  ]);

  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 120);
  scene.add(camera);

  // const ambientLight = new THREE.AmbientLight(0xfff, 10);
  // ambientLight.position.set(0, 2, 5);
  // scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xfff, 1);
  spotLight.position.set(0, 0, 500);
  scene.add(spotLight);

  const dLight = new THREE.DirectionalLight(0xa0a0a0, 1);
  dLight.position.set(0, 2, 5);
  scene.add(dLight);

  const textureLoader = new THREE.TextureLoader();

  const sunGeo = new THREE.SphereGeometry(60, 64, 64);
  const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture),
  });
  const sun = new THREE.Mesh(sunGeo, sunMat);
  sun.position.set(50, -10, 0);
  scene.add(sun);

  const loader = new FontLoader();
  loader.load('/The Bold Font_Bold.json', function (font: any) {
    const textGeo = new TextGeometry('Node.js', {
      font: font,
      size: 20,
      height: 0,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 5,
      bevelSize: 3,
      bevelOffset: 0,
      bevelSegments: 2,
    });
    textGeo.center();
    textGeo.computeBoundingBox();
    textGeo.rotateY(Math.PI / 10);

    const textMat = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      specular: 0xffffff,
      shininess: 50,
    });
    const mesh = new THREE.Mesh(textGeo, textMat);
    mesh.position.set(-70, -160, 0);
    scene.add(mesh);
  });

  const loader2 = new FontLoader();
  loader2.load('/The Bold Font_Bold.json', function (font: any) {
    const textGeo2 = new TextGeometry('Golang', {
      font: font,
      size: 20,
      height: 0,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 5,
      bevelSize: 3,
      bevelOffset: 0,
      bevelSegments: 2,
    });
    textGeo2.center();
    textGeo2.computeBoundingBox();
    textGeo2.rotateY(-Math.PI / 10);

    const textMat2 = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      specular: 0xffffff,
      shininess: 50,
    });
    const mesh2 = new THREE.Mesh(textGeo2, textMat2);
    mesh2.position.set(70, -300, 0);
    scene.add(mesh2);
  });

  const assetLoader = new GLTFLoader();
  const databaseUrl = new URL('/public/database.glb', import.meta.url);
  assetLoader.load(
    databaseUrl.href,
    function (gltf) {
      const model = gltf.scene;
      model.scale.set(80, 60, 50);
      model.position.set(-100, -600, -60);
      model.rotation.set(0, 3, 0);
      model.castShadow = true;
      scene.add(model);
    },
    undefined,
    function (error) {
      console.log(error);
    },
  );

  // window scroll
  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    console.log(scrollY);
  });

  function animate() {
    sun.rotateX(0.001);
    sun.rotateY(0.001);
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

        <section className='flex relative justify-start items-center mx-64 px-32 py-64 my-32 z-10'>
          <h1 className='text-white text-6xl font-serif tracking-wide justify-content hover:text-red-500'>
            <a href='/three'>3D Graphic</a>
          </h1>
        </section>

        <section className='flex relative justify-end items-center mx-64 px-56 py-64 my-32 z-10'>
          <h1 className='text-white text-6xl font-serif tracking-wide justify-content hover:text-green-500'>
            <a href='/node'>Node.js</a>
          </h1>
        </section>

        <section className='flex relative justify-start items-center mx-64 px-32 py-64 my-32 z-10'>
          <h1 className='text-white text-6xl font-serif tracking-wide justify-content hover:text-blue-300'>
            <a href='/golang'>Go Language</a>
          </h1>
        </section>

        <section className='flex relative justify-end items-center mx-64 px-56 py-64 my-32 z-10'>
          <a href='/database'>
            <h1 className='text-white text-6xl font-serif tracking-wide justify-content hover:text-yellow-500'>
              Database
            </h1>
          </a>
        </section>
      </div>
    </>
  );
};

export default Scroll;
