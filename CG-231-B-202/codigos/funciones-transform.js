/**
 * Geometria: Crea un objeto 
 * Entradas: vx
 * Salidas: 
 */
function Geometria(vx){
    geomet = new THREE.Geometry();
    for (let i = 0; i < vx.length; ++i) {
        x = vx[i][0];
        y = vx[i][1];
        z = vx[i][2];
        vector = new THREE.Vector3(x, y, z);
        geomet.vertices.push(vector);
    }
    return geomet;
}

/**
 * Traslacion: Matriz Trasación
 * Entradas: vt
 * Salida: Matriz
 */
function Traslation(vt) {
var matriz = new THREE.Matrix4();
matriz.set( 1, 0, 0, vt[0],
            0, 1, 0, vt[1],
            0, 0, 1, vt[2],
            0, 0, 0, 1);
return matriz;
}

/**
 * Traslacion: Matriz Trasación
 * Entradas: vt
 * Salida: matriz
 */
function escalado(vs) {
    var matriz = new THREE.Matrix4();
    matriz.set( vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);
    return matriz;
    }
/**
 * Escalado real:
 * Entrada: objetoa escalar
 * Salida: obj escalado
 */
function EscaladoReal(obj,vp,vs){
    vt=[-vp[0],-vp[1],-vp[2]];
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(escalado(vs));
    obj.applyMatrix(Traslation(vp));
}

/**
 * Rotacion x: Matriz rotación x
 * Entradas: angulo
 * Salida: Matriz que se rota
 */
function rotacionX(ang) {
    var beta = ang;
    var cosx = Math.cos(beta);
    var sinx = Math.sin(beta);
    var matriz = new THREE.Matrix4();
    matriz.set( 1, 0, 0, 0,
                0, cosx, -sinx, 0,
                0, sinx, cosx, 0,
                0, 0, 0, 1);
    return matriz;
    }

    /**
 * Rotacion y: Matriz rotación y
 * Entradas: Angulo
 * Salida: Matriz que se rota
 */
function rotacionY(ang) {
    var beta = ang;
    var cos = Math.cos(beta);
    var sin = Math.sin(beta);
    var matriz = new THREE.Matrix4();
    matriz.set( cos, 0,sin, 0,
                0, 1, 0, 0,
                -sin, 0, cos, 0,
                0, 0, 0, 1);
    return matriz;
    }

    /**
 * Rotacion z: Matriz rotación z
 * Entradas: Angulo
 * Salida: Matriz que se rota
 */
function rotacionZ(ang) {
    var beta = ang;
    var cos = Math.cos(beta);
    var sin = Math.sin(beta);
    var matriz = new THREE.Matrix4();
    matriz.set( cos, -sin, 0, 0,
                sin, cos, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 1);
    return matriz;
    }
/**
 * Rotacion real:
 * Entrada: Objeto a ser rotado
 * Salida: Objeto rotado
 */
function rotacionRealx(obj,vp,ang){
    vt=[-vp[0],-vp[1],-vp[2]];
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(rotacionX(ang));
    obj.applyMatrix(Traslation(vp));
}
/**
 * Rotacion real:
 *  Entrada: Objeto a ser rotado
 *  Salida: Objeto rotado
 */
function rotacionRealy(obj,vp,ang){
    vt=[-vp[0],-vp[1],-vp[2]];
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(rotacionY(ang)); 
    obj.applyMatrix(Traslation(vp));
}
/**
 * Rotacion real:
 *  Entrada: Objeto a ser rotado
 * Salida: Objeto rotado
 */
function rotacionRealz(obj,vp,ang){
    vt=[-vp[0],-vp[1],-vp[2]];
    obj.applyMatrix(Traslation(vt)); 
    obj.applyMatrix(rotacionZ(ang));
    obj.applyMatrix(Traslation(vp));
}