<template>
    <div class="activities py-5" style="background-color: var(--colorSet1)">
      
      <div class="container my-5 position-relative">
        <div class="dotts_up"></div>
      <div class="dotts_down"></div>
        <h2 class=" my-3 font_bold font_size__40 d-inline-block text-dark main_head">الأنشطة</h2>
        <p> الفعاليات المتاحة حاليا في منصة ارتقاء</p>
        <div class="row align-items-stretch">
          <aside v-for="course in 6" class="col-md-4">
            <CourseBox class="mb-3"/>
          </aside>
        </div>
      </div>
    </div>
</template>

<script>
import FeatureBox from '@/components/pages/home/FeatureBox.vue';
import CourseBox from './CourseBox.vue';

export default {
  name: 'Features',
  components: {
    FeatureBox,
    CourseBox,
  },
}
</script>