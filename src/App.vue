<template>
  <div class="container">
    <Header />
    <Nav />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Header from '@/components/Header'
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Nav,
      Footer
    }
  }
</script>


<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>