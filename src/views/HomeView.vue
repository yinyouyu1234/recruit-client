<template>
  <div class="home">
    <span>{{ $t('login.password') }}</span>
    <div class="top_btn" @click="changeLangEvent">中文</div>
    kk
    <div style="width: 800px">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Swiper from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
export default defineComponent({
  name: 'HomeView',
    //   components: {
    //   Swiper,
    //   SwiperSlide,
    // },
    mounted() {
            var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
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
