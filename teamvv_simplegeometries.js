
const cylinderDiameter = 8;
const cylinderGeo = new THREE.CylinderGeometry(cylinderDiameter,cylinderDiameter,0.1,20);
var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( cylinderGeo, cylinderMaterial );        
    
var boxMaterial = new THREE.PointsMaterial({
  color: 0xFFFFFF,
  size: 0.02,
//map: THREE.ImageUtils.loadTexture("smoke.png"),
  blending: THREE.AdditiveBlending,
  transparent: true
});
var boxSize = 1;
const geo = new THREE.BoxGeometry(boxSize,boxSize,boxSize);    
var mesh1 = new THREE.Mesh(geo, boxMaterial);
var mesh2 = new THREE.Mesh(geo, boxMaterial);
var mesh3 = new THREE.Mesh(geo, boxMaterial);
var mesh4 = new THREE.Mesh(geo, boxMaterial);
var mesh5 = new THREE.Mesh(geo, boxMaterial);
var mesh6 = new THREE.Mesh(geo, boxMaterial);
var mesh7 = new THREE.Mesh(geo, boxMaterial);
var mesh8 = new THREE.Mesh(geo, boxMaterial);
var mesh9 = new THREE.Mesh(geo, boxMaterial);
var row1 = new THREE.Group();
var row2 = new THREE.Group();
var row3 = new THREE.Group();
row1.add( mesh1 ); row1.add( mesh2 ); row1.add( mesh3 );
row2.add( mesh4 ); row2.add( mesh5 ); row2.add( mesh6 );
row3.add( mesh7 ); row3.add( mesh8 ); row3.add( mesh9 );
var cubes = new THREE.Group();
   
//horizontal positioning
mesh1.position.x += boxSize;
mesh3.position.x -= boxSize;
mesh4.position.x += boxSize;
mesh6.position.x -= boxSize;
mesh7.position.x += boxSize;
mesh9.position.x -= boxSize;
           
mesh4.position.y += boxSize;
mesh5.position.y += boxSize;
mesh6.position.y += boxSize;
mesh4.position.z -= boxSize;
mesh5.position.z -= boxSize;
mesh6.position.z -= boxSize;

mesh7.position.y += 2 * boxSize;
mesh8.position.y += 2 * boxSize;
mesh9.position.y += 2 * boxSize;
mesh7.position.z -= 2 * boxSize;
mesh8.position.z -= 2 * boxSize;
mesh9.position.z -= 2 * boxSize;
 
//cubes.add(row1);
//cubes.add(row2);
//cubes.add(row3);

var mergedGeometries = new THREE.Geometry();

mesh1.updateMatrix(); mesh2.updateMatrix(); mesh3.updateMatrix(); mesh4.updateMatrix(); mesh5.updateMatrix(); mesh6.updateMatrix(); mesh7.updateMatrix(); mesh8.updateMatrix(); mesh9.updateMatrix(); 
mergedGeometries.merge(mesh1.geometry, mesh1.matrix);
mergedGeometries.merge(mesh2.geometry, mesh2.matrix);
mergedGeometries.merge(mesh3.geometry, mesh3.matrix);
mergedGeometries.merge(mesh4.geometry, mesh4.matrix);
mergedGeometries.merge(mesh5.geometry, mesh5.matrix);
mergedGeometries.merge(mesh6.geometry, mesh6.matrix);
mergedGeometries.merge(mesh7.geometry, mesh7.matrix);
mergedGeometries.merge(mesh8.geometry, mesh8.matrix);
mergedGeometries.merge(mesh9.geometry, mesh9.matrix);


var mergedGeometriesMesh = new THREE.Mesh(mergedGeometries, boxMaterial);
   
var rotatedGeometries = new THREE.Geometry();


var allmeshes = new THREE.Group();
var mat = new THREE.MeshBasicMaterial( {color: 0xffffef, side: THREE.DoubleSide} );

for (i = 0; i < 720; i+= 90) {
   var newClone = mergedGeometriesMesh.clone();
   newClone.position.x = 5 * Math.cos(i/ 1.57);
   newClone.position.z = 5 * Math.sin(i/ 1.57);
//   allmeshes.add(newClone);
  newClone.updateMatrix();
   rotatedGeometries.merge(newClone.geometry, newClone.matrix); 
   newClone.material = mat;
}

rotatedGeometries.merge(cylinder.geometry, cylinder.matrix);
var rotatedGeometriesMesh = new THREE.Mesh(rotatedGeometries, mat);
          
allmeshes.add(cylinder);
//scene.add(mergedGeometriesMesh);
//scene.add(rotatedGeometriesMesh);
allmeshes.position.z = -10;



//scene.add(allmeshes);             

