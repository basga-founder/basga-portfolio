<script setup>
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Services from '../components/Services.vue';
import Projects from '../components/Projects.vue';
import Experience from '../components/Experience.vue';
import Testimonials from '../components/Testimonials.vue';
import Contact from '../components/Contact.vue';
</script>

<template>
  <main>
    <Hero/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Experience/>
    <Experience type="education"/>
    <Testimonials/>
    <Contact/>
  </main>
</template>
