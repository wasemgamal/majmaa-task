<template>
  <div class="active_courses py-5">

    <div class="container my-5 position-relative">
      <div class="dotts_up"></div>
      <div class="dotts_down"></div>
      <h2 class=" my-3 font_bold font_size__40 d-inline-block main_head"><span class="text-dark"> الدورات </span> <span
          class="primary_color"> النشطة
        </span></h2>
      <p> الدورات النشطة حاليا في منصة ارتقاء</p>
      <!-- <div class="row align-items-stretch">
          <aside v-for="course in 6" class="col-md-4">
            <CourseBox class="mb-3"/>
          </aside>
        </div> -->
      <Carousel :items-to-show="1" :breakpoints="breakpoints" dir="rtl">
        <Slide v-for="slide in 5" :key="slide">
          <CourseBox />
        </Slide>
        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import FeatureBox from '@/components/pages/home/FeatureBox.vue';
import CourseBox from './CourseBox.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  name: 'Features',
  components: {
    FeatureBox,
    CourseBox,
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 2,
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
        }, 
      },
    }
  }
}
</script>