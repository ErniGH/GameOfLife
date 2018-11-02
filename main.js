function cId(x, y) {
    return x + "|" + y;
}
let estado = desdeEstado();
var cuadraditos = {};
var pausa = true;
var tamano = 10;

class Cuadrado{
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.id = cId(this.posX, this.posY);
        
        this.cuadradoDiv = document.createElement("div");
        
        this.cuadradoDiv.style.width= tamano+"px";
        this.cuadradoDiv.style.height= tamano+"px";
        
        this.cuadradoDiv.classList.add("cuadrado");
        this.cuadradoDiv.style.top=this.posY*tamano +"px";
        this.cuadradoDiv.style.left=this.posX*tamano +"px";
        
        document.body.appendChild(this.cuadradoDiv);
    }
    
    matar(){
        //console.log(this.cuadradoDiv, "muere");
        this.cuadradoDiv.remove();
        delete cuadraditos[this.id];
    }
}

class Compro{
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.id = cId(this.posX, this.posY);
        
        this.vecinos = 1;
    }

}

function click(event){
    var x = event.clientX-8;
    var y = event.clientY-8;
    
    x = Math.floor(x/10);
    y = Math.floor(y/10);
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    var id = cId(x, y);
    if(cuadraditos[id]){
        
        cuadraditos[id].matar();
        
    }else{
        cuadraditos[id] = new Cuadrado(x,y);
    }
    
    
}
function comprobar(){
    var listCompro = new Object();
    for(var i in cuadraditos){
        var c = cuadraditos[i];
        //El mismo
        var id = cId(c.posX, c.posY);
        if(!listCompro[id]){
            listCompro[id] = new Compro(c.posX, c.posY);
            listCompro[id].vecinos--;
        }
        var numeritos = [-1, 0, 1];
        for (const j in numeritos){
            a=numeritos[j];
            for (const k in numeritos){
                b=numeritos[k];
                if(a != 0 || b !=0){
                    if(listCompro[(c.posX+a)+"|"+(c.posY+b)]){
                        listCompro[(c.posX+a)+"|"+(c.posY+b)].vecinos++;
                    }else{
                        listCompro[(c.posX+a)+"|"+(c.posY+b)] = new Compro(c.posX+a, c.posY+b);
                    }
                }
            }
        }
    }

    for(var i in listCompro){
     var com = listCompro[i];
     
     if(com.vecinos == 3){
        if(!cuadraditos[com.id]){
            cuadraditos[com.id] = new Cuadrado(com.posX, com.posY);
        }
     }else if(com.vecinos<2 || com.vecinos>3){
        if(cuadraditos[com.id]){
            cuadraditos[com.id].matar();
        }
     }
     
    }
    buscarFiguras();
}



function mover() {
    if(!pausa){
        comprobar();
    }
}

function pausar(){
    if(pausa){
        movimiento = setInterval(mover,1000/60); //60fps	
        pausa = false;
    }else{
        clearInterval(movimiento);
        pausa = true;
    }
}
function compartir() {
    let cuadradosMinimos = [];
    for (let keyCuadrado in cuadraditos) {
        let cuadrado = cuadraditos[keyCuadrado];
        cuadradosMinimos.push({posX: cuadrado.posX, posY: cuadrado.posY});
    }
    let nuevaUrl = new URL(window.location);
    nuevaUrl.searchParams.set("estado", serializar(cuadradosMinimos));
    window.history.pushState(null, null, nuevaUrl.href);
}
function inicio() {
    document.addEventListener("click",click);
    alert("JUEGO DE LA VIDA: \n pulsa click para crear la celulas y P para iniciar o pausar");
    for (let i in estado) {
        let nuevoCuadrado = estado[i];
        cuadraditos[cId(nuevoCuadrado.posX, nuevoCuadrado.posY)] = new Cuadrado(nuevoCuadrado.posX, nuevoCuadrado.posY);
    }
    document.addEventListener('keydown', function(event) {
        if (event.code === 'KeyP') {
            pausar();
        } else if (event.code === 'KeyS') {
            //pone el estado actual en la url
            compartir();
        }else if (event.code == 'KeyN') {
            //siguiente paso
            comprobar();
        }
    });							
}

window.addEventListener("load", inicio, false);