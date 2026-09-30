<script setup>

</script>

<template>
    <details class="flex flexColumn transition">
        <summary class="flex">
            <span class="material-symbols-outlined transition">play_arrow</span> <img src="../assets/Multimedia/Imagenes/logo_Jp.png" alt="">
        </summary>
        <div class="options flex flexColumn">
            <button class="transition">Gen 0</button>
            <button class="transition">Gen 1</button>
            <button class="transition">Gen 2</button>
            <button class="transition">GAMERS</button>
            <button class="transition">Gen 3</button>
            <button class="transition">Gen 4</button>
            <button class="transition">Gen 5</button>
            <button class="transition lastBtn">HoloX</button>
        </div>
    </details>
    <details class="flex flexColumn transition">
        <summary class="flex">
            <span class="material-symbols-outlined transition">play_arrow</span> <img src="../assets/Multimedia/Imagenes/logo_En.png" alt="">
        </summary>
        <div class="options flex flexColumn">
            <button class="transition">Myth</button>
            <button class="transition">Promise</button>
            <button class="transition">Advent</button>
            <button class="transition lastBtn">Justice</button>
        </div>
    </details>
    <details class="flex flexColumn transition">
        <summary class="flex">
            <span class="material-symbols-outlined transition">play_arrow</span> <img src="../assets/Multimedia/Imagenes/logo_Id.png" alt="">
        </summary>
        <div class="options flex flexColumn">
            <button class="transition">Area-15</button>
            <button class="transition">Holoro</button>
            <button class="transition lastBtn">Holoholo</button>
        </div>
    </details>
    <details class="flex flexColumn transition">
        <summary class="flex">
            <span class="material-symbols-outlined transition">play_arrow</span> <img src="../assets/Multimedia/Imagenes/logo_DevIs.png" alt="">
        </summary>
        <div class="options flex flexColumn">
            <button class="transition">ReGloss</button>
            <button class="transition lastBtn">FlowGlow</button>
        </div>
    </details>
</template>

<style scoped>
/* Contenedor general del details */
details
{
    width: 87%;
    height: fit-content;
    margin-bottom: 10px;
    align-items: stretch;
    border: 3.5px solid #CFD0DF;
    border-radius: 30px;
}

details:hover, details[open] {border-color: #A3A4C0;}

/* El summary (lo que abre el details pues) */
details summary img {width: 9vw;}

details summary
{
    height: 9vh;
    padding-left: 7px;
    justify-content: start;
    cursor: pointer;
}

details[open] summary > span  /* Animación de rotación del triangulo */
{
    transform: rotate(90deg);
}

/* El contenedor de los botones y los botones */
.options
{
    width: 100%;
    row-gap: 10px;
}

button
{
    width: 90%;
    padding: 7px;
    font-family: inherit;
    font-size: 1.7rem;
    font-weight: 400;
    color: #35629C;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {background-color: #CFD0DF;}

.lastBtn {margin-bottom: 14px;}


</style>