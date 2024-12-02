<template>
  <div>
    <NavBar />
    <RouterView />
    <Index />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Cards from './components/Cards.vue';
import Index from './components/Index.vue';
import NavBar from './components/NavBar.vue';
import CardsCarousel from './components/CardsCarousel.vue';

export default{
  name: 'App',
  components:{
    Footer,
    Cards,
    Index,
    NavBar
  }  
}
</script>

<style>
.btn-default{
    background-color: #C84648;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 12px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
}
</style>