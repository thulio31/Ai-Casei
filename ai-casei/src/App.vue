<template>
  <div>
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';

export default{
  name: 'App',
  components:{
    Footer,
    NavBar
  }  
}
</script>