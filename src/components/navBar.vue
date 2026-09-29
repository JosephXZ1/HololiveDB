<script setup>

</script>

<template>
    <details class="flex flexColumn">
        <summary class="flex flexColumn">
            <img src="../assets/Multimedia/Imagenes/logo_Jp.png"" alt="">
        </summary>
        <div class="options flex flexColumn">
            <button>Gen 0</button>
            <button>Gen 1</button>
            <button>Gen 2</button>
            <button>GAMERS</button>
            <button>Gen 3</button>
            <button>Gen 4</button>
            <button>Gen 5</button>
            <button>HoloX</button>
        </div>
        
    </details>
</template>

<style scoped>
details
{
    width: 100%;
    height: fit-content;

    border: 3.5px solid #a3a4c0;
    border-radius: 30px;
}

details summary img
{
    width: 10vw;
}

details summary
{
    width: 100%;
    height: 9vh;

    cursor: pointer;
}

.options
{
    width: 100%;
}

button
{
    width: 100%;
}
</style>