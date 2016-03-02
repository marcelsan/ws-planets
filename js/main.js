const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

var renderer;
var scene;
var camera;

var sceneBG;
var cameraBG;
var composer;

var control;

var earth;
var clouds;

function init() {
  sceneBG = new THREE.Scene();
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 1.0);
  renderer.setSize(winWidth, winHeight);

  camera = new THREE.PerspectiveCamera(45, winWidth/winHeight, 0.1, 1000);
  camera.position.x = 35;
  camera.position.y = 36;
  camera.position.z = 33;
  camera.lookAt(scene.position);
  
  objects();
  lights();

  document.body.appendChild(renderer.domElement);
  render();
}

function objects() {
  
}

function lights() {

}

function updateEarth() {
    
}

function addControlGui(controlObject) {
    
}

function render() {
  updateEarth();
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

window.onload = init;
