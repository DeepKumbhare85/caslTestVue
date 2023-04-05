<script setup lang="ts">
import { useAbility } from '@casl/vue';

const { can } = useAbility();
</script>

<template>
  <div class="about" v-if="can('read', 'About')">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
