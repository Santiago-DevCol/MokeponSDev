//Variables de la funcion iniciarJuego()
const contenedorTarjetas=document.getElementById('contenedorTarjetas')
const contenedorAtaques= document.getElementById('contenedor-ataques')
const sectionAtaques=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('reiniciar')
const btnsSelectMascotaPl = document.getElementById('btnselectmascota')
const btnReiniciar =document.getElementById('btnreiniciar')

// variables de la funcion seleccionar mascotaPl()
const sectionMascota=document.getElementById('seleccionar-mascota')
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
let ataqueJugador = []
let ataqAleatorio = []
let opcionDeMokepones
let imphipodo
let impcapi
let imprat
let imppichon
let imppika
let impsnake
let mokeponFoto
let ataquesMascotaJugador
let ataquesMokeponEnemigo
let opcionDeAtaques
let btnFuego 
let btnAgua 
let btnTierra
let btnViento
let btnTrueno
let btnVeneno
let botones =[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
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

let pichon=new Mokepon('Pichon','./images/pichon.png',5)

let pika= new Mokepon('Pika','./images/pika.png',5) 

let snake= new Mokepon('Snake','./images/serpentina.png',5)   

//lista ataques - tipos
    //🌊 AGUA
    //🌎 TIERRA
    //🔥 FUEGO
    //💨 VIENTO
    //⚡ TRUENO
    //🤢 VENENO

hipodo.ataques.push(
    //objetos literarios
    {nombre: '🌊',id:'btnagua', titulo:'AGUA'},
    {nombre: '🌊',id:'btnagua', titulo:'AGUA'},
    {nombre: '🌊',id:'btnagua', titulo:'AGUA'},
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
)

capi.ataques.push(
    //objetos literarios
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
    {nombre: '🌊',id:'btnagua', titulo:'AGUA'},
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
)

rat.ataques.push(
    //objetos literarios
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
    {nombre: '🌊',id:'btnagua', titulo:'AGUA'},
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
)

pichon.ataques.push(
    //objetos literarios
    {nombre: '💨',id:'btnviento', titulo:'VIENTO'},
    {nombre: '💨',id:'btnviento', titulo:'VIENTO'},
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
    {nombre: '🌊',id:'btnagua', titulo:'AGUA'},
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
)

pika.ataques.push(
    //objetos literarios
    {nombre: '⚡',id:'btntrueno', titulo:'TRUENO'},
    {nombre: '⚡',id:'btntrueno', titulo:'TRUENO'},
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
    {nombre: '🌊',id:'btnagua', titulo:'AGUA'},
    {nombre: '💨',id:'btnviento', titulo:'VIENTO'},
)

snake.ataques.push(
    //objetos literarios
    {nombre: '🤢',id:'btnveneno', titulo:'VENENO'},
    {nombre: '🤢',id:'btnveneno', titulo:'VENENO'},
    {nombre: '🔥',id:'btnfuego', titulo:'FUEGO'},
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
    {nombre: '🌎',id:'btntierra', titulo:'TIERRA'},
)

mokepones.push(hipodo, capi, rat,pichon, pika, snake)


function iniciarjuego(){
    sectionAtaques.style.display ='none'
    sectionReiniciar.style.display ='none'
    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input id=${Mokepon.nombre} type="radio" name="mascota"  />
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
            <P>${Mokepon.nombre}</P>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        imphipodo=document.getElementById('Hipodo') 
        impcapi=document.getElementById('Capi')
        imprat=document.getElementById('Rat') 
        imppichon=document.getElementById('Pichon')
        imppika=document.getElementById('Pika')
        impsnake=document.getElementById('Snake')
    })

    btnsSelectMascotaPl.addEventListener('click', selctMascotaPl)

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
        spnmascotapl.innerHTML=imphipodo.id
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src= obtenerFoto(imphipodo.id)
        ataquesMascotaJugador=imphipodo.id

    }else if (impcapi.checked){
        //alert('Seleccionaste a Capi')
        spnmascotapl.innerHTML=impcapi.id
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src= obtenerFoto(impcapi.id)
        ataquesMascotaJugador = impcapi.id
    }else if (imprat.checked){
        //alert('Seleccionaste a rat')
        spnmascotapl.innerHTML=imprat.id
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src= obtenerFoto(imprat.id)
        ataquesMascotaJugador = imprat.id
    }else if (imppichon.checked){
        //alert('Seleccionaste a rat')
        spnmascotapl.innerHTML=imppichon.id
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src= obtenerFoto(imppichon.id)
        ataquesMascotaJugador = imppichon.id
    }else if (imppika.checked){
        //alert('Seleccionaste a rat')
        spnmascotapl.innerHTML=imppika.id
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src= obtenerFoto(imppika.id)
        ataquesMascotaJugador = imppika.id
    }else if (impsnake.checked){
        //alert('Seleccionaste a rat')
        spnmascotapl.innerHTML=impsnake.id
        //agregar imagen mokepon al apartado de resumen del
        imgPl.src= obtenerFoto(impsnake.id)
        ataquesMascotaJugador = impsnake.id
    }else {
        swal.fire({
            title:"Debes seleccionar una mascota 😅",
            icon:'warning',
            confirmButtonText:'Ups! 😬',
            backdrop:true,
            allowOutsideClick:false,
            allowEscapeKey:false,
            allowEnterKey:true,
            stopKeydownPropagation:false,
            confirmButtonColor:'#3AB4F2'
        }).then(function(){
            location.reload()
        })   
    }

    extraerAtaques(ataquesMascotaJugador)
    selctMascotaPc()
}

function extraerAtaques(ataquesMascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (ataquesMascotaJugador === mokepones[i].nombre) {
            ataques =  mokepones[i].ataques
        }
    }
        mostrarAtaques(ataques)
}

function obtenerFoto(nombreMokepon){
    
    mokepones.forEach((Mokepon) =>{
        if(Mokepon.nombre == nombreMokepon){
            mokeponFoto = Mokepon.foto
        }
    })
    return mokeponFoto
}


function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        opcionDeAtaques = `
        <button class="boton-ataque BAtaque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionDeAtaques
    })

    btnFuego =document.getElementById('btnfuego')
    btnAgua =document.getElementById('btnagua')
    btnTierra =document.getElementById('btntierra')
    btnViento =document.getElementById('btnviento')
    btnTrueno =document.getElementById('btntrueno')
    btnVeneno =document.getElementById('btnveneno')
    botones=document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled = true
            }else if (e.target.textContent === '🌊'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled = true
            }else if (e.target.textContent === '🌎') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled = true
            }else if (e.target.textContent ==='💨') {
                ataqueJugador.push('VIENTO')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled = true
            }else if (e.target.textContent === '⚡'){
                ataqueJugador.push('TRUENO')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled = true
            }else {
                ataqueJugador.push('VENENO')
                console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled = true
            }
            
            ataqueAleatorioPc()
            
        })
        
    })
}

function selctMascotaPc(){
    let selectAleatorio = aleatorio(0, mokepones.length -1)
    //agregar imagen mokepon al apartado de resumen del
    imgpc.style.width='80px'

    spnmascotapc.innerHTML= mokepones[selectAleatorio].nombre
    imgpc.src=mokepones[selectAleatorio].foto
    ataquesMokeponEnemigo = mokepones[selectAleatorio].ataques
    secuenciaAtaque()
    

}



function ataqueAleatorioPc(){
    let ataqAleatoriopc= aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    ataqAleatorio.push(ataquesMokeponEnemigo[ataqAleatoriopc].titulo)
    console.log(ataqAleatorio)
    iniciarPelea()
}

function iniciarPelea() {
    if(ataqueJugador.length === 1){
        combate()
    }
    ataqAleatorio
}

function indexAmbosOponentes(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqAleatorio[enemigo]
}//Continuo obteniendo 

function combate(){
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqAleatorio[index]){
            indexAmbosOponentes(index,index)
            
        }else if((ataqueJugador[index] === 'FUEGO' && ataqAleatorio[index] === 'TIERRA') || (ataqueJugador[index] === 'VIENTO' && ataqAleatorio[index] === 'FUEGO') || (ataqueJugador[index] === 'TRUENO' && ataqAleatorio[index] === 'AGUA') ){
            indexAmbosOponentes(index,index)
            
            victoriasJugador++
            spanVidaJugador.innerHTML=victoriasJugador
        }else if((ataqueJugador[index] === 'AGUA' && ataqAleatorio[index] === 'FUEGO') || (ataqueJugador[index] === 'AGUA' && ataqAleatorio[index] === 'VENENO')){
            indexAmbosOponentes(index,index)
            
            victoriasJugador++
            spanVidaJugador.innerHTML=victoriasJugador
        }else if((ataqueJugador[index] === 'TIERRA' && ataqAleatorio[index] === 'AGUA') || (ataqueJugador[index] === 'TIERRA' && ataqAleatorio[index] === 'TRUENO')){
            indexAmbosOponentes(index,index)
            
            victoriasJugador++
            spanVidaJugador.innerHTML=victoriasJugador
        }
            
        
        
        else{
            indexAmbosOponentes(index,index)
            
            victoriasEnemigo++
            spanVidaPc.innerHTML=victoriasEnemigo
        }
        validarVictorias()
    }
    
    
}

function validarVictorias (){

    if (victoriasJugador === victoriasEnemigo){
        crearMensaje("empate 🤦")
        crearMensajeFinal("Esto fue un empate!!" )
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensaje("Ganaste! 🎉")
        crearMensajeFinal("Felicidades Ganasete tu combate" )
    }else{
        crearMensaje("Perdiste 😱")
        crearMensajeFinal("Lastima, deja que se recupere tu mascota")
    }
}


function crearMensaje(resultado){

    
    let nuevoAtaqueJugador= document.createElement('p')
    let nuevoAtaqueEnemigo= document.createElement('p')

    seccionevent.innerHTML=resultado
    nuevoAtaqueJugador.innerHTML=indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML=indexAtaqueEnemigo

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
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)+min) 
}

window.addEventListener('load',iniciarjuego)
