<script setup>
import { profile } from '../data/portfolio'</script>
<template>
    <section id="about" class="section about">
        <div class="section-title">
            <p class="eyebrow">01 — ABOUT ME</p>
            <h2>Teknologi yang terasa <em>manusiawi.</em></h2>
        </div>
        <div class="about-grid">
            <div class="about-image">
                <img :src="profile.image" alt="Foto profil"/>
                <div class="experience-tag"><b>6+</b><span>Tahun<br/>Berkarya</span>
                </div>
            </div>
        <div class="about-copy">
            <p class="lead">{{profile.about}}</p>
            <p>Saya menggabungkan ketelitian seorang developer dengan empati seorang pendidik untuk menghadirkan produk digital yang jelas, berguna, dan menyenangkan.</p><div class="facts"><div><small>LOKASI</small><b>{{profile.location}}</b></div><div><small>SPESIALISASI</small><b>Web & Education Tech</b></div><div><small>EMAIL</small><b>{{profile.email}}</b></div><div><small>PRINSIP</small><b>Curious · Thoughtful · Reliable</b></div></div><a href="#contact" class="text-link">Mari terhubung <i class="fa-solid fa-arrow-right"/></a></div></div></section></template>
