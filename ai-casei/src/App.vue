<template>
  <div>
    <NavBar />
    <RouterView />
    <Cards />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Cards from './components/Cards.vue';
import NavBar from './components/NavBar.vue';

export default{
  name: 'App',
  components:{
    Footer,
    Cards,
    NavBar
  }  
}
</script>