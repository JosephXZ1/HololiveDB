<script setup>

//IMPORTACIONES
import navBar from '@/components/navBar.vue'
import carouselModal from '@/components/carouselModal.vue'
import infoModal from '@/components/infoModal.vue'
import { almacenTalentos } from '@/stores/talents';
import {ref, onMounted} from 'vue';


//CARGA DE TALENTOS Y USO DE ESTOS (LOS DATOS Y DEMAS DEL JSON)
//Se trae almacenTalentos en la variable Talentos (osea, se crea una variables que tenga todos los talentos y no hacer un fetch manual otra vez)
const Talentos = almacenTalentos()

//Monta y trae ya todo
onMounted(async () => await Talentos.cargarDirectorio())

//ESTADOS DEL MODAL
// El estado que controla si el modal se ve o no (al recargar pagina, no se debe ver)
const mostrarModal = ref(false);

//Estado de los datos del modal (osea, dice si hay informacion del JSON para usarse en el modal, por defecto no hay nada porque no se muestra un modal, por tanto es null)
const talentoSelect = ref(null)

//Esta funcion es la que cambia las dos variables anteriores, al hacer click (abrirModalConTalento(talento)) se activa esta funcion y cambia el estado para que se active el modal
function abrirModalConTalento(talento)
{
    //Cambia el valor de mostrar modal true para que pues, se muestre el modal
    mostrarModal.value = true;    
    //Cambia el estado de datos a los del talento, haciendo que haya información y no este vacío
    talentoSelect.value = talento;
}
</script>

<template>
    <section class="main flex">
        <!-- ÁREA DE NAVEGACIÓN -->
        <nav class="menu flex flexColumn">
            <navBar>
            </navBar>
        </nav>

        <!-- SECCION DE LOS TALENTOS (LOS BOTONES) -->
        <section class="talents">

            <!-- El DIV común transformado en botón -->
            <!-- El @click activa ahora la funcion de abrirModalConTalento para que se muestre -->
            <div 
                v-for="talento in Talentos.listaMaestra" 
                :key="talento.Id"
                class="modalBtn" 
                :style="{backgroundColor: `var(--bgColor-${talento.Id})`}"
                @click="abrirModalConTalento(talento)"
                role="button" 
                tabindex="0"
            >
                <img :src="talento.Modal.Boton" :alt="talento.Nombre">
                <div class="modalBtnHover flex transition">
                    <h3>{{ talento.Nombre }}</h3>
                </div>
            </div>

            <!-- El Contenedor del Modal -->
            <div v-if="mostrarModal" class="modalBg">
                <div class="modalContainer flex">
                    <div class="imgCarousel">
                        <carouselModal>
                        </carouselModal>
                    </div>
                    <div class="info">
                        <infoModal :talento="talentoSelect" @cerrar="mostrarModal = false">
                        </infoModal>
                    </div>
                </div>
            </div>

        </section>
    </section>
</template>

<style scoped>
/* ========================= CONTENEDOR COMPLETO (Donde esta todo) ========================= */
.main
{
    width: 95%;
    height: 82vh;
    margin: auto;
    position: relative;
    top: 15vh;
}

/* ========================= PARTE IZQUIERDA: MENU DE NAVEGACION ========================= */
.menu
{
    width: 22%;
    height: 100%;
    padding: 1.5rem 0;
    justify-content: start;
    /* Bloquear selección/subrayado del usuario */
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* Evitar el desbordamiento para hacer scroll y ocultar la barra de scroll */
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.menu::-webkit-scrollbar {display: none;}

/* ========================= PARTE DERECHA: ÁREA DE TALENTOS ========================= */
.talents
{
    width: 70%;
    height: 100%;
    padding: 1.3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-auto-rows: 23vh;
    gap: 1.3rem;
    border: 3.5px solid #A3A4C0;
    border-radius: 30px;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}


/* ========================= FICHAS DE HOLOMEMS ========================= */
/* Boton del modal */
.modalBtn
{
    position: relative;
    display: inline-block;
    border-radius: 1rem;
    /* background-color: #6879c7; */
    user-select: none;
}

.modalBtnHover
{
    position: absolute;
    padding: 1rem 3rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    color: transparent;
    background-color: transparent;
    border-radius: 1rem;
    cursor: pointer;
}

.modalBtn:hover .modalBtnHover
{
    background-color: #00000077;
    color: #FBFBFD;
}

.modalBtn img
{
    height: 100%;
    margin: auto;
    display: block;
}

/* Fondo del modal (capa de obscuresencia) */
.modalBg
{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #00000052;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Contenedor del modal */
.modalContainer
{
    background: #FBFBFD;
    padding: 20px 0;
    width: 80%;
    height: 87%;
    border: 5px solid #8586A4;
    border-radius: 2rem;
}

/* Mitad izquierda: Carrusel de imagenes */
.modalContainer .imgCarousel
{
    width: 45%;
    height: 100%;
}

/* Mitad derecha: Información */
.modalContainer .info
{
    width: 55%;
    height: 100%;
}
</style>