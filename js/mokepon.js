//Variables de la funcion iniciarJuego()
let sectionAtaques=document.getElementById('seleccionar-ataque')
let sectionReiniciar=document.getElementById('reiniciar')
let btnsSelectMascotaPl = document.getElementById('btnselectmascota')
let btnFuego =document.getElementById('btnfuego')
let btnAgua =document.getElementById('btnagua')
let btnTierra =document.getElementById('btntierra')
let btnReiniciar =document.getElementById('btnreiniciar')

// variables de la funcion seleccionar mascotaPl()
let sectionMascota=document.getElementById('seleccionar-mascota')
//let sectionAtaques=document.getElementById('seleccionar-ataque')//repetida con el primer bloque de variables
let imphipodo=document.getElementById('hipodo') 
let impcapi=document.getElementById('capi') 
let imprat=document.getElementById('rat') 
let spnmascotapl=document.getElementById('nommacotapl')

// variables de la funcion selectMascotaPc
let spnmascotapc = document.getElementById('nommacotapc')

//variables de la fincion combate()
let spanVidaJugador =document.getElementById('vidapl')
let spanVidaPc =document.getElementById('vidapc')

// variables de la funcion vrearMensaje(resultado)
let seccionevent = document.getElementById('resultado')
let ataquesJugador = document.getElementById('ataques-jugador')
let ataquesEnemigo = document.getElementById('ataques-enemigo')



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
    let sectionReiniciar=document.getElementById('reiniciar')
    sectionReiniciar.style.display='block'

    let seccionevent = document.getElementById('resultado')
    let parrafo= document.createElement('p')
    parrafo.innerHTML=resultadoFinal
    seccionevent.appendChild(parrafo)

    let btnFuego =document.getElementById('btnfuego')
    btnFuego.disabled = true
    let btnAgua =document.getElementById('btnagua')
    btnAgua.disabled = true
    let btnTierra =document.getElementById('btntierra')
    btnTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)+min) 
}

window.addEventListener('load',iniciarjuego)
