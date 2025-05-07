<p align="center">
  <a href="#first_3D_fa">🇮🇷 فارسی</a> | <a href="#first_3D_en">🇺🇸 English</a> | <a href="#preview"> Preview </a>
</p>

---

## پیش‌نمایش 👀

<a id="preview"></a>
![اسکرین‌شات پروژه](./preview.gif)

<h1 id="first_3D_fa">First Project 3D 🚗 (فارسی)</h1>

این پروژه اولین پروژه سه‌بعدی من با استفاده از کتابخانه **Three.js** است که مدل سه‌بعدی **BMW i8** را نمایش می‌دهد و از **RGBELoader** برای بارگذاری تصاویر HDR بهره می‌برد. این پروژه شامل یک مدل سه‌بعدی، نورپردازی، کنترل‌های دوربین و بارگذاری یک محیط HDR است.

## پیش‌نیازها 📦

برای اجرای پروژه به این پیش‌نیازها نیاز دارید:

* **Node.js** (نسخه 14 یا بالاتر)
* **NPM** (همراه Node.js نصب می‌شود)
* **Git**

## مراحل نصب و راه‌اندازی 🛠️

برای شروع مراحل زیر را دنبال کنید:

1. **مخزن پروژه را کلون کنید:**

```bash
git clone https://github.com/Mohammad01mmm/First-Project-3D.git
cd First-Project-3D
```

2. **وابستگی‌ها را نصب کنید:**

```bash
npm install
```

3. **پروژه را اجرا کنید:**

```bash
npm run dev
```

4. **برای ساخت نسخه نهایی:**

```bash
npm run build
```

## ساختار پروژه 🗂️

```
/First-Project-3D
├── /models
│   ├── 2019_lbworks_bmw_i8_ver.2.glb  # مدل سه‌بعدی BMW i8
│   └── rural_asphalt_road_1k.hdr      # تصویر HDR جاده
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── script.js
```

## نمایش مدل سه‌بعدی BMW 🚙

در این پروژه، مدل سه‌بعدی **BMW i8** به‌صورت کامل بارگذاری و نمایش داده می‌شود. همچنین، از **RGBELoader** برای بارگذاری تصاویر HDR به‌منظور شبیه‌سازی نور و محیط استفاده شده است.

### کد اصلی برای بارگذاری مدل سه‌بعدی و HDR:

```javascript
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

// انتخاب Canvas
const canvas = document.querySelector('canvas.threeD');

// تنظیمات صفحه نمایش
const sizes = {
  width: 800,
  height: 600,
};

// ساخت Scene و دوربین
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

// اضافه کردن GridHelper و AxesHelper
const gridhelper = new THREE.GridHelper(10, 10);
scene.add(gridhelper);
const axeshelper = new THREE.AxesHelper(7);
scene.add(axeshelper);

// بارگذاری مدل سه‌بعدی BMW i8
const gltfloader = new GLTFLoader();
gltfloader.load(
  'models/2019_lbworks_bmw_i8_ver.2.glb',
  (gltf) => {
    gltf.scene.scale.set(20, 20, 20);
    scene.add(gltf.scene);
  },
  (xhr) => {
    console.log(`Loading Progress: ${(xhr.loaded / xhr.total) * 100}%`);
  },
  (error) => {
    console.log('An error occurred while Loading the model:', error);
  }
);

// اضافه کردن نورپردازی
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

// تنظیمات دوربین
const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 0.1, 2000);
camera.position.set(1, 0.5, 0);
scene.add(camera);

// بارگذاری HDR
const hdrLoader = new RGBELoader();
hdrLoader.load('models/rural_asphalt_road_1k.hdr', (hdr) => {
  hdr.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = hdr;
});

// تنظیمات رندر
const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;

// تنظیمات سایز صفحه نمایش
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

// انیمیشن
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
```

## ویژگی‌ها ⚙️

* نمایش مدل سه‌بعدی **BMW i8** با استفاده از **GLTFLoader**.
* بارگذاری و نمایش محیط HDR با استفاده از **RGBELoader**.
* استفاده از **OrbitControls** برای چرخش دوربین و مشاهده مدل از زوایای مختلف.
* بارگذاری صحیح مدل و پیشرفت بارگذاری مدل در کنسول.

## نویسنده ✍️

* **نام:** Mohammad
* **ایمیل:** [mohammadamirahmad01@gmail.com](mailto:mohammadamirahmad01@gmail.com)
* **گیت‌هاب:** [Mohammad01mmm](https://github.com/Mohammad01mmm)

---

<h1 id="first_3D_en">First Project 3D 🚗 (English)</h1>

This is my first 3D project using the **Three.js** library that displays the **BMW i8** 3D model and utilizes the **RGBELoader** to load HDR images. This project includes a 3D model, lighting, camera controls, and the loading of an HDR environment.

## Prerequisites 📦

To run the project, you need the following:

* **Node.js** (version 14 or higher)
* **NPM** (comes with Node.js)
* **Git**

## Installation and Setup 🛠️

Follow these steps to get started:

1. **Clone the project repository:**

```bash
git clone https://github.com/Mohammad01mmm/First-Project-3D.git
cd First-Project-3D
```

2. **Install the dependencies:**

```bash
npm install
```

3. **Run the project:**

```bash
npm run dev
```

4. **Build the production version:**

```bash
npm run build
```

## Project Structure 🗂️

```
/First-Project-3D
├── /models
│   ├── 2019_lbworks_bmw_i8_ver.2.glb  # BMW i8 3D model
│   └── rural_asphalt_road_1k.hdr      # HDR image of the road
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── script.js
```

## Displaying the BMW 3D Model 🚙

In this project, the **BMW i8** 3D model is loaded and displayed. Additionally, **RGBELoader** is used to load HDR images to simulate realistic lighting and environment.

### Main code for loading the 3D model and HDR:

```javascript
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

// Select Canvas
const canvas = document.querySelector('canvas.threeD');

// Set up the display settings
const sizes = {
  width: 800,
  height: 600,
};

// Set up Scene and Camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

// Add GridHelper and AxesHelper
const gridhelper = new THREE.GridHelper(10, 10);
scene.add(gridhelper);
const axeshelper = new THREE.AxesHelper(7);
scene.add(axeshelper);

// Load BMW i8 3D model
const gltfloader = new GLTFLoader();
gltfloader.load(
  'models/2019_lbworks_bmw_i8_ver.2.glb',
  (gltf) => {
    gltf.scene.scale.set(20, 20, 20);
    scene.add(gltf.scene);
  },
  (xhr) => {
    console.log(`Loading Progress: ${(xhr.loaded / xhr.total) * 100}%`);
  },
  (error) => {
    console.log('An error occurred while Loading the model:', error);
  }
);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

// Set up Camera
const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 0.1, 2000);
camera.position.set(1, 0.5, 0);
scene.add(camera);

// Load HDR
const hdrLoader = new RGBELoader();
hdrLoader.load('models
```


/rural\_asphalt\_road\_1k.hdr', (hdr) => {
hdr.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = hdr;
});

// Set up Renderer
const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;

// Set the display size
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window\.devicePixelRatio);

// Animation loop
function animate() {
requestAnimationFrame(animate);
controls.update();
renderer.render(scene, camera);
}

animate();

```

## Features ⚙️

- Display of **BMW i8** 3D model using **GLTFLoader**.
- Loading and displaying HDR environment using **RGBELoader**.
- Use of **OrbitControls** for camera rotation and model viewing.
- Proper model loading and progress tracking in the console.



## Author ✍️

- **Name:** Mohammad
- **Email:** [mohammadamirahmad01@gmail.com](mailto:mohammadamirahmad01@gmail.com)
- **GitHub:** [Mohammad01mmm](https://github.com/Mohammad01mmm)


