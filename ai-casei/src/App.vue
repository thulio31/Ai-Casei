<template>
  <div>
    <NavBar />
    <RouterView />
    <Cards />
    <Flag />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Cards from './components/Cards.vue';
import NavBar from './components/NavBar.vue';
import Flag from './components/Flag.vue';

export default{
  name: 'App',
  components:{
    Footer,
    Cards,
    Flag,
    NavBar
  }  
}
</script>