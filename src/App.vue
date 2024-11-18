<script>
import HeaderEfreiTir from './components/HeaderEfreiTir.vue';
import FooterEfreiTir from './components/FooterEfreiTir.vue';

export default {
  name: 'App',
  components: {
    HeaderEfreiTir,
    FooterEfreiTir
  }
}
</script>

<template>
  <div id="app">
    <HeaderEfreiTir />
    <router-view />
    <FooterEfreiTir />
  </div>
</template>

<style>
html {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

html::-webkit-scrollbar {
    display: none;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vh;
    margin: 0;
    padding: 0;
    background-color: white;
}

section {
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 5vh;
    text-align: justify;
}

h1 {
    font-size: 6vh;
    padding-left: 3vw;
}

@media only screen and (max-width:480px) {
    h1 {
        padding-left: 0;
    }
}

h3 {
    font-size: 4vh;
    padding-left: 5vw;
    margin-top: 5.5vh;
}
</style>
