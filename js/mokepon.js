//Variables de la funcion iniciarJuego()
const sectionAtaques=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('reiniciar')
const btnsSelectMascotaPl = document.getElementById('btnselectmascota')
const btnFuego =document.getElementById('btnfuego')
const btnAgua =document.getElementById('btnagua')
const btnTierra =document.getElementById('btntierra')
const btnReiniciar =document.getElementById('btnreiniciar')

// variables de la funcion seleccionar mascotaPl()
const sectionMascota=document.getElementById('seleccionar-mascota')
//let sectionAtaques=document.getElementById('seleccionar-ataque')//repetida con el primer bloque de variables
const imphipodo=document.getElementById('hipodo') 
const impcapi=document.getElementById('capi') 
const imprat=document.getElementById('rat') 
const spnmascotapl=document.getElementById('nommacotapl')

// variables de la funcion selectMascotaPc
const spnmascotapc = document.getElementById('nommacotapc')

//variables de la fincion combate()
const spanVidaJugador =document.getElementById('vidapl')
const spanVidaPc =document.getElementById('vidapc')

// variables de la funcion crearMensaje(resultado)
const seccionevent = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataques-jugador')
const ataquesEnemigo = document.getElementById('ataques-enemigo')

// variables de la funcion crearMensajeFinal
    //let seccionevent = document.getElementById('resultado')
//let btnFuego =document.getElementById('btnfuego')
//let btnAgua =document.getElementById('btnagua')
//let btnTierra =document.getElementById('btntierra')
//let sectionReiniciar=document.getElementById('reiniciar')


let ataqueJugador
let ataqAleatorio
let vidasJugador =3
let vidaspc =3
//let resultadocomba
function iniciarjuego(){
    sectionAtaques.style.display ='none'
    sectionReiniciar.style.display='none'
    btnsSelectMascotaPl.addEventListener('click', selctMascotaPl)
    btnFuego.addEventListener('click', ataqueFuego)
    btnAgua.addEventListener('click', ataqueAgua)
    btnTierra.addEventListener('click', ataqueTierra)
//al comentar la linea 14 corregi que no se ejecutara la funcion de ataque aleatorio al inicar juego ya que traia mensaje con campo indefinido
   // ataqueAleatorioPc()
    btnReiniciar.addEventListener('click',reiniciarJuego)
}

function selctMascotaPl(){
    
    sectionMascota.style.display ='none'
    
    sectionAtaques.style.display ='flex'

    
    
    
    
    if (imphipodo.checked){
        // alert('Seleccionaste a Hipodo')
        spnmascotapl.innerHTML='Hipodo'

    }else if (impcapi.checked){
        //alert('Seleccionaste a Capi')
        spnmascotapl.innerHTML='Capi'
    }else if (imprat.checked){
        //alert('Seleccionaste a rat')
        spnmascotapl.innerHTML='Rat'
    }else {
        alert('Debes seleccionar una mascota 😅')
        location.reload()
    }
    selctMascotaPc()
}

function selctMascotaPc(){
    let selectAleatorio = aleatorio(1,3)
    
    if(selectAleatorio == 1) {
        spnmascotapc.innerHTML='Hipodo'
    }else if(selectAleatorio == 2) {
        spnmascotapc.innerHTML='capi'
    } else if(selectAleatorio == 3){
        spnmascotapc.innerHTML='Rat'
    }
}

function ataqueFuego(){
    ataqueJugador='FUEGO'
    ataqueAleatorioPc()
}
function ataqueAgua(){
    ataqueJugador='AGUA'
    ataqueAleatorioPc()
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioPc()
}

function ataqueAleatorioPc(){
    let ataqAleatoriopc= aleatorio(1,3)
    if(ataqAleatoriopc == 1) {
        ataqAleatorio ='FUEGO'
    }else if(ataqAleatoriopc == 2) {
        ataqAleatorio ='AGUA'
    } else{
        ataqAleatorio ='TIERRA'
    }
    combate()
}

function combate(){
    
    
    //combate
    if(ataqueJugador == ataqAleatorio){
        //alert("empate 🤦")
        //resultadocomba='empate 🤦'
        crearMensaje("empate 🤦")
    }else if((ataqueJugador == 'FUEGO' && ataqAleatorio == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqAleatorio == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqAleatorio == 'AGUA')){
        //alert("Ganaste! 🎉")
        //resultadocomba='Ganaste! 🎉'
        crearMensaje("Ganaste! 🎉")
        vidaspc--
        spanVidaPc.innerHTML=vidaspc
    }else{
        //alert("Perdiste 😱")
        //resultadocomba= 'Perdiste 😱'
        crearMensaje("Perdiste 😱")
        vidasJugador--
        spanVidaJugador.innerHTML=vidasJugador
    }
    //crearMensaje()
    validarVidas()
}

function validarVidas (){

    if (vidaspc == 0 ){
        crearMensajeFinal("Felicidades Ganasete tu combate" )
    }else if(vidasJugador == 0){
        crearMensajeFinal("Lastima, deja que se recupere tu mascota")
    }
}


function crearMensaje(resultado){

    
    let nuevoAtaqueJugador= document.createElement('p')
    let nuevoAtaqueEnemigo= document.createElement('p')

    seccionevent.innerHTML=resultado
    nuevoAtaqueJugador.innerHTML=ataqueJugador
    nuevoAtaqueEnemigo.innerHTML=ataqAleatorio

    //let parrafo= document.createElement('p')
    //parrafo.innerHTML= 'Tu mascota ataco con: ' + ataqueJugador +', La mascota del enemigo atacó con: ' + ataqAleatorio + ' - '+resultado

    
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)

}

//debo sacar la variables de esta función.
function crearMensajeFinal(resultadoFinal){
    
    sectionReiniciar.style.display='block'

    let parrafo= document.createElement('p')
    parrafo.innerHTML=resultadoFinal
    seccionevent.appendChild(parrafo)

    btnFuego.disabled = true
    btnAgua.disabled = true
    btnTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)+min) 
}

window.addEventListener('load',iniciarjuego)
