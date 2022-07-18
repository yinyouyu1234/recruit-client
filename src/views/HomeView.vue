<template>
  <div class="home">
    <span>{{ $t('login.password') }}</span>
    <div class="top_btn" @click="changeLangEvent">中文</div>
    kk
    <div style="width: 800px">
        <swiper
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
export default defineComponent({
  name: 'HomeView',
      components: {
      Swiper,
      SwiperSlide,
    },
  methods: {
    onSlideChange() {
console.log('slide change');
    },
    onSwiper(swiper: any) {
      console.log(swiper);
    },
    changeLangEvent() {
      if (this.$i18n.locale === 'zh') {
        this.$i18n.locale = 'en';//关键语句
        console.log('en')
      } else {
        this.$i18n.locale = 'zh';//关键语句
        console.log('zh')
      }
    }
  }
});
</script>
<style>
</style>
