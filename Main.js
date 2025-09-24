/* ajax link to three.js before the toc in the beginning of js code as well as at the end. */
// https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js

// Table of Contents
// 1.00 - Setup Scene, Camera, and Renderer
// 2.00 - Create Cube
// 3.00 - Animation Loop
// 4.00 - Window Resize Handler


// - - - >> 1.00 - Setup Scene, Camera, and Renderer
// 1.00.00
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// 1.00.01
camera.position.z = 5;
// 1.00.02


// - - - >> 2.00 - Create Cube
// 2.00.00
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// 2.00.01
scene.add(cube);
// 2.00.02


// - - - >> 3.00 - Animation Loop
// 3.00.00
function animate() {
    requestAnimationFrame(animate);
// 3.00.01
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
// 3.00.02
    renderer.render(scene, camera);
}
// 3.00.03
animate();
// 3.00.04


// - - - >> 4.00 - Window Resize Handler
// 4.00.00
window.addEventListener('resize', () => {
// 4.00.01
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
// 4.00.02
    renderer.setSize(window.innerWidth, window.innerHeight);
// 4.00.03
});
// 4.00.04

// https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
