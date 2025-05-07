import * as THREE from "three";
import {
    WebGLRenderer
} from "three";
import {
    OrbitControls
} from "three/addons/controls/OrbitControls.js";
import {
    GLTFLoader
} from "three/addons/loaders/GLTFLoader.js";
import {
    RGBELoader
}
from "three/addons/loaders/RGBELoader.js";

const canvas = document.querySelector("canvas.threeD");

const sizes = {
    width: 800,
    height: 600,
};
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

const gridhelper = new THREE.GridHelper(10, 10);
scene.add(gridhelper);

const axeshelper = new THREE.AxesHelper(7, 7);
scene.add(axeshelper);

const box1 = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
});
const mesh1 = new THREE.Mesh(box1, material);

// scene.add(mesh1);

const gltfloader = new GLTFLoader();
gltfloader.load(
    './models/2019_lbworks_bmw_i8_ver.2.glb',
    (gltf) => {
        gltf.scene.scale.set(20, 20, 20);
        scene.add(gltf.scene);
    },
    undefined,
    (error) => {
        console.log('An error occurred while Loading the model:', error);
    }
);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);
const camera = new THREE.PerspectiveCamera(
    70,
    sizes.width / sizes.height,
    0.1,
    2000
);
camera.position.set(1, 0.5, 0);
scene.add(camera);

const hdrLoader = new RGBELoader();
hdrLoader.load("model/rural_asphalt_road_1k.hdr", (hdr) => {
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = hdr;
});

const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();