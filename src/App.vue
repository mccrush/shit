<template>
  <div class="container">
    <Header />
    <Nav @tab="getComponent" />
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <transition name="fade" mode="out-in">
      <component :is="myComponent" />
    </transition>

    <Footer />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import Home from '@/views/Home'
import Shem from '@/views/Shem'
import Sprav from '@/views/Sprav'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Footer,
    Home,
    Shem,
    Sprav,
  },
  data() {
    return {
      myComponent: 'Home',
    }
  },
  computed: {},
  methods: {
    getComponent(comp) {
      this.myComponent = comp
    },
  },
}
</script>


<style>
.container {
  max-width: 640px;
  margin: 0 auto;
}

.section {
  padding-top: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>