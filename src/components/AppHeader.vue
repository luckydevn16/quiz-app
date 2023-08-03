<template>
    <header class="header flex center just-center">
        <!-- <img src="../assets/img/svg/logo.svg" alt="Logotype" class="header-logo-img"> -->
        <h2>
            Quiz App
        </h2>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
/*==== HEADER ================*/
.header {
    width: 90%;
    max-width: 1280px;
    margin: 1rem auto 0;
    background: #fff;
    border-radius: 8px;
    padding: 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.header-logo-img {
    width: 6.5rem;
    height: auto;
    display: block;
}
.header h2 {
    color: #333
}
</style>