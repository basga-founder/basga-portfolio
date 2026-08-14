<script setup>
import {computed} from 'vue';
import {useRoute,RouterLink} from 'vue-router';
import {projects} from '../data/portfolio';
const route=useRoute();
const project=computed(()=>projects.find(x=>x.slug===route.params.slug))
</script>
<template>
  <main class="detail section" v-if="project">
    <RouterLink to="/#projects" class="text-link">
      <i class="fa-solid fa-arrow-left"/> Semua proyek
    </RouterLink>
    <p class="eyebrow">{{project.category}} — CASE STUDY</p>
    <h1>{{project.title}}</h1>
    <p class="lead">{{project.long}}</p>
    <img :src="project.image" :alt="project.title"/>
    <div class="detail-meta">
      <div>
        <small>TEKNOLOGI</small>
        <div class="tags">
          <span v-for="t in project.tech" :key="t">{{t}}</span>
        </div>
      </div>
      <a class="button primary" href="#" target="_blank">
        Kunjungi Demo
        <i class="fa-solid fa-arrow-up-right-from-square"/>
      </a>
    </div>
  </main>
  <main v-else class="not-found">
    <h1>Proyek tidak ditemukan.</h1>
    <RouterLink class="button primary" to="/">
      Kembali ke Beranda
    </RouterLink>
  </main>
</template>
