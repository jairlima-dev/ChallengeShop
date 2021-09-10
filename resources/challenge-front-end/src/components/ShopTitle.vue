<template>
  <div class="flex row full-width q-pa-lg content-start">
    <span class="text-h5 text-weight-bold justify-around">
      <span>{{ title }}</span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ShopTitle',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
