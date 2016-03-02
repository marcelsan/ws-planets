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
    var earthGeometry = new THREE.SphereGeometry(30, 100, 100);
    var texture = THREE.ImageUtils.loadTexture(
                  "assets/textures/planets/earthmap4k.jpg");
    var sphereMaterial = new THREE.MeshPhongMaterial({
          map : texture
        });
    earth = new THREE.Mesh(earthGeometry, sphereMaterial);

  var cloudGeometry = new THREE.SphereGeometry(
                            earthGeometry.parameters.radius * 1.01,
                            earthGeometry.parameters.widthSegments,
                            earthGeometry.parameters.heightSegments
                          );

  var cloudTexture = THREE.ImageUtils.loadTexture(
                      "assets/textures/planets/fair_clouds_4k.png");
  var cloudMaterial = new THREE.MeshBasicMaterial({
                          map: cloudTexture,
                          transparent : true,
                          opacity : 0.8
                      });

  clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
  
  scene.add(earth);
  scene.add(clouds);
}

function lights() {
  var ambient = new THREE.AmbientLight(0x111111);
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(100, 10, -50);

  scene.add(ambient);
  scene.add(light);
}

function updateEarth() {
    earth.rotation.y += 0.001;
    clouds.rotation.y += 0.0011;
}

function addControlGui(controlObject) {
    
}

function render() {
  updateEarth();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

window.onload = init;
