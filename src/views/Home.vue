<template>
  <section class="section">
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item"
        v-for="(element, index) in elements"
        :key="'el' + index"
      >
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            aria-expanded="false"
            :aria-controls="'collapse' + index"
          >
            {{ element.title }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="image-cover d-flex justify-content-center">
              <a
                data-fancybox="gallery"
                :href="element.img"
                :data-caption="element.title"
              >
                <img
                  :src="element.img"
                  width="128"
                  height="128"
                  :alt="element.title"
                  class="item-image"
                />
              </a>
            </div>
            <p class="mt-2 mb-0">{{ element.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Collapse from 'bootstrap'
import elements from '@/data/elements.js'

export default {
  name: 'Home',
  data() {
    return {
      elements
    }
  }
}
</script>

<style scoped>
.accordion-button:focus {
  border-color: rgba(0, 0, 0, 0.125);
  box-shadow: none;
}

.accordion-button:not(.collapsed)::after {
  background-image: url(../assets/btsicons/chevron-down.svg);
}

.accordion-button:not(.collapsed) {
  color: #212529;
  background-color: #f8f9fa;
}
</style>