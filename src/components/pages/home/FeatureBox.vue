<template>
    <div class="feature_box p-4 text-center bg-white">
        <base-image :path="iconPath" alt="icon"/>
        <h5 class="font_size__25 font_bold"> {{ title }} </h5>
        <p class="font_size__20">
            <slot/>
        </p>
    </div>
</template>

<script>
import BaseImage from '@/components/shared/BaseImage.vue';

export default {
  name: 'FeatureBox',
  components: {
    BaseImage,
  },
  props:{
    iconPath:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
  }
}
</script>