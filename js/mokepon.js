//Variables de la funcion iniciarJuego()
const contenedorTarjetas=document.getElementById('contenedorTarjetas')
const contenedorAtaques= document.getElementById('contenedor-ataques')
const sectionAtaques=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('reiniciar')
const btnsSelectMascotaPl = document.getElementById('btnselectmascota')
const btnReiniciar =document.getElementById('btnreiniciar')
const tituEligeAtaque = document.getElementById('tituEligeAtaque')
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

const seccionVerMapa =document.getElementById('ver-mapa')
const mapa =document.getElementById('mapa')
const seccionModoDeJuego =document.getElementById('modo-Juego')
const btnModoHistoria = document.getElementById('btnModeHistoria')
const btnModoCombateRapido = document.getElementById('btnModeCombateRapido')
//pirmeros conceptos de array
    //primeros objetos de la clase Mokepon
let jugadorId = null
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
let mascotaDeJugadorObjeto
let ataquesMascotaJugador
let ataquesMokeponEnemigo
let opcionDeAtaques
let btnFuego 
let btnAgua 
let btnTierra
let btnViento
let btnTrueno
let btnVeneno
let tipoJugador
let tipoEnemigo
let botones =[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let selectAleatorio
let victoriasJugador=0
let victoriasEnemigo=0
let vidasJugador =3
let vidaspc =3
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './images/mokemap.png' 
let alturaBuscamos
let anchoDeMapa = window.innerWidth - 20
const anchoMaxMapa = 600

if (anchoDeMapa > anchoMaxMapa ) {
    anchoDeMapa = anchoMaxMapa - 20
}

alturaBuscamos = anchoDeMapa * 600 / 800
mapa.width = anchoDeMapa
mapa.height = alturaBuscamos
class Mokepon{
    //objetos instancia
    constructor(nombre,foto,vida,tipo,fotoMapa,x=10,y=10){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.tipo = tipo
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio (0,mapa.width - this.ancho)
        this.y = aleatorio (0,mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        this.bounceDirection=1
        this.bounceInterval=8
        this.bounceCount = 0

    }
    pintarMokepon(bounce=false){
        if ( ! bounce) {
            lienzo.drawImage(
                this.mapaFoto,
                this.x,
                this.y,
                this.ancho, 
                this.alto
            )
            return 
        }
        if (Math.abs(this.bounceCount)==this.bounceInterval && this.bounceDirection==1) {
            this.ancho=this.ancho+this.bounceCount 
            this.alto= this.alto+this.bounceCount 
            this.bounceDirection = -1
            this.bounceCount = 0
        }
        else if (Math.abs(this.bounceCount)==this.bounceInterval && this.bounceDirection==-1) {
            this.ancho= this.ancho-this.bounceCount
            this.alto= this.alto-this.bounceCount
            this.bounceDirection = 1
            this.bounceCount = 0
            
        }
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho + (this.bounceCount * this.bounceDirection), 
            this.alto + (this.bounceCount * this.bounceDirection)

        )
        this.bounceCount++
    }
}

let hipodo= new Mokepon('Hipodo','./images/hipodo.png',5,'🌊','./images/hipodomapa.png')

let capi= new Mokepon('Capi','./images/capi.png',5,'🌎','./images/capimapa.png')

let rat= new Mokepon('Rat','./images/rat.png',5,'🔥','./images/ratmapa.png')

let pichon=new Mokepon('Pichon','./images/pichon.png',5,'🌊','./images/pichonmapa.png')

let pika= new Mokepon('Pika','./images/pika.png',5,'🌎','./images/pikamapa.png')

let snake= new Mokepon('Snake','./images/serpentina.png',5,'🔥','./images/serpentinamapa.png')

let hipodoEnemigo= new Mokepon('Hipodo','./images/hipodo.png',5,'🌊','./images/hipodomapa.png',)

let capiEnemigo= new Mokepon('Capi','./images/capi.png',5,'🌎','./images/capimapa.png',)

let ratEnemigo= new Mokepon('Rat','./images/rat.png',5,'🔥','./images/ratmapa.png',)

let pichonEnemigo=new Mokepon('Pichon','./images/pichon.png',5,'🌊','./images/pichonmapa.png',)

let pikaEnemigo= new Mokepon('Pika','./images/pika.png',5,'🌎','./images/pikamapa.png')

let snakeEnemigo= new Mokepon('Snake','./images/serpentina.png',5,'🔥','./images/serpentinamapa.png',)

//lista ataques - tipos
    //🌊 AGUA
    //🌎 TIERRA
    //🔥 FUEGO

hipodo.ataques.push(
    //objetos literarios
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🔥',id:'btnfuego' },
)

capi.ataques.push(
    //objetos literarios
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🔥',id:'btnfuego' },
)

rat.ataques.push(
    //objetos literarios
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
)
// ASIGNAR ORDEN DE ATAQUES A POKES NUEVOS
pichon.ataques.push(
    //objetos literarios
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌎',id:'btntierra' },
)

pika.ataques.push(
    //objetos literarios
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌎',id:'btntierra' },
)

snake.ataques.push(
    //objetos literarios
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🔥',id:'btnfuego' },
)
hipodoEnemigo.ataques.push(
    //objetos literarios
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🔥',id:'btnfuego' },
)

capiEnemigo.ataques.push(
    //objetos literarios
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🔥',id:'btnfuego' },
)

ratEnemigo.ataques.push(
    //objetos literarios
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
)
// ASIGNAR ORDEN DE ATAQUES A POKES NUEVOS
pichonEnemigo.ataques.push(
    //objetos literarios
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌎',id:'btntierra' },
)

pikaEnemigo.ataques.push(
    //objetos literarios
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌎',id:'btntierra' },
)

snakeEnemigo.ataques.push(
    //objetos literarios
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🌊',id:'btnagua' },
    {nombre: '🌎',id:'btntierra' },
    {nombre: '🔥',id:'btnfuego' },
    {nombre: '🔥',id:'btnfuego' },
)

mokepones.push(hipodo, capi, rat,pichon, pika, snake)


function iniciarjuego(){
    
    sectionMascota.style.display='flex'
    sectionAtaques.style.display ='none'
    sectionReiniciar.style.display ='none'
    seccionVerMapa.style.display='none'
    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input id=${Mokepon.nombre} type="radio" name="mascota"  />
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>

        <P> ${Mokepon.nombre}
            Tipo: ${Mokepon.tipo}
        </P>
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

//al comentar la linea corregi que no se ejecutara la funcion de ataque aleatorio al inicar juego ya que traia mensaje con campo indefinido
   // ataqueAleatorioPc()
    btnReiniciar.addEventListener('click',reiniciarJuego)
    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res){
            //console.log(res)
            if(res.ok){
                res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId=respuesta
                })
            }
        })
}

function selctMascotaPl(){
    
    
    sectionMascota.style.display ='none'
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

   
    seleccionarMokepon(ataquesMascotaJugador)
    seccionVerMapa.style.display='flex'
    iniciarMapa()
    selectAleatorio = aleatorio(0, mokepones.length -1)
    tipoEnemigo =mokepones.tipo
    extraerAtaques(ataquesMascotaJugador)
    //selctMascotaPc()
    //sectionAtaques.style.display ='flex'
}

function seleccionarMokepon(ataquesMascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: ataquesMascotaJugador 
        })
    })
}

function extraerTipo(){
    if (tipoJugador == '🔥' && tipoEnemigo == '🌎'){
        ataques.push(tipoJugador)
    }else if(tipoJugador == '🌊' && tipoEnemigo == '🔥'){
        ataques.push(tipoJugador)
    } else if(tipoJugador == '🌱' && tipoEnemigo == '🌊'){
        ataques.push(tipoJugador)
    }else{
        ataques.push(tipoEnemigo)
    }
}


function extraerAtaques(ataquesMascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (ataquesMascotaJugador === mokepones[i].nombre) {
            tipoJugador = mokepones[i].tipo

            if (tipoJugador == '🔥' && tipoEnemigo == '🌎') {
                mokepones[i].ataques.push(mokepones[i].ataques[0])
            }else if (tipoJugador == '🌊' && tipoEnemigo == '🔥'){
                mokepones[i].ataques.push(mokepones[i].ataques[0])
            }else if (tipoJugador == '🌎' && tipoEnemigo == '🌊'){
                mokepones[i].ataques.push(mokepones[i].ataques[0])
            }else if(tipoJugador === tipoEnemigo ){
                
            }
            else{
                mokepones[selectAleatorio].ataques.push(mokepones[selectAleatorio].ataques[0])
            }
            ataques = mokepones[i].ataques
        }
    }
    //console.log(tipoJugador)
    //console.log(ataques)
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
            }else{
                ataqueJugador.push('TIERRA')
                //console.log(ataqueJugador)
                boton.style.background='#112f58'
                boton.disabled = true
            }
            
            ataqueAleatorioPc()
            
        })
        
    })
}

//function selctMascotaPc(){
//    //agregar imagen mokepon al apartado de resumen del
//    imgpc.style.width='80px'
//
//    spnmascotapc.innerHTML= mokepones[selectAleatorio].nombre
//    imgpc.src=mokepones[selectAleatorio].foto
//    ataquesMokeponEnemigo = mokepones[selectAleatorio].ataques
//    secuenciaAtaque()
//    
//
//}
function selctMascotaPc(enemigo){
    //agregar imagen mokepon al apartado de resumen del
    imgpc.style.width='80px'
//
    spnmascotapc.innerHTML= enemigo.nombre
    imgpc.src=enemigo.foto
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
    
//
}



// function ataqueAleatorioPc(){
//     let ataqAleatoriopc= aleatorio(0,ataquesMokeponEnemigo.length -1)
    
//     if (ataquesMokeponEnemigo[ataqAleatoriopc].nombre ==='🔥') {
//         ataqAleatorio.push('FUEGO')
//     }else if (ataquesMokeponEnemigo[ataqAleatoriopc].nombre ==='🌊'){
//         ataqAleatorio.push('AGUA')
//     }else{
//         ataqAleatorio.push('TIERRA')
//     }
//     ataquesMokeponEnemigo.splice(ataqAleatoriopc,1)
//     console.log(ataqAleatorio)
//     iniciarPelea()
// }
function ataqueAleatorioPc() {
    console.log('Ataques enemigo', ataquesMokeponEnemigo);
    let ataqAleatoriopc = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqAleatoriopc == 0 || ataqAleatoriopc ==1) {
        ataqAleatorio.push('FUEGO')
    } else if (ataqAleatoriopc == 3 || ataqAleatoriopc == 4) {
        ataqAleatorio.push('AGUA')
    } else {
        ataqAleatorio.push('TIERRA')
    }
    console.log(ataqAleatorio)
    iniciarPelea()
}

function iniciarPelea() {
    if(ataqueJugador.length === 5){
        
        combate()
    }
    
}

function indexAmbosOponentes(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqAleatorio[enemigo]
}//Continuo obteniendo 

function combate(){
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqAleatorio[index]){
            indexAmbosOponentes(index,index)
            
        }else if((ataqueJugador[index] === 'FUEGO' && ataqAleatorio[index] === 'TIERRA') || (ataqueJugador[index] === 'AGUA' && ataqAleatorio[index] === 'FUEGO') ||(ataqueJugador[index] === 'TIERRA' && ataqAleatorio[index] === 'AGUA')){
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
    contenedorAtaques.style.display='none'
    sectionReiniciar.style.display='block'
    tituEligeAtaque.innerHTML="¡RESULTADO!"
    
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

function pintarCanvas(){
    
    mascotaDeJugadorObjeto.x = mascotaDeJugadorObjeto.x + mascotaDeJugadorObjeto.velocidadX
    mascotaDeJugadorObjeto.y = mascotaDeJugadorObjeto.y + mascotaDeJugadorObjeto.velocidadY

    lienzo.clearRect(0,0,mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaDeJugadorObjeto.pintarMokepon(true)
    hipodoEnemigo.pintarMokepon()
    capiEnemigo.pintarMokepon()
    ratEnemigo.pintarMokepon()
    pichonEnemigo.pintarMokepon()
    pikaEnemigo.pintarMokepon()
    snakeEnemigo.pintarMokepon()

    if (mascotaDeJugadorObjeto.velocidadX !== 0 || mascotaDeJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodoEnemigo)
        revisarColision(capiEnemigo)
        revisarColision(ratEnemigo)
        revisarColision(pichonEnemigo)
        revisarColision(pikaEnemigo)
        revisarColision(snakeEnemigo)
    }
}




function moverDerecha(){
    mascotaDeJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaDeJugadorObjeto.velocidadX = -5
}

function moverArriba(){
    mascotaDeJugadorObjeto.velocidadY =-5
}

function moverAbajo(){
    mascotaDeJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){
    mascotaDeJugadorObjeto.velocidadX = 0
    mascotaDeJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp': case 'w': case 'W':
            moverArriba()
            break
        case 'ArrowDown': case 's': case 'S':
            moverAbajo()
            break
        case 'ArrowLeft': case 'a': case 'A':
            moverIzquierda()
            break
        case 'ArrowRight': case 'd': case 'D':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){

    mascotaDeJugadorObjeto=obtenerObjetoMascota(ataquesMascotaJugador)
    console.log(mascotaDeJugadorObjeto, ataquesMascotaJugador);
    intervalo =setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (ataquesMascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho  
    const izquierdaEnemigo= enemigo.x

    const arribaMascota = mascotaDeJugadorObjeto.y
    const abajoMascota = mascotaDeJugadorObjeto.y + mascotaDeJugadorObjeto.alto
    const derechaMascota = mascotaDeJugadorObjeto.x + mascotaDeJugadorObjeto.ancho  
    const izquierdaMascota= mascotaDeJugadorObjeto.x
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
        ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    //alert("Hay colision con "+ enemigo.nombre)
    console.log('se detecto colision')
    sectionAtaques.style.display ='flex'
    seccionVerMapa.style.display = 'none'
    selctMascotaPc(enemigo)
}

window.addEventListener('load',iniciarjuego)
