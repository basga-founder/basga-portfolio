<script setup>import {profile} from '../data/portfolio';import logo from '../assets/basga-logo.png'</script>
<template><footer><a href="#home" class="brand brand-logo"><img :src="logo" alt="BasGa"/></a><p>© {{new Date().getFullYear()}} {{profile.name}}. Dibuat dengan niat baik.</p><a href="#home">Kembali ke atas <i class="fa-solid fa-arrow-up"/></a></footer></template>
