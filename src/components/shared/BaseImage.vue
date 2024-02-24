<template>
  <img loading="lazy" v-if="asset" class="image" :src="require(`@/assets/img/${path}`)" :alt="alt" @load="$emit('wasLoaded', $event)"/>
  <img loading="lazy" v-else class="image img-fluid" :src="path" :alt="alt" @load="$emit('wasLoaded', $event)"/>
</template>
<script>
export default {
  name: 'BaseImage',
  props: {
    asset: {
      type: Boolean,
      required: false,
      default: true
    },
    path: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
  }
}
</script>
