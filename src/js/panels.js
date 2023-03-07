import { ModeloPieza } from "./ModeloPieza"//Importamos ModeloPieza del JS de modeloPieza
import { models } from "./models.js"//Importamos Models del Js de Models

export const panel={ //creamos un objeto que sea una constante llamada panel y la exportamos
    matriz:[//creamos la propiedad panel.matriz con unos que sean los margenes y 0 que sean el panel de juego
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    nuevaPieza: "",
    pintapanel: ()=>{//creamos el metodo pinta panel con una arrow function
        let html=`` //creamos una variable let llamada html y abrimos comillas de acceento
        for(var y=1;y<panel.matriz.length-1;y++){//creamos un bucle for con una variable en la cual mientras y = 1; panel.matriz.lenght-1 ; y ++
            html+=`<div class="p-fila">`//implementamos dentro de la varaible html creada anteriormente lo siguiente
            for(var x=1; x<panel.matriz[y].length-1;x++){//creamos un bucle con una varaible en la cual mientras x= 1; panel.matriz[y].lenght-1; x++
                if(panel.matriz[y][x]===1){//en caso de que panel.matriz [y][x] sea extrictamente igual a 1 hará lo siguiente
                    //implementamos en la varaible html el div con la clase de la celda y lo pintamos de rojo
                    html+= ` 
                    <div class="celda bg-success"></div>
                    `
                }else{//en caso contrario no lo pintaremos
                    html+= `
                    <div class="celda"></div>                    `
                }
            }
            html+=`</div>`//ceramos el div
        }

        document.querySelector('#panel').innerHTML = html//metemos en el id panel la variable html creada
    },
    crearNuevaPieza: ()=>{ //creamos un metodo crearNuevaPieza

        panel.nuevaPieza = new ModeloPieza(1)//creamos un Onjeto de ModeloPieza escogiendo el valor 0 en este caso el palo
        let xRandom =  Math.ceil(Math.random()*(10-panel.nuevaPieza.long))//creamos una variable llamada xAleatorio, con Math.ceil hacemos que el numero quede redondeado, despues hacemos que cree un random del 10 restando la lomngitud de la pieza
        panel.nuevaPieza.x = xRandom//hacemos que panel.nuevaPieza de x sea igual a la variable creada anteriormente
        
    },
    insertarPieza: ()=>{//creamos un metodo insertarPieza

        var posicion = panel.nuevaPieza.x//hacemos una varaible posicion que sera la x de la nueva pieza
        var alt = panel.nuevaPieza.y//hacemos una varaible altura que sera la y de la nueva pieza

        for(let y=1;y<=panel.nuevaPieza.alt;y++,alt++){//creamos un bucle 
            for(let x=1;x<=panel.nuevaPieza.long;x++,posicion++){//creamos otro bucle dentro del bucle 
                panel.matriz[alt][posicion]=1
            }
            posicion = panel.nuevaPieza.x
        }
        

    },
    controlTeclas: () =>{//creamos el metodo controlTeclas
        document.addEventListener("keydown", function(event) {//capturamos el evento de bajar con la flecha
            if (event.key == "ArrowLeft"){//en caso de que llame a la flecha izquierda
                panel.moverIzq()//llamamos a la funcion moverIzq
            } else if (event.key == "ArrowUp"){ //en caso de que llame a la flecha de arriba
                
                panel.moverGi() //llamamos a la funcion de moverGi


            } else if (event.key == "ArrowRight"){//en caso de que llame a la flecha de derecha
                panel.moverDra()//llamamos a la funcion de moverDra
            } else if (event.key == "ArrowDown"){//en caso de que llame a la flecha de abajo
                panel.moverAba()//llamamos a la funcion de moverAba
            }
        });
    },
    borrarPieza: () =>{//creamos el metodo borrarPieza
        var posicion = panel.nuevaPieza.x //la variable posicion sera la x de la nueva pieza del panel
        var alt = panel.nuevaPieza.y//la variable altura sera la y de la nueva pieza del panel

        for(let y=1;y<=panel.nuevaPieza.alt;y++,alt++){//creamos un bucle que si y = 1 hacemos que la altura y la y se sumen 1
            for(let x=1;x<=panel.nuevaPieza.long;x++,posicion++){//creamos un bucle que si x = 1 hacemos que la longiud y la x se sumen 1
                panel.matriz[alt][posicion]=0//hacemos que la altura y la posicion sean 0
            }
            posicion = panel.nuevaPieza.x//posicion será igual a x
        }
    },
    moverDra: () =>{//metodo moverDra
        panel.borrarPieza()//lamamos al metodo borrarPieza
        if(panel.matriz[1][panel.nuevaPieza.x+panel.nuevaPieza.long]==0){//en caso de que de la matriz 1 la x + la longitud sean 0
            panel.nuevaPieza.x++//sumamos 1 a x
        }else{
            console.log("No puedes ir mas a la derecha crack")//en caso contrario mostrar por consola que no se puede mover a la derecha
        }
        panel.insertarPieza()//llamamos al metodo insertarPieza
        panel.pintapanel()//llamamos a pintapanel
    },
    moverIzq: () =>{
        panel.borrarPieza()//lamamos al metodo borrarPieza
        if(panel.matriz[1][panel.nuevaPieza.x-1]==0){//en caso de que la matriz 1 y la x del panel -1 sean igual a 0
            panel.nuevaPieza.x--//restamos 1 a x
        }else{
            console.log("No puedes ir mas a la izquierda crack")//en caso contrario mostrar por consola que no se puede mover a la izquierda
        }
        panel.insertarPieza()//llamamos al metodo insertarPieza
        panel.pintapanel()//llamamos a pintapanel
    },
    moverAba: () =>{//creamos metodo moverAba
        panel.borrarPieza()//lamamos al metodo borrarPieza
        if(panel.matriz[panel.nuevaPieza.y+panel.nuevaPieza.alt][panel.nuevaPieza.x]==0){//si  la suma de y + altura, y x son igual a 0
            panel.nuevaPieza.y++//sumamos 1 a la y
        }else{
            console.log("No puedes ir mas abajo crack")//en caso contrario mostrar por consola que no se puede mover mas hacia abajo
        }
        panel.insertarPieza()//llamamos al metodo insertarPieza
        panel.pintapanel()//llamamos a pintapanel      
         
    },
    moverGi: () =>{//creamos el metodo moverGi

        var girar = panel.comprobarGirar()//creamos una funcion comprobar girar que se guarde en una varaible girar
        console.log(girar)//mostramos por consola la varaible girar
        if (girar == false) {//en caso de que girar sea false
            panel.borrarPieza()//llamamos a borrar pieza
            panel.nuevaPieza.girar()//llamamos a girar de nuevaPieza
            panel.borrarPieza()//llammos a borrar pieza de nuevo
            panel.insertarPieza()//llamamos a insertar la pieza ya girada
            panel.pintapanel()//llamamos a pinta el panel
        }else{//en caso contrario
            console.log("No puedes girarlo crack")//mostamos por consola que no puede girar mas
        }


    },
    comprobarGirar: () =>{//creamos metodo comprobarGirar
    
        var puedeGirar = false;//creamos una varaible puedeGirar que sea false

        panel.borrarPieza();//llamamos a borrarPieza
        panel.nuevaPieza.girar();//lamamos a girar pieza
        console.log("1 " + panel.nuevaPieza.angulo)//mostramos por consola 1 + el angulo de la nuevaPieza
        for (let y = 0; y < panel.nuevaPieza.alt; y++) {//mientras y=0 ademas de y menor que la altura y+1
          for (let x = 0; x < panel.nuevaPieza.long; x++) {//mientras y=0 ademas de y menor que la altura x+1
            if (panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x] > 0) { //en caso de que y + nueva pieza de y, ademas de, x + nueva pieza de x sean mayor que 0
                puedeGirar = true;//podrá girar
            }
          }
        }
        panel.nuevaPieza.girar();//llamamos a girar
        panel.insertarPieza(panel.nuevaPieza);//llamamos a insertar pieza de nueva pieza
        return puedeGirar;//devolvemos la varaible puedeGirar
    },
    inicarMovimiento: () =>{//iniciamos el movimiento
         const myTimeout = setInterval(panel.moverAba, 1000);//creamos una constante con un setInterval de panel.moverAba de 3 segundos
        
    }

}