<script setup>
</script>

<template>
    <details class="flex flexColumn transition">
        <summary class="flex">
            <span class="material-symbols-outlined transition">play_arrow</span> <img src="../assets/Multimedia/Imagenes/logo_Jp.png" alt="">
        </summary>
        <div class="options flex flexColumn transition">
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
        <div class="options flex flexColumn transition">
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
        <div class="options flex flexColumn transition">
            <button class="transition">Area-15</button>
            <button class="transition">Holoro</button>
            <button class="transition lastBtn">Holoholo</button>
        </div>
    </details>
    <details class="flex flexColumn transition">
        <summary class="flex">
            <span class="material-symbols-outlined transition">play_arrow</span> <img src="../assets/Multimedia/Imagenes/logo_DevIs.png" alt="">
        </summary>
        <div class="options flex flexColumn transition">
            <button class="transition">ReGloss</button>
            <button class="transition lastBtn">FlowGlow</button>
        </div>
    </details>
</template>

<style scoped>
/* Contenedor general del details */
details
{
    width: 90%;
    height: fit-content;
    margin-bottom: 10px;
    align-items: stretch;
    border: 2.5px solid #CFD0DF;
    border-radius: 30px;
}

details:hover, details[open] {border-color: #A3A4C0;}

details[open] .options
{
    display: flex;
    opacity: 1;
    transform: translateY(0);
}

@starting-style
{
    details[open] .options
    {
        opacity: 0;
        transform: translateY(-10px);
    }
}

/* El summary (lo que abre el details pues) */
details summary img {width: 9vw;}

details summary
{
    height: 9vh;
    padding-left: 7px;
    justify-content: start;
    cursor: pointer;
}

details[open] summary > span {transform: rotate(90deg);} /* Animación de rotación del triangulo */

/* El contenedor de los botones y los botones */
.options
{
    width: 100%;
    display: none;
    row-gap: 10px;
    opacity: 0;
    transform: translateY(-10px);
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
    border-radius: 10px;
}

button:hover {background-color: #CFD0DF;}

.lastBtn {margin-bottom: 14px;}
</style>