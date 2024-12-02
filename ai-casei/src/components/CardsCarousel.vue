<template>
    <div class="center">
      <div class="wrapper">
        <div class="inner" :style="{ transform: `translateX(-${activeSlide * 33.33}%)` }">
          <div v-for="(card, index) in cards" :key="index" class="card">
            <img :src="card.img" :alt="card.title" />
            <div class="content">
              <h1>{{ card.title }}</h1>
              <h3>{{ card.subtitle }}</h3>
            </div>
          </div>
        </div>
      </div>
  
      <div class="map">
        <button
          v-for="(btn, index) in buttons"
          :key="index"
          :class="{ active: activeSlide === index }"
          @click="setActiveSlide(index)"
        ></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardsCarousel',
    data() {
      return {
        cards: [
          {
            img: "https://colorlib.com/preview/theme/seogo/img/case_study/1.png",
            title: "Product Design",
            subtitle: "UI/UX, Design",
          },
          {
            img: "https://colorlib.com/preview/theme/seogo/img/case_study/2.png",
            title: "Custom Website",
            subtitle: "UI/UX, Design",
          },
          {
            img: "https://colorlib.com/preview/theme/seogo/img/case_study/3.png",
            title: "Digital Marketing",
            subtitle: "UI/UX, Design",
          },
          // Adicione mais cards aqui se necessário
        ],
        buttons: [0, 1, 2], // Controle dos botões
        activeSlide: 0, // Slide atualmente ativo
      };
    },
    methods: {
      setActiveSlide(index) {
        this.activeSlide = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .center {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  
  .wrapper {
    display: flex;
    overflow: hidden;
    width: 55em;
  }
  
  .inner {
    display: flex;
    gap: 1em;
    transition: all 1s ease-in-out;
  }
  
  .card {
    border-radius: 0.5em;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  }
  
  .card img {
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    display: block;
    width: 17.5em;
  }
  
  .card .content {
    background: #3498db;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    padding: 1em;
    text-align: center;
  }
  
  .card .content h1 {
    color: #fff;
    font-size: 1.25rem;
    line-height: 1;
  }
  
  .card .content h3 {
    color: #ccc;
    font-size: 0.9rem;
    font-weight: 300;
  }
  
  .map {
    margin-top: 1em;
  }
  
  .map button {
    all: unset;
    background: #5dade2;
    cursor: pointer;
    margin: 0 0.125em;
    position: relative;
    user-select: none;
    width: 1em;
    height: 1em;
    border-radius: 50%;
  }
  
  .map button.active::after {
    background: #1abc9c;
    content: "";
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  