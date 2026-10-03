<script setup>
// Definimos los eventos que este componente puede emitir hacia el padre
const emit = defineEmits(['close']);

const cerrarDesdeComponente = () =>
{
  emit('close'); // Emitimos el evento 'close'
}
</script>

<template>
    <div class="info_Container">
        <div class="name-close flex">
            <h3>Ouro Kronii</h3>
            <button class="transition" @click="cerrarDesdeComponente">✖</button>
        </div>
        <h4>オーロ・クロニー</h4>
        <h5>"Kroniichiwa~"</h5>

        <div class="dataGrid">
            <div class="dataGrid_cell flex bgImg"><span>14 de Marzo</span></div>
            <div class="dataGrid_cell flex bgImg"><span>23 de agosto de 2021</span></div>
            <div class="dataGrid_cell flex bgImg"><span>1.68 Mts</span></div>
            <div class="dataGrid_cell flex bgImg"><span>Kronies</span></div>
        </div>
    </div>
</template>

<style scoped>
/* Contenedor maestro (el de todo) */
.info_Container
{
    width: 100%;
    height: 100%;
    color: #272D34;
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

.dataGrid
{
    margin: 1rem 0;
    width: 60%;
    height: 35%;
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
    padding: 1rem;
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


</style>