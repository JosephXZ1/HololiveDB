<script setup>
</script>

<template>

    <header class="flex">
        <h1>HololiveDB</h1>
        <div class="headerGadgets flex">
            <label class="container-Toggle">
                <input type="checkbox" checked>
                <span class="toggle"></span>
            </label>
            <span class="talentCounter flex">
                <p>No. de talentos: 87</p>
            </span>
        </div>
    </header>

</template>

<style scoped>
/* ========================= HEADER GENERAL ========================= */
header
{
    width: 100%;
    height: 12vh;
    padding: 0 3rem;
    justify-content: space-between;
    position: fixed;
    background-color: #28C4FF;
}

/* Texto (parte izquierda) */
h1
{
    font-family: 'Yuruka', sans-serif;
    font-size: 2.5rem;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Toggle switch y contador (parte derecha) */
.headerGadgets
{
    width: fit-content;
    height: 8.5vh;
    gap: 1.5rem;
}


/* ----- TOGGLE SWITCH ----- */
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


/* ----- CONTADOR ----- */
.talentCounter
{
    width: fit-content;
    height: 47px;
    padding: 0 2rem;
    background-color: #A3A4C0;
    border: 3.3px solid #8586A4;
    border-radius: 34px;
}

.talentCounter p
{
    font-size: 1.7rem;
    font-weight: 400;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>