<template>
  <nav>
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="active">Щит</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/shem">Схемы</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/sprav">Справка</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>