<script setup>
//Esto de aquí importa router para que se pueda usar el <RouterCiew />
import { useRoute } from 'vue-router';
//import Header from '@/components/header.vue'

//Con esto se puede ver en qué página está el usuario metido
const route = useRoute(); 
</script>

<template>
<ul class="background">
    <li>
        <svg viewBox="0 0 100 100" class="triangle">
            <polygon
                points="50,5 95,90 5,90"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linejoin="round"
                strole-linecap="round"
            />
        </svg>
    </li>

    <li>
        <svg viewBox="0 0 100 100" class="triangle">
            <polygon
                points="50,5 95,90 5,90"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linejoin="round"
            />
        </svg>
    </li>

    <li>
        <svg viewBox="0 0 100 100" class="triangle">
            <polygon
                points="50,5 95,90 5,90"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linejoin="round"
            />
        </svg>
    </li>

    <li>
        <svg viewBox="0 0 100 100" class="triangle">
            <polygon
                points="50,5 95,90 5,90"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linejoin="round"
            />
        </svg>
    </li>

    <li>
        <svg viewBox="0 0 100 100" class="triangle">
            <polygon
                points="50,5 95,90 5,90"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linejoin="round"
            />
        </svg>
    </li>

    <li>
        <svg viewBox="0 0 100 100" class="triangle">
            <polygon
                points="50,5 95,90 5,90"
                fill="none"
                stroke="currentColor"
                stroke-width="5"
                stroke-linejoin="round"
            />
        </svg>
    </li>
</ul>

  <Header v-if="!route.meta.ocultarHeader" /> 
  
  <!-- Desbloquear o quitar comentario una vez que el proyecto se termine -->
  <!-- <RouterView /> -->
  
  <RouterView />
</template>