<script setup>

import navBar from '@/components/navBar.vue'
import carouselModal from '@/components/carouselModal.vue'
import infoModal from '@/components/infoModal.vue'
import {ref} from 'vue';

// El estado que controla si el modal se ve o no
const mostrarModal = ref(false);

</script>

<template>
    <section class="main flex">
        <nav class="menu flex flexColumn">
            <navBar>
            </navBar>
        </nav>

        <section class="talents">

            <!-- El DIV común transformado en botón -->
            <div class="modalBtn" @click="mostrarModal = true" role="button" tabindex="0">
                <img src="../assets/Multimedia/Imagenes/HolomemsBtn/Kronii2.png" alt="">
                <div class="modalBtnHover flex transition">
                    <h3>Ouro Kronii</h3>
                </div>
            </div>

            <div class="modalBtn" @click="mostrarModal = true" role="button" tabindex="0">
                Haz clic aquí para abrir el modal
            </div>

            <div class="modalBtn" @click="mostrarModal = true" role="button" tabindex="0">
                Haz clic aquí para abrir el modal
            </div>

            <div class="modalBtn" @click="mostrarModal = true" role="button" tabindex="0">
                Haz clic aquí para abrir el modal
            </div>

            <div class="modalBtn" @click="mostrarModal = true" role="button" tabindex="0">
                Haz clic aquí para abrir el modal
            </div>


            <!-- El Contenedor del Modal -->
            <div v-if="mostrarModal" class="modalBg">
                <div class="modalContainer flex">
                    <div class="imgCarousel">
                        <carouselModal>
                        </carouselModal>
                    </div>
                    <div class="info">
                        <infoModal @close="mostrarModal = false">
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
    background-color: #6879c7;
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