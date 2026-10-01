<script setup>

import navBar from '@/components/navBar.vue'

</script>

<template>
    <section class="main flex">
        <nav class="menu flex flexColumn">
            <navBar>
            </navBar>
        </nav>
        <div class="talents">
            <label class="container-Toggle">
                <input type="checkbox" checked>
                <span class="toggle"></span>
            </label>
        </div>
    </section>
</template>

<style scoped>
.main
{
    width: 100%;
    height: 82vh;
    padding: 0 2rem;
    position: relative;
    top: 15vh;
}

.menu
{
    width: 20vw;
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

.talents
{
    width: 80vw;
    height: 100%;
    padding: 1.3rem;
    border: 3.5px solid #A3A4C0;
    border-radius: 30px;
}




/* El contenedor maestro (Osea, el que contiene todo) */
.container-Toggle
{
    position: relative;
    display: inline-block;
    width: 83px;
    height: 47px;
}
.container-Toggle input
{ 
    opacity: 0;
    width: 0;
    height: 0;
}

/* El contenedor toggle (el que se anima y se mueve) */
.toggle
{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #183357;
    border: 2px solid #28C4FF;
    border-radius: 34px;
    -webkit-transition: .4s;
    transition: .4s;
}
/* El círculo que se mueve (El que indica si esta activado o no pues) */
.toggle:before
{
    position: absolute;
    content: "";
    height: 36px;
    width: 36px;
    left: 40px;
    bottom: 4px;
    background-color: #CFD0DF;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
}

/* Lo que pasa cuando se hace click (se mueve y cambia de color) */
input:checked + .toggle
{
    background-color: #FBFBFD;
    border-color: #35629C;
}
input:checked + .toggle:before
{
    -webkit-transform: translateX(36px);
    -ms-transform: translateX(36px);
    transform: translateX(-36px);    
    background-color: #EEDD68;
}

/* 
Opcional: Sombra para el elemento
input:focus + .toggle {box-shadow: 0 0 1px #2196F3;}
*/
</style>