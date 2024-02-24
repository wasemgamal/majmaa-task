<template>
    <div class="features">
      <div class="container">
        <div class="row align-items-stretch">
          <aside class="col-md-4 mb-3">
            <feature-box class="h-100" iconPath="svg/feature1.svg" title="دخول دائم">
              جميع الدورات متاحة دائما حين الإشتراك فيها
            </feature-box>
          </aside>
          <aside class="col-md-4 mb-3">
            <feature-box class="h-100" iconPath="svg/feature2.svg" title="دورات معتمدة">
              الدورات التدربيبة مقدمة من جهات تدريبة ومدربيين معتمدين
            </feature-box>
          </aside>
          <aside class="col-md-4 mb-3">
            <feature-box class="h-100" iconPath="svg/feature3.svg" title="مجتمع من المبدعين">
              منصة ارتقاء مجتمع من المبدعين والخبراء
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