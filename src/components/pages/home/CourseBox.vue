<template>
    <div class="course_box p-3 bg-white">
      <label class="py-1 px-3 bg-white position-absolute border_radius__10 secondary_color font_bold"> مجاناً </label>
      <div class="img_box">
        <BaseImage class="img-fluid w-100" path="course.png" alt="course"/>
      </div>
      <div class="d-flex p-3">
        <div class="col-7">
          <h6 class="font_bold">
            اساسيات تطوير تطبيقات الويب
          </h6>
          <p class="font_grey font_size_15 mb-0"> 13 يناير 2024 </p>
        </div>
        <div class="col text-end">
          <p class="text-danger font_medium"> اكتمل العدد </p>
          <BaseButton class="btn_gradient__secondary__grey border_radius__15 border-0 px-3 font_bold font_size__20"> تسجيل </BaseButton>
        </div>
      </div>
    </div>
</template>

<script>
import BaseButton from '@/components/shared/BaseButton.vue';
import BaseImage from '@/components/shared/BaseImage.vue';

export default {
  name: 'CourseBox',
  components: {
    BaseImage,
    BaseButton,
  },
}
</script>