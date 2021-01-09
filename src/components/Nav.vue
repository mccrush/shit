<template>
  <nav class="row">
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100 router-link-active"
        @click="selectTab('Home', $event)"
        ref="home"
      >
        Щит
      </button>
    </div>
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Shem', $event)"
        ref="shem"
      >
        Схемы
      </button>
    </div>
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100"
        @click="selectTab('Sprav', $event)"
        ref="sprav"
      >
        Справка
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    selectTab(compName, e) {
      this.$emit('mytab', compName)
      this.$refs.home.classList.remove('router-link-active')
      this.$refs.shem.classList.remove('router-link-active')
      this.$refs.sprav.classList.remove('router-link-active')
      e.target.classList.add('router-link-active')
    },
  },
}
</script>

<style scoped>
.router-link-active {
  color: #fff;
  background-color: #ffc107;
  border-color: #ffc107;
}
</style>