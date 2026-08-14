<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/basga-logo.png'
const props=defineProps({dark:Boolean});defineEmits(['toggle-theme'])
const open=ref(false),scrolled=ref(false),active=ref('home')
const links=[['home','Home'],['about','About'],['skills','Skills'],['services','Services'],['projects','Projects'],['experience','Experience'],['contact','Contact']]
const listen=()=>{scrolled.value=scrollY>20;links.forEach(([id])=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<150&&el.getBoundingClientRect().bottom>150)active.value=id})}
onMounted(()=>addEventListener('scroll',listen,{passive:true}));onUnmounted(()=>removeEventListener('scroll',listen))
</script>
<template><header class="navbar" :class="{scrolled}"><a href="#home" class="brand brand-logo" @click="open=false"><img :src="logo" alt="BasGa Digital Creative & Technology"/></a><nav :class="{open}"><a v-for="[id,label] in links" :key="id" :class="{active:active===id}" :href="`#${id}`" @click="open=false">{{label}}</a></nav><div class="nav-actions"><button class="icon-button" @click="$emit('toggle-theme')" :aria-label="dark?'Gunakan tema terang':'Gunakan tema gelap'"><i :class="dark?'fa-solid fa-sun':'fa-solid fa-moon'"/></button><button class="menu" @click="open=!open" aria-label="Menu"><i :class="open?'fa-solid fa-xmark':'fa-solid fa-bars'"/></button></div></header></template>
