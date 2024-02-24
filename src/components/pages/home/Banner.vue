<template>
  <div class="banner d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row">
        <aside class="col-md-6">
          <p class="border_radius__20 h4 text-white mb-0"> معاً نرتقي الى الأفضل </p>
          <h2 class=" my-3 font_bold font_size__65 d-inline-block main_head"><span class="text-white"> منصة </span> <span
              class="primary_color"> ارتقاء
            </span></h2>
          <p class="text-white mb-0">يعد التدريب والتطوير المهني من أهم روافد صقل المهارات وتنمية المعارف وبناء اتجاهات
            الموظفين والعاملين في
            المؤسسات
            الحكومية والخاصة بل وجميع أفراد المجتمع.</p>
          <div class="row g-3 mt-3">
            <div class="col-sm-5">
              <div class="input-group">
                <div class="input-group-text">
                  <base-image path="svg/search-icon.svg" alt="icon"/>
                </div>
                <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="بحث عن دورات">
              </div>
            </div>
            <div class="col-sm-5">
              <div class="input-group">
                <div class="input-group-text">
                  <base-image path="svg/students.svg" alt="icon"/>
                </div>
                <select class="form-select">
                  <option selected> الطلاب </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="col-sm">
              <base-button class="btn_gradient__full__primary border_radius__15 border-0 px-3 h-100 fw-bold"> بحث </base-button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/shared/BaseButton.vue';
import BaseImage from '@/components/shared/BaseImage.vue';

export default {
  name: 'Banner',
  components: {
    BaseButton,
    BaseImage,
  }
}
</script>

<style lang="scss" scoped></style>