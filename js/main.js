// -------------------------humburger
$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());
// -------------------------typing word

setInterval(() => {
  $(function(){
      $("#canvas-title p").t({
        speed : 300,
        repeat:true,
      })
  });
  },3000);
// ----------------------------lozad.js
{
  const observer = lozad();
  
  observer.observe();

}

// ----------------------------rain.js



// ----------------------------three.js

  window.addEventListener('load',init);
  function init(){

  const width = window.innerWidth;
  const height = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width,height);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(44,width / height);
  camera.position.set(0,0, +1000);

  const geometry = new THREE.BoxGeometry(300,300,300);

  const loader = new THREE.TextureLoader();
  const texture = loader.load('img/sky.jpg');

  const material = new THREE.MeshStandardMaterial({ map:texture});
  const box = new THREE.Mesh(geometry,material);

  scene.add(box);

  const ambientLight = new THREE.AmbientLight(0xeeeeee,2);
  scene.add( ambientLight );

  // ---------------------------------mausu action

  var mousedown = false;
  renderer.domElement.addEventListener('mousedown', function(e){
  mousedown = true;
  prevPosition = {x: e.pageX, y: e.pageY};
  }, false);

  renderer.domElement.addEventListener('mousemove', function(e){
  if(!mousedown) return;
  moveDistance = {x: prevPosition.x - e.pageX, y: prevPosition.y - e.pageY};
  box.rotation.x += moveDistance.y * 0.01;
  box.rotation.y -= moveDistance.x * 0.01;

  prevPosition = {x: e.pageX, y: e.pageY};
  
  }, false);

  renderer.domElement.addEventListener('mouseup', function(e){
  mousedown = false;
  }, false);

  renderer.domElement.addEventListener('mousedown', function(e){
  var mouse_x =   ((e.pageX-e.target.offsetParent.offsetLeft) / renderer.domElement.width)  * 2 - 1;
  var mouse_y = - ((e.pageY-e.target.offsetParent.offsetTop) / renderer.domElement.height) * 2 + 1;
  var vector = new THREE.Vector3(mouse_x, mouse_y, 0.5);

  var ray = new THREE.Ray(camera.position); 
  }, false);

  // -----------------------------------------background space

let rot =0;

const group = new THREE.Group();
scene.add(group);

const star = new THREE.SphereGeometry(0.4,32,32);

const mat = new THREE.MeshBasicMaterial();

for (let i = 0; i < 1200; i++) {
  const starmesh = new THREE.Mesh(star, mat);
  starmesh.position.x = (Math.random() - 0.5) * 1200;
  starmesh.position.y = (Math.random() - 0.5) * 800;
  starmesh.position.z = (Math.random() - 0.5) * 1200;
  starmesh.rotation.x = Math.random() * 1 * Math.PI;
  // グループに格納する
  group.add(starmesh);
}
      //    scene.add(starmesh);
tick2();

//実行するための関数
function tick2(){
    rot += 0.1;
        
    // アニメーション処理
    const radian = (rot * Math.PI) / 180;
    camera.position.x = Math.sin(radian) * 1000;
    camera.position.z = Math.cos(radian) * 1000;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
        
    //レンダリング
    renderer.render(scene, camera);
    
    //自分自身を呼び続ける
    requestAnimationFrame(tick2);
}

// ーーーーーーーーーーーーーーーーーーーーーーー
  tick();

  function tick(){
      box.rotation.y += 0.01;
      box.rotation.x += 0.01;
      renderer.render(scene,camera);
      
      requestAnimationFrame(tick);
  }
}
