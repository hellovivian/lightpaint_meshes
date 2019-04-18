/*

33 1/2 RPM
10 strobes per second 
model every 20 degrees

N = 2*pi*strobe_hz/w, w = 2*pi*f (f = RPM)

N = strobe_hz / f 
N = 5
strobe_hz = 
f = 33.33
*/

const TO_RAD = 2 * 3.14159 / 360  

const numRings = 3;  // how many rings? 
const numBoxes = 12; //how many elements per ring? 
const maxRadius = 4; //radius of the spinning disk 
const ringRadii = [2, 6, 8]; // //radius of each of the rings
const boxSizes = [[1,4,1], [1,2,1],[.5,1,.5]]; //sizes of each of the boxes (x,y,z)

if (ringRadii.length != numRings) {
  console.log("error!");
}

//disk that spins
var cylinderDiameter = maxRadius * 2;
var cylinderGeo = new THREE.CylinderGeometry(cylinderDiameter,cylinderDiameter,0.1,20);
var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( cylinderGeo, cylinderMaterial );        

//single box    

var boxMat = new THREE.MeshNormalMaterial(); 
var boxSize = 1;
var boxGeo = new THREE.BoxGeometry(boxSize,boxSize,boxSize);
var boxMesh = new THREE.Mesh(boxGeo, boxMat);
boxMesh.position.y = boxSize/2; 

//rings
var finalGeometry = new THREE.Geometry();
for (numRing = 0; numRing < numRings; numRing++){
  ringRadius = ringRadii[numRing];
  var ringGeom = new THREE.Geometry();
  var baseBox = new THREE.Mesh(new THREE.BoxGeometry(boxSizes[numRing][0], boxSizes[numRing][1], boxSizes[numRing][2]), boxMat);
  baseBox.position.y = boxSizes[numRing][1] / 2;
  for (i = 0; i < 360; i+= 360 / numBoxes) {
     var newBoxMesh = baseBox.clone();
     newBoxMesh.material = boxMat;
     //dampen the height around the ring
     newBoxMesh.scale.y = 0.5 + 0.5 * Math.sin(i * TO_RAD); 
     //set a position around the ring
     newBoxMesh.position.x = ringRadius * Math.cos(i * TO_RAD);
     newBoxMesh.position.z = ringRadius  * Math.sin(i * TO_RAD);
     newBoxMesh.updateMatrix();
     //add to ring
     ringGeom.merge(newBoxMesh.geometry, newBoxMesh.matrix);
  }
  finalGeometry.merge(ringGeom);
}

finalGeometry.merge(cylinder.geometry, cylinder.matrix);
var finalMesh = new THREE.Mesh(finalGeometry, boxMat);