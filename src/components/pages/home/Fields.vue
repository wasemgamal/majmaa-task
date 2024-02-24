<template>
    <div class="fields py-5 my-5">
      <div class="container">
        <h6 class="font_size__45 text-center font_bold mb-5">  
          <span class="main_head">المجالات</span>
        </h6>
        <div class="row align-items-stretch">
          <aside class="col-md-4 mb-3">
            <feature-box style="background-color: var(--colorSet1) !important" class="h-100" iconPath="svg/field1.svg" title="البرمجيات">
              وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً
            </feature-box>
          </aside>
          <aside class="col-md-4 mb-3">
            <feature-box style="background-color: var(--colorSet2) !important" class="h-100" iconPath="svg/field2.svg" title="البرمجيات">
              وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً
            </feature-box>
          </aside>
          <aside class="col-md-4 mb-3">
            <feature-box style="background-color: var(--colorSet3) !important" class="h-100" iconPath="svg/field3.svg" title="البرمجيات">
              وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً
            </feature-box>
          </aside>
          <aside class="col-md-4 mb-3">
            <feature-box style="background-color: var(--colorSet4) !important" class="h-100" iconPath="svg/field4.svg" title="البرمجيات">
              وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً
            </feature-box>
          </aside>
          <aside class="col-md-4 mb-3">
            <feature-box style="background-color: var(--colorSet5) !important" class="h-100" iconPath="svg/field5.svg" title="البرمجيات">
              وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً
            </feature-box>
          </aside>
          <aside class="col-md-4 mb-3">
            <feature-box style="background-color: var(--colorSet6) !important" class="h-100" iconPath="svg/field6.svg" title="البرمجيات">
              وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً
            </feature-box>
          </aside>
        </div>
      </div>
    </div>
</template>

<script>
import FeatureBox from '@/components/pages/home/FeatureBox.vue';

export default {
  name: 'Features',
  components: {
    FeatureBox,
  },
}
</script>