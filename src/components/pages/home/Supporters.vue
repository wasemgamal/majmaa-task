<template>
    <div class="supporters py-5">
      <div class="container my-5">
        <h6 class="font_size__45 font_bold mb-5">  
          <span class="main_head">الرعـــــــاة</span>
        </h6>
        <div class="d-flex justify-content-center justify-content-lg-between align-items-stretch flex-wrap">
          <aside class="mb-3" v-for="logo in 5">
            <div class="px-3"><BaseImage width="130" path="svg/github.svg" class="img-fluid"/></div>
          </aside>
        </div>
      </div>
    </div>
</template>

<script>
import FeatureBox from '@/components/pages/home/FeatureBox.vue';
import BaseImage from '@/components/shared/BaseImage.vue';

export default {
  name: 'Features',
  components: {
    FeatureBox,
    BaseImage,
  },
}
</script>