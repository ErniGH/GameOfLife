function buscarFiguras(){
    for(var i in cuadraditos){
        var c = cuadraditos[i];
        var x = c.posX;
        var y = c.posY;
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
            
        }
        //linea de 3x1 o 1x3	ooo		o
        //								o
        //								o
        if(cuadraditos[(x-1)+"|"+(y)] && cuadraditos[(x+1)+"|"+(y)] && !cuadraditos[(x-2)+"|"+(y)] &&
            !cuadraditos[(x-2)+"|"+(y-1)] && !cuadraditos[(x-1)+"|"+(y-1)] &&!cuadraditos[(x)+"|"+(y-1)] &&
            !cuadraditos[(x+1)+"|"+(y-1)] && !cuadraditos[(x+2)+"|"+(y-1)] && !cuadraditos[(x+2)+"|"+(y)] &&
            !cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x)+"|"+(y+1)] &&
            !cuadraditos[(x-1)+"|"+(y+1)] && !cuadraditos[(x-2)+"|"+(y+1)]){
                
                cuadraditos[(x)+"|"+(y)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x-1)+"|"+(y)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x+1)+"|"+(y)].cuadradoDiv.style.background = "#4E7454";
        }
        if(cuadraditos[(x)+"|"+(y-1)] && cuadraditos[(x)+"|"+(y+1)] &&
            !cuadraditos[(x-1)+"|"+(y)] && !cuadraditos[(x-1)+"|"+(y-1)] && !cuadraditos[(x)+"|"+(y-2)] &&
            !cuadraditos[(x+1)+"|"+(y-2)] && !cuadraditos[(x+1)+"|"+(y-1)] && !cuadraditos[(x+1)+"|"+(y)] &&
            !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y)] && !cuadraditos[(x+1)+"|"+(y+2)] && 
            !cuadraditos[(x)+"|"+(y+2)] && !cuadraditos[(x-1)+"|"+(y+2)] && !cuadraditos[(x-1)+"|"+(y+1)]){
            
                cuadraditos[(x)+"|"+(y-1)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x)+"|"+(y)].cuadradoDiv.style.background = "#4E7454";
                cuadraditos[(x)+"|"+(y+1)].cuadradoDiv.style.background = "#4E7454";
        
        }
        //  oo		 o
        // o  o		o o
        //	oo		o o
        //			 o
        if(!cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)]){
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
        }
        
        if(cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)]){
            cuadraditos[(x+1)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
        }
        
        if(cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-1)]){
            cuadraditos[(x+0)+"|"+(y+1)].cuadradoDiv.style.background = "#FFE796";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#FFE796";
        }
        
        
        
        //nave abajo derecha
        if(cuadraditos[(x+-1)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+2)] && !cuadraditos[(x+-2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+3)] && !cuadraditos[(x+0)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+0)+"|"+(y+3)] && cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+2)+"|"+(y+3)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-1)]){
            cuadraditos[(x+-1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+0)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
        }
        if(cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+2)] && cuadraditos[(x+2)+"|"+(y+0)] && cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+-1)] && cuadraditos[(x+2)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-2)] && !cuadraditos[(x+2)+"|"+(y+-2)] && !cuadraditos[(x+3)+"|"+(y+-2)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)]){
            cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+2)+"|"+(y+-1)].cuadradoDiv.style.background = "#DEC6EE";
        }
        if(cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+0)] && cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+2)] && cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+-1)] && !cuadraditos[(x+3)+"|"+(y+-1)]){
            cuadraditos[(x+2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+2)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
        }
        if(cuadraditos[(x+2)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+0)] && cuadraditos[(x+1)+"|"+(y+1)] && cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+2)+"|"+(y+0)] && !cuadraditos[(x+2)+"|"+(y+2)] && !cuadraditos[(x+3)+"|"+(y+0)] && !cuadraditos[(x+3)+"|"+(y+1)] && !cuadraditos[(x+3)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+-1)] && cuadraditos[(x+0)+"|"+(y+2)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+1)+"|"+(y+3)] && !cuadraditos[(x+2)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+2)] && !cuadraditos[(x+-1)+"|"+(y+3)]){
            cuadraditos[(x+2)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+1)+"|"+(y+1)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+1)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#DEC6EE";
            cuadraditos[(x+0)+"|"+(y+2)].cuadradoDiv.style.background = "#DEC6EE";
        }
        //	 oo
        //	o o
        //	oo
        if(cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+-1)] && !cuadraditos[(x+1)+"|"+(y+-2)] && cuadraditos[(x+0)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+-2)] && cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && cuadraditos[(x+-1)+"|"+(y+-2)] && !cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+-1)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+-2)+"|"+(y+0)] && cuadraditos[(x+-2)+"|"+(y+-1)] && !cuadraditos[(x+0)+"|"+(y+-3)] && !cuadraditos[(x+-1)+"|"+(y+-3)] && cuadraditos[(x+-2)+"|"+(y+-2)] && !cuadraditos[(x+-2)+"|"+(y+-3)] && !cuadraditos[(x+-3)+"|"+(y+-1)] && !cuadraditos[(x+-3)+"|"+(y+-2)] && !cuadraditos[(x+-3)+"|"+(y+-3)] && !cuadraditos[(x+-3)+"|"+(y+0)] && !cuadraditos[(x+1)+"|"+(y+1)]){
            cuadraditos[(x+0)+"|"+(y+-1)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-1)+"|"+(y+0)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-1)+"|"+(y+-2)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-2)+"|"+(y+-1)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-2)+"|"+(y+-2)].cuadradoDiv.style.background = "#CC5D5D";
        }
        if(cuadraditos[(x+0)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+2)] && !cuadraditos[(x+1)+"|"+(y+1)] && !cuadraditos[(x+1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+2)] && cuadraditos[(x+0)+"|"+(y+0)] && cuadraditos[(x+-1)+"|"+(y+2)] && cuadraditos[(x+-1)+"|"+(y+0)] && !cuadraditos[(x+0)+"|"+(y+3)] && !cuadraditos[(x+-1)+"|"+(y+3)] && !cuadraditos[(x+-2)+"|"+(y+3)] && cuadraditos[(x+-2)+"|"+(y+2)] && cuadraditos[(x+-2)+"|"+(y+1)] && !cuadraditos[(x+0)+"|"+(y+-1)] && !cuadraditos[(x+-1)+"|"+(y+-1)] && !cuadraditos[(x+-2)+"|"+(y+0)] && !cuadraditos[(x+-2)+"|"+(y+-1)] && !cuadraditos[(x+-3)+"|"+(y+2)] && !cuadraditos[(x+-3)+"|"+(y+1)] && !cuadraditos[(x+-3)+"|"+(y+0)]){
            cuadraditos[(x+0)+"|"+(y+1)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+0)+"|"+(y+0)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-1)+"|"+(y+2)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-1)+"|"+(y+0)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-2)+"|"+(y+2)].cuadradoDiv.style.background = "#CC5D5D";
            cuadraditos[(x+-2)+"|"+(y+1)].cuadradoDiv.style.background = "#CC5D5D";
        }
        
    }
}