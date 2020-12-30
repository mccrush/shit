<template>
  <section>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(element,index) in elements" :key="index">
        <h2 class="accordion-header" :id="'heading'+index">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index"
            aria-expanded="false" :aria-controls="'collapse'+index">
            {{index + '&nbsp;' + element.title}}
          </button>
        </h2>
        <div :id="'collapse'+index" class="accordion-collapse collapse show" :aria-labelledby="'heading'+index"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="image-cover">
              <a data-fancybox="gallery" :href="element.img">
                <img :src="element.img" width="128" height="128" :alt="element.title" class="item-image">
              </a>
            </div>
            <p>{{element.description}}</p>
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