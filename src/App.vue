<template>
  <div id="app">
    <!-- Afficher le Sidebar uniquement si la route actuelle n'est PAS celle du LoginView -->
    <Sidebar v-if="!isLoginView" />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

const route = useRoute();

// Déterminer si la vue actuelle est LoginView
const isLoginView = computed(() => route.name === 'login');
</script>

<style>
#app {
  display: flex;
}

#content {
  margin-left: 250px; /* Adjust if the sidebar width changes */
}
</style>
