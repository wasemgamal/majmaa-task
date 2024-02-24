<template>
  <button class="btn" @click.prevent="!loading && $emit('wasClicked', $event)">
    <slot/>
  </button>
</template>

<script>
export default {
    name:"BaseButton",
};
</script>
