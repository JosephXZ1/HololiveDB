<script setup>
import { ref } from 'vue'

import personaje1 from '@/assets/Multimedia/Imagenes/Holomem/Kronii_OG.png'
import personaje2 from '@/assets/Multimedia/Imagenes/Holomem/Kronii_F.png'

const imagenes =
[
    personaje1,
    personaje2
]

const indice = ref(0)

function anterior()
{
    indice.value = (indice.value - 1 + imagenes.length) % imagenes.length
}

function siguiente()
{
    indice.value = (indice.value + 1) % imagenes.length
}
</script>

<template>
    <div class="carrusel flex">

        <button @click="anterior"><span class="material-symbols-outlined transition backward">play_arrow</span></button>

        <img
            :src="imagenes[indice]"
            alt="Personaje"
        />

        <button @click="siguiente"><span class="material-symbols-outlined transition">play_arrow</span></button>

    </div>
</template>

<style scoped>
.carrusel
{
    width: 100%;
    height: 100%;
}

.carrusel img
{
    width: 55%;
    height: 97%;
    object-fit: contain;
}

button {background: none;}

button span {font-size: 7rem;}

button:hover span {scale: 0.8;}

.backward {transform: rotate(180deg);}
</style>