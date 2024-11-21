<template>
  <div>
    <NavBar />
    <Banner />
    <RouterView />
    <Cards />
    <Flag />

    <Carrousel />
    <Paises />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Cards from './components/Cards.vue';
import NavBar from './components/NavBar.vue';
import Flag from './components/Flag.vue';
import Banner from './components/Banner.vue';
import Carrousel from './components/Carrousel.vue';
import Paises from './components/Paises.vue';

export default{
  name: 'App',
  components:{
    Footer,
    Banner,
    Cards,
    Flag,
    Carrousel,
    Paises,
    NavBar
  }  
}
</script>