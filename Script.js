import * as THREE from 'https://unpkg.com/three@0.174.0/build/three.module.min.js';

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animación
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
