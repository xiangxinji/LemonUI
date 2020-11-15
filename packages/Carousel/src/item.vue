<template>
  <li class="le-carousel-item">
    <div class="content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'LeCarouselItem',
  componentName: 'le.carousel.item',
  inject: ['carouselIns'],
  mixins: [Emitter],
  mounted() {
    this.dispatch('le.carousel', 'add-children', [this]);
  },

  beforeDestroy() {
    this.dispatch('le.carousel', 'remove-children', [this]);
  },
};
</script>
