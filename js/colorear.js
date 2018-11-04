function buscarFiguras(){
    for(var i in cuadraditos){
        var c = cuadraditos[i];
        var x = c.posX;
        var y = c.posY;
        if(!c.pintado){
            ////NAVES
            //nave abajo derecha
            if(cuadraditos[(x+-1)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+3)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+0)+"|"+(y+3)] && cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+2)+"|"+(y+3)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)]){
                cuadraditos[(x+-1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";

                cuadraditos[(x+-1)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
            }else if(cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+2)] && cuadraditos[(x+2)+"|"+(y+0)] && cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+-1)] && cuadraditos[(x+2)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-2)] && !cuadraditos[(x+3)+"|"+(y+-2)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)]){
                cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";

                cuadraditos[(x+1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+-1)].pintado = true;
            }else if(cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+0)] && cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+2)] && cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+-1)]){
                cuadraditos[(x+2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";

                cuadraditos[(x+2)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
            }else if(cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+0)] && cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+3)]){
                cuadraditos[(x+2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";

                cuadraditos[(x+2)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+2)].pintado = true;
            }else
            //nave abajo izquierda
            if(cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+0)] && !cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+3)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)]){
                cuadraditos[(x+-1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+-1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+2)].pintado = true;

            }else if(cuadraditos[(x+-1)+"|"+(y+1)] && cuadraditos[(x+-2)+"|"+(y+0)] && cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+0)] && !cuadraditos[(x+-3)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+3)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+-3)+"|"+(y+-1)] && !cuadraditos[(x+-2)+"|"+(y+-1)]){
                cuadraditos[(x+-1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+-1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;

            }else if(cuadraditos[(x+-1)+"|"+(y+1)] && cuadraditos[(x+-2)+"|"+(y+0)] && cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+0)] && !cuadraditos[(x+-3)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+2)] && !cuadraditos[(x+-3)+"|"+(y+-1)] && cuadraditos[(x+-2)+"|"+(y+-1)] && !cuadraditos[(x+-3)+"|"+(y+-2)] && !cuadraditos[(x+-2)+"|"+(y+-2)] && !cuadraditos[(x+-1)+"|"+(y+-2)]){
                cuadraditos[(x+-1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+-1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+-1)].pintado = true;

            }else if(cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+0)] && cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+0)] && !cuadraditos[(x+-3)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+3)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+3)]){
                cuadraditos[(x+-1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+-1)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+2)].pintado = true;
            }else
            //nave arriba derecha
            if(cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-2)] && !cuadraditos[(x+1)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-2)] && cuadraditos[(x+2)+"|"+(y+-1)] && cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+-2)] && !cuadraditos[(x+3)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+0)] && cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+3)+"|"+(y+2)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+1)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+-2)] && cuadraditos[(x+1)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-2)] && cuadraditos[(x+2)+"|"+(y+-1)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+-2)] && !cuadraditos[(x+3)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-3)] && !cuadraditos[(x+1)+"|"+(y+-3)] && !cuadraditos[(x+2)+"|"+(y+-3)] && !cuadraditos[(x+-1)+"|"+(y+-3)] && !cuadraditos[(x+-1)+"|"+(y+-2)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+-1)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+-2)] && cuadraditos[(x+1)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-1)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-3)] && !cuadraditos[(x+1)+"|"+(y+-3)] && !cuadraditos[(x+2)+"|"+(y+-3)] && !cuadraditos[(x+-1)+"|"+(y+-3)] && cuadraditos[(x+-1)+"|"+(y+-2)] && !cuadraditos[(x+-2)+"|"+(y+-3)] && !cuadraditos[(x+-2)+"|"+(y+-2)] && !cuadraditos[(x+-2)+"|"+(y+-1)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-2)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-2)] && cuadraditos[(x+1)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-2)] && cuadraditos[(x+2)+"|"+(y+-1)] && cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-3)] && !cuadraditos[(x+1)+"|"+(y+-3)] && !cuadraditos[(x+2)+"|"+(y+-3)] && !cuadraditos[(x+3)+"|"+(y+-2)] && !cuadraditos[(x+3)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+1)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+0)].pintado = true;
            }else
            //nave arriba izquierda
            if(cuadraditos[(x+0)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+-2)] && cuadraditos[(x+-2)+"|"+(y+-1)] && cuadraditos[(x+-2)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-2)] && !cuadraditos[(x+0)+"|"+(y+-2)] && !cuadraditos[(x+-3)+"|"+(y+-2)] && !cuadraditos[(x+-3)+"|"+(y+-1)] && !cuadraditos[(x+-3)+"|"+(y+0)] && !cuadraditos[(x+-3)+"|"+(y+1)] && cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+2)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+1)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+-2)] && cuadraditos[(x+-2)+"|"+(y+-1)] && !cuadraditos[(x+-2)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+-2)] && cuadraditos[(x+0)+"|"+(y+-2)] && !cuadraditos[(x+-3)+"|"+(y+-2)] && !cuadraditos[(x+-3)+"|"+(y+-1)] && !cuadraditos[(x+-3)+"|"+(y+0)] && !cuadraditos[(x+-2)+"|"+(y+-3)] && !cuadraditos[(x+-1)+"|"+(y+-3)] && !cuadraditos[(x+0)+"|"+(y+-3)] && !cuadraditos[(x+1)+"|"+(y+-3)] && !cuadraditos[(x+1)+"|"+(y+-2)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+-2)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+-2)] && !cuadraditos[(x+-2)+"|"+(y+-1)] && !cuadraditos[(x+-2)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+-2)] && cuadraditos[(x+0)+"|"+(y+-2)] && !cuadraditos[(x+-2)+"|"+(y+-3)] && !cuadraditos[(x+-1)+"|"+(y+-3)] && !cuadraditos[(x+0)+"|"+(y+-3)] && !cuadraditos[(x+1)+"|"+(y+-3)] && cuadraditos[(x+1)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-3)] && !cuadraditos[(x+2)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-1)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+0)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+-2)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+-2)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+-2)] && cuadraditos[(x+-2)+"|"+(y+-1)] && cuadraditos[(x+-2)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+-2)] && !cuadraditos[(x+0)+"|"+(y+-2)] && !cuadraditos[(x+-2)+"|"+(y+-3)] && !cuadraditos[(x+-1)+"|"+(y+-3)] && !cuadraditos[(x+0)+"|"+(y+-3)] && !cuadraditos[(x+-3)+"|"+(y+-2)] && !cuadraditos[(x+-3)+"|"+(y+-1)] && !cuadraditos[(x+-3)+"|"+(y+0)] && !cuadraditos[(x+-3)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+1)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
                cuadraditos[(x+-1)+"|"+(y+-2)].cuadradoDiv.style.background = "#DEC6EE";
                
                
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+-2)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+-1)+"|"+(y+-2)].pintado = true;
            }else
            //cuadrado de 2x2 	oo
            //				  	oo
            if(cuadraditos[(x+1)+"|"+(y)] && cuadraditos[(x)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+1)] &&
                !cuadraditos[(x-1)+"|"+(y)] && !cuadraditos[(x-1)+"|"+(y-1)] && !cuadraditos[(x)+"|"+(y-1)] &&
                !cuadraditos[(x+1)+"|"+(y-1)] && !cuadraditos[(x+2)+"|"+(y-1)] && !cuadraditos[(x+2)+"|"+(y)] &&
                !cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+2)] &&
                !cuadraditos[(x+1)+"|"+(y-1)] && !cuadraditos[(x)+"|"+(y+2)] && !cuadraditos[(x-1)+"|"+(y+2)] &&
                !cuadraditos[(x+1)+"|"+(y-1)] && !cuadraditos[(x-1)+"|"+(y+1)]){
                    
                    cuadraditos[(x)+"|"+(y)].cuadradoDiv.style.background = "#C10000";
                    cuadraditos[(x+1)+"|"+(y)].cuadradoDiv.style.background = "#C10000";
                    cuadraditos[(x)+"|"+(y+1)].cuadradoDiv.style.background = "#C10000";
                    cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#C10000";

                    cuadraditos[(x)+"|"+(y)].pintado = true;
                    cuadraditos[(x+1)+"|"+(y)].pintado = true;
                    cuadraditos[(x)+"|"+(y+1)].pintado = true;
                    cuadraditos[(x+1)+"|"+(y+1)].pintado = true;
                
            }else
            //linea de 3x1 o 1x3	ooo		o
            //								o
            //								o
            if(cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-1)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+-1)] && cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)]){
                cuadraditos[(x+1)+"|"+(y+0)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x+2)+"|"+(y+0)].cuadradoDiv.style.background = "#4E7454";
                
                
                cuadraditos[(x+1)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+2)+"|"+(y+0)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+3)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)]){
                cuadraditos[(x+0)+"|"+(y+1)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x+0)+"|"+(y+2)].cuadradoDiv.style.background = "#4E7454";
                
                
                cuadraditos[(x+0)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+2)].pintado = true;
            }else
            //	    oo
            //	o   o
            //	oo
            if(cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+-1)] && cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+0)]){
                cuadraditos[(x+0)+"|"+(y+-1)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+1)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                
                
                cuadraditos[(x+0)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+0)].pintado = true;
            }else if(cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-2)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && cuadraditos[(x+0)+"|"+(y+0)] && cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)]){
                cuadraditos[(x+-1)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+1)].cuadradoDiv.style.background = "#FFE796";
                
                
                cuadraditos[(x+-1)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+1)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+2)] && cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)]){
                cuadraditos[(x+0)+"|"+(y+1)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+1)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                
                
                cuadraditos[(x+0)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+1)+"|"+(y+0)].pintado = true;
            }else if(cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-2)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+-1)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-2)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)]){
                cuadraditos[(x+-1)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+-1)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                
                
                cuadraditos[(x+-1)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+-1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
            }else
            //o       o
            //  oo    o
            if(!cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)]){
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";

                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
            }else if(cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)]){
                cuadraditos[(x+1)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";

                cuadraditos[(x+1)+"|"+(y+0)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
            }else if(cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-1)]){
                cuadraditos[(x+0)+"|"+(y+1)].cuadradoDiv.style.background = "#FFE796";
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";

                cuadraditos[(x+0)+"|"+(y+1)].pintado = true;
                cuadraditos[(x+0)+"|"+(y+0)].pintado = true;
            //si no
            }else{
                cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = '#' + (function co(lor){   return (lor +=
                    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
                    && (lor.length == 6) ?  lor : co(lor); })('');
            }

            
        }   
    }

    for(var i in cuadraditos){
        cuadraditos[i].pintado = false;
    }
}