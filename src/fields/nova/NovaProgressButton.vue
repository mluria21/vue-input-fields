<template>
  <button
    class="btn btn-default btn-primary inline-flex items-center relative"
    type="button"
    ref="button"
    v-on="$listeners"
  >
    <span :class="{ invisible: processing }"> <slot /> </span>

    <span
      v-if="processing"
      class="absolute"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
    >
      <loader class="text-white" width="32" />
    </span>
  </button>
</template>

<script>
import Loader from './Loader.vue'
export default {
  props: {
    processing: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    focus() {
      this.$refs.button.focus()
    },
  },

  components:{Loader}
}
</script>
