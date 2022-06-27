import type { NextPage } from 'next';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Text } from 'troika-three-text';

const init = async (canvas: any) => {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas || undefined,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffaa00);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1200);
  camera.position.set(0, 200, 900);

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.update();

  const ambientLight = new THREE.AmbientLight(0x0000ff, 0.3);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xfff, 0.3);
  scene.add(spotLight);

  // Troika
  const myText = new Text();
  myText.text = 'Hair Studio';
  myText.fontSize = 50;
  myText.position.set(0, 120, 0);
  myText.color = 0x888;
  myText.outlineWidth = 2;
  myText.outlineColor = 0xffaa00;
  myText.depthOffset = 50;
  myText.anchorX = 'center';
  myText.fillOpacity = 0.8;
  scene.add(myText);
  myText.sync();

  const myText2 = new Text();
  myText2.text = 'Vintage';
  myText2.fontSize = 100;
  myText2.position.set(0, 80, 0);
  myText2.color = 0x888;
  myText2.outlineWidth = 2;
  myText2.outlineColor = 0xffaa00;
  myText2.anchorX = 'center';
  myText2.letterSpacing = 0.2;
  scene.add(myText2);
  myText2.sync();

  function animate() {
    myText.rotateY(0.01);
    myText2.rotateY(0.01);
    orbit.autoRotate = true;
    orbit.autoRotateSpeed = 10.0;
    orbit.update();
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

const Troika: NextPage = () => {
  let canvas: HTMLElement;

  useEffect(() => {
    if (canvas) return;
    // Canvas
    canvas = document.getElementById('canvas')!;
    // GUI init
    init(canvas);
  }, []);

  return <></>;
};

export default Troika;
