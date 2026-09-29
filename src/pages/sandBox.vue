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

        </div>
    </section>
</template>

<style scoped>
.main
{
    width: 100%;
    height: 100vh;
    padding: 2rem;
}

.menu
{
    width: 20vw;
    height: 100%;
    padding: 1.5rem 0;
    justify-content: start;

    border: 1px solid #000;
    color: #000;
}

.talents
{
    width: 80vw;
    height: 100%;
    background-color: aquamarine;
}
</style>