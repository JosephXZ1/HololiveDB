<script setup>
/* - - - LOGICA Y ARMADO DE ARREGLO DE CARRUSEL - - - */
import { ref, computed } from 'vue'

//Cuando se usa y manipula el JSON/API en script, se debe encapsular en una variable por permisos, si es template, se deja sueto en defineProps simple, si se lee, manipula o juega con los objetos en JS/script (como en este caso con el carrusel) se debe encapsular en una variable
const propiedades = defineProps(
{
    talento:
    {
        type: Object,
        default: null
    }
}
);

//Se crea arreglo dinámico con computed, osea, no se puede hacer un arreglo sencillo como antes dado a que se va a estar cambiando e intercambiando entre talentos una y otra vez, por tanto, se necesita limpiar e insertar otras imagenes (si se hiciera un arreglo común y se seleccionara a Kronii, aunque se cierre el modal y se abra otro talento, siempre se mostrará a Kronii)
const imagenes = computed(() =>
{
    //Si no hay talento (está en null por X/Y razon), se devuelve un arreglo vacío para evitar errores o colapsos
    if (!propiedades.talento) return [];
    
    //Aquí esta el arreglo buscado, si hay algun talento se extraen las rutas del JSON
    //Nota: no se puede usar notacion allman, debe ser K&R
    return[
        propiedades.talento.Modal.Outfit1,
        propiedades.talento.Modal.Outfit2
    ];
});


/* - - - FUNCIONES DEL CARRUSEL - - - */
//Posicion en la que se inicia el carrusel (por defecto, se inicia en la imagen 1 del arreglo)
const posicion = ref(0);

//Funciones para boton anterior-siguiente
//Nota: Como imagenes ahora es un 'computed', se usará .value para acceder a su longitud
function siguiente()
{
    if (imagenes.value.length > 0) //'Si el arreglo de imagenes tiene pues, imagenes...'
    {
        //'Entonces al hacer click, cambia de posicion a la siguiente'
        //Mas claro: Posicion = 0+1 = 1 -> 1/2 = 1, posicion ahora sera 1 (siguiente Outfit/Imagen)
        posicion.value = (posicion.value + 1) % imagenes.value.length;
    }
}

function anterior()
{
    if (imagenes.value.length > 0)
    {
        posicion.value = (posicion.value - 1 + imagenes.value.length) % imagenes.value.length;
    }
}
</script>

<template>
    <div v-if="talento" class="carrusel flex">

        <button @click="anterior"><span class="material-symbols-outlined transition backward">play_arrow</span></button>

        <img
            :src="imagenes[posicion]"
            :alt="`Outfit de ${talento.Nombre}`"
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