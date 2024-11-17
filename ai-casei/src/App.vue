<template>
  <div>
    <NavBar />
    <RouterView />
    <Cards />
    <Texts />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Cards from './components/Cards.vue';
import Texts from './components/Texts.vue';
import NavBar from './components/NavBar.vue';

export default{
  name: 'App',
  components:{
    Footer,
    Cards,
    Texts,
    NavBar
  }  
}
</script>