<template>
  <div>
    <NavBar />
    <Banner />
    <RouterView />
    <Cards />
    <Carousel />
    <Cards />
    <Flag />

    <Carrousel />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Cards from './components/Cards.vue';
import NavBar from './components/NavBar.vue';
import Flag from './components/Flag.vue';
import Banner from './components/Banner.vue';
import Carousel from './components/Carousel.vue';
import Paises from './components/Paises.vue';

export default{
  name: 'App',
  components:{
    Footer,
    Banner,
    Cards,
    Flag,
    Carousel,
    Paises,
    NavBar
  }  
}
</script>