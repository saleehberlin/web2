<script setup>
import { ref } from 'vue';

const count = ref(0);
const bgColor = ref('#f0f4f8');

function increment() {
  count.value++;
  // Alternate background color when count reaches even/odd values
  bgColor.value = count.value % 2 === 0 ? '#e0f2fe' : '#fef3c7';
}
</script>

<template>
  <div class="wrapper" :style="{ backgroundColor: bgColor }">
    <div class="content">
      <p>Count: {{ count }}</p>
      <button @click="increment"> Increment</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease; /* Smooth transition */
}
</style>