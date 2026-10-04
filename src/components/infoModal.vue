<script setup>
// Definimos los eventos que este componente puede emitir hacia el padre
const emit = defineEmits(['close']);

const cerrarDesdeComponente = () =>
{
  emit('close'); // Emitimos el evento 'close'
}
</script>

<template>
    <div class="info_Container flexColumn">
        <div class="name-close flex">
            <h3>Ouro Kronii</h3>
            <button class="transition" @click="cerrarDesdeComponente">✖</button>
        </div>
        <h4>オーロ・クロニー</h4>
        <h5>"Kroniichiwa~"</h5>

        <div class="dataGrid">
            <div class="dataGrid_cell flex bgImg"><span>14 de Marzo</span></div>
            <div class="dataGrid_cell flex bgImg"><span>23 de Septiembre de 2021</span></div>
            <div class="dataGrid_cell flex bgImg"><span>1.68 Mts</span></div>
            <div class="dataGrid_cell flex bgImg"><span>Kronies</span></div>
        </div>

        <p>Guardiana del Tiempo elegante, guapa, poderosa, asombrosa aunque con crisis existenciales fugaces y narcisismo lindo (le licuaron su sandwich).</p>

        <div class="holomemSocial flex">
            <a href="https://www.youtube.com/@OuroKronii" class="flex transition" target="_blank" rel="noreferrer noopener"><img src="../assets/Multimedia/Imagenes/L-YT.png" alt=""> Ir a YouTube</a>
            <a href="https://x.com/ourokronii" class="flex transition" target="_blank" rel="noreferrer noopener"><img src="../assets/Multimedia/Imagenes/L-Twit.png" alt=""> Ir a Twitter</a>
        </div>
    </div>
</template>

<style scoped>
/* Contenedor maestro (el de todo) */
.info_Container
{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    color: #272D34;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

/* Estilos de titulos (Los nombres de la Holomem) */
.name-close h3,
.info_Container h4
{
    font-family: 'Yuruka', sans-serif;
}

.name-close h3 {font-size: 2.7rem;}
.info_Container h4 {font-size: 2rem;}

/* Contenedor para separar el nombre del talento y el boton de cerrar */
.name-close
{
    width: 100%;
    height: 4rem;
    

    justify-content: space-between;
    overflow: hidden;
}

/* Boton de cerrado de modal */
.name-close button
{
    margin-right: 1rem;
    width: 10%;
    height: 100%;
    background-color: #F35050;
    color: #FBFBFD;
    font-size: 3rem;
    font-weight: bold;
    line-height: 1px;
    border-radius: 14px;
}

.name-close button:hover {background-color: #dc4848;}

h5
{
    font-size: 2rem;
    font-weight: 400;
}


/* Grid de datos */
.dataGrid
{
    margin: 10px 0;
    width: 60%;
    height: 30%;
    color: #FBFBFD;
    font-size: 1.7rem;
    font-weight: 600;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;


    overflow: hidden;

    border-radius: 10px;
}

.dataGrid_cell
{
    width: 100%;
    height: 100%;
    padding: 10px;
    text-align: center;

    position: relative;
    
    background-position: center 1rem;
    background-size: 75%;

    z-index: 30;
}

.dataGrid_cell:nth-child(1) {background-image: url('../assets/Multimedia/Imagenes/emoji-cake.png');}
.dataGrid_cell:nth-child(2)
{
    font-size: 1.3rem;
    background-image: url('../assets/Multimedia/Imagenes/emoji-calendar.png');
}
.dataGrid_cell:nth-child(3) {background-image: url('../assets/Multimedia/Imagenes/emoji-Rule.png');}
.dataGrid_cell:nth-child(4) {background-image: url('../assets/Multimedia/Imagenes/emoji-people.png');}

.dataGrid_cell::before
{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000061;

    z-index: 31;
}

.dataGrid_cell span
{
    position: relative;
    z-index: 32;
}

/* Texto descriptivo */
p
{
    font-size: clamp(1rem,1.45vw,1.4rem);
    font-weight: 450;
    display: block;
    padding-right: 1rem;
}

/* Botones de redes sociales */
.holomemSocial
{
    width: 100%;
    height: 15%;
    margin-top: auto;
    gap: 1rem;
    justify-content: start;
}

.holomemSocial a
{
    width: 45%;
    height: 100%;
    padding: 1rem;
    gap: 1rem;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 1rem;
}

.holomemSocial a img {height: 85%;}

.holomemSocial a:first-child {background-color: #f60100;}
.holomemSocial a:last-child {background-color: #2d2d2d;}

.holomemSocial a:hover {filter: brightness(0.85);}
</style>