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
    var sphereGeometry = new THREE.SphereGeometry(30, 100, 100);
    var sphereMaterial = new THREE.MeshPhongMaterial(0xeaeaea);
    earth = new THREE.Mesh(sphereGeometry, sphereMaterial);

    scene.add(earth);
}

function lights() {
  var ambient = new THREE.AmbientLight(0x111111);
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(100, 10, -50);

  scene.add(ambient);
  scene.add(light);
}

function updateEarth() {
    earth.rotation.y += 0.1;
}

function addControlGui(controlObject) {
    
}

function render() {
  updateEarth();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

window.onload = init;
