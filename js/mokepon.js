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
const imphipodo=document.getElementById('hipodo') 
const impcapi=document.getElementById('capi') 
const imprat=document.getElementById('rat') 
const spnmascotapl=document.getElementById('nommacotapl')
const imgPl=document.getElementById('imgCombatiente')//agrgar imagem al dom
// variables de la funcion selectMascotaPc
const spnmascotapc = document.getElementById('nommacotapc')
const imgpc=document.getElementById('imgCombatientePc')//agrgar imagem al dom
//variables de la fincion combate()
const spanVidaJugador =document.getElementById('vidapl')
const spanVidaPc =document.getElementById('vidapc')

// variables de la funcion crearMensaje(resultado)
const seccionevent = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataques-jugador')
const ataquesEnemigo = document.getElementById('ataques-enemigo')
//pirmeros conceptos de array
    //primeros objetos de la clase Mokepon
let mokepones = []

let ataqueJugador
let ataqAleatorio
let vidasJugador =3
let vidaspc =3

class Mokepon{
    //objetos instancia
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodo= new Mokepon('Hipodo','./images/hipodo.png',5)

let capi= new Mokepon('Capi','./images/capi.png',5)

let rat= new Mokepon('Rat','./images/rat.png',5)

hipodo.ataques.push(
    //objetos literarios
    {nombre: '🌊',id:'btnagua'},
    {nombre: '🌊',id:'btnagua'},
    {nombre: '🌊',id:'btnagua'},
    {nombre: '🌎',id:'btntierra'},
    {nombre: '🔥',id:'btnfuego'},
)

capi.ataques.push(
    //objetos literarios
    {nombre: '🌎',id:'btntierra'},
    {nombre: '🌎',id:'btntierra'},
    {nombre: '🌎',id:'btntierra'},
    {nombre: '🌊',id:'btnagua'},
    {nombre: '🔥',id:'btnfuego'},
)

rat.ataques.push(
    //objetos literarios
    {nombre: '🔥',id:'btnfuego'},
    {nombre: '🔥',id:'btnfuego'},
    {nombre: '🔥',id:'btnfuego'},
    {nombre: '🌊',id:'btnagua'},
    {nombre: '🌎',id:'btntierra'},
)

//mokepones.push(hipodo,capi,rat)



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
    imgPl.style.width='80px'
    
    if (imphipodo.checked){
        // alert('Seleccionaste a Hipodo')
        spnmascotapl.innerHTML='Hipodo'
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src='./images/hipodo.png'

    }else if (impcapi.checked){
        //alert('Seleccionaste a Capi')
        spnmascotapl.innerHTML='Capi'
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src='./images/capi.png'
        
    }else if (imprat.checked){
        //alert('Seleccionaste a rat')
        spnmascotapl.innerHTML='Rat'
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src='./images/rat.png'
    }else {
        alert('Debes seleccionar una mascota 😅')
        location.reload()
    }
    selctMascotaPc()
}

function selctMascotaPc(){
    let selectAleatorio = aleatorio(1,3)
    //agregar imagen mokepon al apartado de resumen del
    imgpc.style.width='80px'
    
    if(selectAleatorio == 1) {
        spnmascotapc.innerHTML='Hipodo'
        //agregar imagen mokepon al apartado de resumen del
        imgpc.src='./images/hipodo.png'
    }else if(selectAleatorio == 2) {
        spnmascotapc.innerHTML='capi'
        //agregar imagen mokepon al apartado de resumen del
        imgpc.src='./images/capi.png'
    } else if(selectAleatorio == 3){
        spnmascotapc.innerHTML='Rat'
        //agregar imagen mokepon al apartado de resumen del
        imgpc.src='./images/rat.png'
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
