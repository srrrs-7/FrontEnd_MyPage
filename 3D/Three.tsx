import type { NextPage } from 'next';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const init = async (canvas: any) => {
  //import Blender
  //const monkeyUrl = new URL('../assets/monkey.glb', import.meta.url);
  // const assetLoader = new GLTFLoader();
  // assetLoader.load(
  //   monkeyUrl.href,
  //   function (gltf) {
  //     const model = gltf.scene;
  //     model.position.set(-12, 4, 10);
  //     scene.add(model);
  //   },
  //   undefined,
  //   function (error) {
  //     console.log(error);
  //   },
  // );

  // Scene
  const scene = new THREE.Scene();
  // scene.fog = new THREE.Fog(0xffffff, 0, 200);
  scene.fog = new THREE.FogExp2(0xffffff, 0.01);

  // Size
  const sizes = {
    width: innerWidth,
    height: innerHeight,
  };

  // Camera
  const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 1, 1000);
  camera.position.set(2, 1, 6);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas || undefined,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  // renderer.setClearColor(0xffaa00);

  // TextureLoader
  const textureLoader = new THREE.TextureLoader();
  // scene.background = textureLoader.load('/golang.png');
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeTextureLoader.load([
    '/golang.png',
    '/golang.png',
    '/golang.png',
    '/golang.png',
    '/golang.png',
    '/golang.png',
  ]);

  // Geometry + Material
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const boxMaterial = new THREE.MeshLambertMaterial({
    color: '#00ff00',
  });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(0, 1, -1);
  box.rotation.set(20, 10, 10);
  box.castShadow = true;
  scene.add(box);

  const boxGeometry2 = new THREE.BoxGeometry(1, 1, 1);
  const boxMaterial2 = new THREE.MeshBasicMaterial({
    color: '#ff0000',
    wireframe: false,
  });
  const box2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
  box2.position.set(0, 3, -1);
  box2.rotation.set(0, 0, 0);
  scene.add(box2);

  const boxGeometry3 = new THREE.BoxGeometry(1, 1, 1);
  const box3MultiMaterial = [
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/Go-Logo_Blue.webp') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/golang.png') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/Go-Logo_Blue.webp') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/Go-Logo_Blue.webp') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/golang.png') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('/golang.png') }),
  ];
  const box3 = new THREE.Mesh(boxGeometry3, box3MultiMaterial);
  box3.position.set(2, 1, -1);
  box3.rotation.set(0, 0, 0);
  // box3.material.map = textureLoader.load('/golang.png');
  scene.add(box3);

  const sphereGeometry = new THREE.SphereGeometry(0.5);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: '#0000ff',
    wireframe: false,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(2, 3, -1);
  sphere.rotation.set(0, 0, Math.PI / 2);
  sphere.castShadow = true;
  scene.add(sphere);

  // const sphereGeometry2 = new THREE.SphereGeometry(4);
  // const sphereMaterial2 = new THREE.ShaderMaterial({
  //   vertexShader: document?.getElementById('vertexShader')?.textContent,
  //   fragmentShader: document?.getElementById('fragmentShader')?.textContent,
  // });
  // const sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
  // sphere2.position.set(-5, 10, 10);
  // scene.add(sphere2);

  const planeGeometry = new THREE.PlaneGeometry(10, 10, 10);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: '#fff',
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.position.set(0, 0, -1);
  plane.rotation.set(Math.PI / -2, 0, 0);
  plane.receiveShadow = true;
  scene.add(plane);

  const planeGeometry2 = new THREE.PlaneGeometry(10, 10, 10, 10);
  const planeMaterial2 = new THREE.MeshBasicMaterial({
    color: '#fff',
    wireframe: false,
    side: THREE.DoubleSide,
  });
  const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
  plane2.position.set(0, 0, -6);
  (plane2.geometry.attributes.position as any).array[0] -= 10 * Math.random();
  (plane2.geometry.attributes.position as any).array[1] -= 10 * Math.random();
  (plane2.geometry.attributes.position as any).array[2] -= 10 * Math.random();
  const lastPointZ = plane2.geometry.attributes.position.array.length - 1;
  (plane2.geometry.attributes.position as any).array[lastPointZ] -= 10 * Math.random();
  scene.add(plane2);

  // Light
  // const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  // ambientLight.position.set(0, 0, 0);
  // scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff, 0.7);
  spotLight.position.set(0, 6, 0);
  spotLight.castShadow = true;
  spotLight.angle = 1;
  scene.add(spotLight);
  const spotLightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(spotLightHelper);

  // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
  // directionalLight.position.set(0, 5, 0);
  // directionalLight.castShadow = true;
  // directionalLight.shadow.camera.bottom = -8;
  // scene.add(directionalLight);
  // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
  // scene.add(directionalLightHelper);

  // const pointLight = new THREE.PointLight(0xffffff, 1);
  // pointLight.position.set(1, 5, 3);
  // pointLight.castShadow = true;
  // scene.add(pointLight);
  // const pointLightHelper = new THREE.PointLightHelper(pointLight);
  // scene.add(pointLightHelper);
  // const pointLightShadowHelper = new THREE.CameraHelper(pointLight.shadow.camera);
  // scene.add(pointLightShadowHelper);

  // dat GUI
  const dat = await import('dat.gui');
  const gui = new dat.GUI();
  const options = {
    color: '#ffea00',
    wireframe: false,
    speed: 0.01,
    angle: 1,
    penumbra: 0,
    intensity: 1,
  };
  gui.addColor(options, 'color').onChange(function (e) {
    sphere.material.color.set(e);
  });
  gui.add(options, 'wireframe').onChange(function (e) {
    sphere.material.wireframe = e;
  });
  // gui.add(options, 'speed', 0, 1).onChange(function (e) {
  //   sphere.position.set(2, 10 * Math.abs(Math.sin(e)), 0);
  // });
  gui.add(options, 'speed', 0, 0.1);
  gui.add(options, 'angle', 0, 1);
  gui.add(options, 'penumbra', 0, 1);
  gui.add(options, 'intensity', 0, 1);

  // Mouse event
  const mousePosition = new THREE.Vector2();
  window.addEventListener('mousemove', function (e) {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
  const rayCaster = new THREE.Raycaster();
  const sphereId = sphere.id;
  box2.name = 'theBox';

  // Animation
  let step = 0;
  const clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    step += options.speed;
    sphere.position.set(2, 10 * Math.abs(Math.sin(step)), 0);

    box.rotation.set(0, elapsedTime, 0);
    box2.rotation.set(elapsedTime, 0, 0);
    box3.rotation.set(0, 0, elapsedTime);

    spotLight.angle = options.angle;
    spotLight.penumbra = options.penumbra;
    spotLight.intensity = options.intensity;
    spotLightHelper.update();

    rayCaster.setFromCamera(mousePosition, camera);
    const intersects = rayCaster.intersectObjects(scene.children);
    console.log(intersects);
    console.log(sphereId);

    for (let i = 0; i < intersects.length; i++) {
      if (intersects[i].object.id === sphereId) {
        (intersects[i].object as any).material.color.set('0xffaa00');
      }
      if (intersects[i].object.name === 'theBox') {
        intersects[i].object.rotation.x = elapsedTime;
        intersects[i].object.rotation.y = elapsedTime;
      }
    }

    window.requestAnimationFrame(tick);
    renderer.render(scene, camera);
  };
  tick();

  // Resize with browser
  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  // GUI Helper
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.update();
  const gridHelper = new THREE.GridHelper(10, 20);
  scene.add(gridHelper);
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);
};

const Three: NextPage = () => {
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

export default Three;
