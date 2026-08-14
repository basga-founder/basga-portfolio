<script setup>
import { onMounted, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
const loaded=ref(false), progress=ref(0), dark=ref(localStorage.getItem('theme') !== 'light'), route=useRoute()
const setTheme=()=>{document.documentElement.dataset.theme=dark.value?'dark':'light';localStorage.setItem('theme',dark.value?'dark':'light')}
const scroll=()=>progress.value=Math.min(100,Math.round(window.scrollY/(document.documentElement.scrollHeight-innerHeight)*100)||0)
onMounted(()=>{setTheme();scroll();window.addEventListener('scroll',scroll,{passive:true});setTimeout(()=>loaded.value=true,400)})
</script>
<template><div class="loader" :class="{done:loaded}"><span>MBG</span></div><div class="progress" v-if="route.path!=='/admin'" :style="{width:progress+'%'}"/><Navbar v-if="route.path!=='/admin'" :dark="dark" @toggle-theme="dark=!dark;setTheme()"/><RouterView/><Footer v-if="route.path!=='/admin'"/><button class="back-top" v-if="route.path!=='/admin'" v-show="progress>8" @click="scrollTo({top:0,behavior:'smooth'})" aria-label="Kembali ke atas"><i class="fa-solid fa-arrow-up"/></button></template>
