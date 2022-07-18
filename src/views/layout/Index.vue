<template>
  <div>
    <layout-header />
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
import LayoutHeader from './Header'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndexView',
  components: {
    LayoutHeader
  }
})
</script>