import type { NextPage } from 'next';
import { useEffect } from 'react';
import * as THREE from 'three';
import Header from '../components/Header';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Text } from 'troika-three-text';

const starsTexture = '/stars.jpeg';

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

  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 2500);
  camera.position.set(0, 0, 200);
  scene.add(camera);

  // light
  const spotLight = new THREE.SpotLight(0xfff, 1);
  spotLight.position.set(0, 0, 500);
  scene.add(spotLight);
  const spotLight2 = new THREE.SpotLight(0xfff, 1);
  spotLight2.position.set(0, 0, -500);
  scene.add(spotLight2);

  const dLight = new THREE.DirectionalLight(0xa0a0a0, 1);
  dLight.position.set(0, 2, 5);
  scene.add(dLight);
  const dLight2 = new THREE.DirectionalLight(0xa0a0a0, 1);
  dLight2.position.set(0, -2, -5);
  scene.add(dLight2);

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.update();

  // layer 1
  const loader = new FontLoader();
  loader.load('/The Bold Font_Bold.json', function (font: any) {
    const textGeo = new TextGeometry('Satou \n Ryousuke', {
      font: font,
      size: 20,
      height: 0,
      curveSegments: 10,
      bevelEnabled: true,
      bevelThickness: 5,
      bevelSize: 3,
      bevelOffset: -1,
      bevelSegments: 4,
    });
    textGeo.center();
    textGeo.computeBoundingBox();
    textGeo.rotateY(Math.PI / 10);
    const textMat = new THREE.MeshPhongMaterial({
      color: 0x00ccff,
      specular: 0xffffff,
      shininess: 50,
    });
    const mesh = new THREE.Mesh(textGeo, textMat);
    mesh.position.set(-50, -10, 100);
    scene.add(mesh);
  });

  const textureLoader = new THREE.TextureLoader();
  const planeGeo = new THREE.BoxGeometry(1, 1, 1);
  const planeMat = [
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/profile1.jpg') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/profile1.jpg') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/profile1.jpg') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/profile1.jpg') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/profile1.jpg') }), // positive
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/profile2.jpg') }), // negative
  ];
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.scale.set(70, 100, 0);
  plane.position.set(80, -10, 100);
  scene.add(plane);

  // layer 2
  const loader2 = new FontLoader();
  loader2.load('/The Bold Font_Bold.json', function (font: any) {
    const textGeo2 = new TextGeometry('Skills', {
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
      color: 0x00ff00,
      specular: 0xffffff,
      shininess: 50,
    });
    const mesh2 = new THREE.Mesh(textGeo2, textMat2);
    mesh2.position.set(70, 0, 600);
    scene.add(mesh2);
  });

  const planeGeo2 = new THREE.BoxGeometry(1, 1, 1);
  const planeMat2 = new THREE.MeshBasicMaterial({ color: 0xaaffaa, side: THREE.DoubleSide });
  const plane2 = new THREE.Mesh(planeGeo2, planeMat2);
  plane2.scale.set(150, 100, 0);
  plane2.position.set(-70, 0, 590);
  scene.add(plane2);

  const myText1 = new Text();
  myText1.text = '3D Graphics';
  myText1.fontSize = 20;
  myText1.position.set(-70, 35, 600);
  myText1.color = 0xffaa00;
  myText1.outlineWidth = 1;
  myText1.outlineColor = 0x000;
  myText1.depthOffset = 50;
  myText1.anchorX = 'center';
  myText1.anchorY = 'center';
  myText1.fillOpacity = 1;
  scene.add(myText1);
  myText1.sync();

  const myText2 = new Text();
  myText2.text = 'Node.js';
  myText2.fontSize = 20;
  myText2.position.set(-70, 10, 600);
  myText2.color = 0x00ff00;
  myText2.outlineWidth = 1;
  myText2.outlineColor = 0x000;
  myText2.depthOffset = 50;
  myText2.anchorX = 'center';
  myText2.anchorY = 'center';
  myText2.fillOpacity = 1;
  scene.add(myText2);
  myText2.sync();

  const myText3 = new Text();
  myText3.text = 'Golang';
  myText3.fontSize = 20;
  myText3.position.set(-70, -15, 600);
  myText3.color = 0x00ffff;
  myText3.outlineWidth = 1;
  myText3.outlineColor = 0x000;
  myText3.depthOffset = 50;
  myText3.anchorX = 'center';
  myText3.anchorY = 'center';
  myText3.fillOpacity = 1;
  scene.add(myText3);
  myText3.sync();

  // layer3
  const loader3 = new FontLoader();
  loader3.load('/The Bold Font_Bold.json', function (font: any) {
    const textGeo3 = new TextGeometry('Profile', {
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
    textGeo3.center();
    textGeo3.computeBoundingBox();
    textGeo3.rotateY(Math.PI / 10);
    const textMat3 = new THREE.MeshPhongMaterial({
      color: 0xffff00,
      specular: 0xffffff,
      shininess: 50,
    });
    const mesh2 = new THREE.Mesh(textGeo3, textMat3);
    mesh2.position.set(-70, 0, 1150);
    scene.add(mesh2);
  });

  const planeGeo3 = new THREE.BoxGeometry(1, 1, 1);
  const planeMat3 = new THREE.MeshBasicMaterial({ color: 0xaaffaa, side: THREE.DoubleSide });
  const plane3 = new THREE.Mesh(planeGeo3, planeMat3);
  plane3.scale.set(250, 100, 0);
  plane3.position.set(70, 0, 1090);
  scene.add(plane3);

  const myText4 = new Text();
  myText4.text =
    'I am Full Stack Engineer \n doshisya university  \n looking for New Challenge \n  ';
  myText4.fontSize = 15;
  myText4.position.set(70, 40, 1100);
  myText4.color = 0x0ff;
  myText4.anchorX = 'center';
  myText4.anchorY = 'center';
  myText4.fillOpacity = 1;
  scene.add(myText4);
  myText4.sync();

  //layer4
  const loader4 = new FontLoader();
  loader4.load('/The Bold Font_Bold.json', function (font: any) {
    const textGeo4 = new TextGeometry('message', {
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
    textGeo4.center();
    textGeo4.computeBoundingBox();
    textGeo4.rotateY(Math.PI / 10);
    const textMat4 = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      specular: 0xffffff,
      shininess: 50,
    });
    const mesh2 = new THREE.Mesh(textGeo4, textMat4);
    mesh2.position.set(-70, 0, 1650);
    scene.add(mesh2);
  });

  const planeGeo4 = new THREE.BoxGeometry(1, 1, 1);
  const planeMat4 = new THREE.MeshBasicMaterial({ color: 0xaaffaa, side: THREE.DoubleSide });
  const plane4 = new THREE.Mesh(planeGeo4, planeMat4);
  plane4.scale.set(250, 100, 0);
  plane4.position.set(70, 0, 1590);
  scene.add(plane4);

  const myText5 = new Text();
  myText5.text = 'I am Ryousuke \n From Hokkaido \n looking for New Challenge \n  ';
  myText5.fontSize = 15;
  myText5.position.set(90, 40, 1600);
  myText5.color = 0x0ff;
  myText5.anchorX = 'center';
  myText5.anchorY = 'center';
  myText5.fillOpacity = 1;
  scene.add(myText5);
  myText5.sync();

  function animate() {
    plane.rotateY(0.02);
    orbit.update();
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
      </div>
    </>
  );
};

export default Scroll;
