<template>
  <nav class="row">
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100"
        @click="$emit('tab', 'Home')"
      >
        Щит
      </button>
    </div>
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100"
        @click="$emit('tab', 'Shem')"
      >
        Схемы
      </button>
    </div>
    <div class="col-4">
      <button
        class="btn btn-block btn-light w-100"
        @click="$emit('tab', 'Sprav')"
      >
        Справка
      </button>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: #fff;
  background-color: #ffc107;
  border-color: #ffc107;
}
</style>