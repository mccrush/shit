<template>
  <nav class="row">
    <div class="col-4">
      <router-link to="/" tag="a" class="btn btn-block btn-light w-100">Щит</router-link>
    </div>
    <div class="col-4">
      <router-link to="/shem" tag="a" class="btn btn-block btn-light w-100">Схемы</router-link>
    </div>
    <div class="col-4">
      <router-link to="/sprav" tag="a" class="btn btn-block btn-light w-100">Справка</router-link>
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