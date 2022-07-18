<template>
  <div class="home">
    <span>{{ $t('login.password') }}</span>
    <div class="top_btn" @click="changeLangEvent">中文</div>
    kk
    <img v-img="img" src="" alt="">
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
  data() {
    return {
      img: {
        tc: require('@/assets/logo.png'),
        en: require('@/assets/logo.png'),
        vi: require('@/assets/logo.png'),
        zh: require('@/assets/logo.png')
      }
    }
  },
    //   components: {
    //   Swiper,
    //   SwiperSlide,
    // },
    mounted() {
      console.log(this.$store);
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
      
    this.$store.commit('SET_GLOBAL_LANG', 'zh')
      // if (this.$i18n.locale === 'zh') {
      //   this.$i18n.locale = 'en';//关键语句
      //   console.log('en')
      // } else {
      //   this.$i18n.locale = 'zh';//关键语句
      //   console.log('zh')
      // }
    }
  }
});
</script>
<style>
img {
  width: 200px;
  height: 200px;
}
</style>
