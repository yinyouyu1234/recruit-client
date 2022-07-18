<template>
  <div>
    header
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndexView'
})
</script>