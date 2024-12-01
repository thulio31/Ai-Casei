<template>
    <main class="carousel-container">
      <!-- Carrossel -->
      <div class="carousel">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['item', { active: currentIndex === index }]"
        >
          <img :src="item.image" :alt="item.caption" />
          <p class="caption">{{ item.caption }}</p>
        </div>
      </div>
  
      <!-- Botões de Navegação -->
      <button class="btn prev" @click="prevItem">Prev</button>
      <button class="btn next" @click="nextItem">Next</button>
  
      <!-- Pontos de Navegação -->
      <div class="dots">
        <span
          v-for="(_, index) in items"
          :key="index"
          :class="['dot', { active: currentIndex === index }]"
          @click="goToItem(index)"
        ></span>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'Index',
    data() {
      return {
        currentIndex: 0, // Índice do slide atual
        items: [
          {
            image: "https://bit.ly/34xczKy",
            caption: "Caption for Image 1",
          },
          {
            image: "https://bit.ly/3lkp5DW",
            caption: "Caption for Image 2",
          },
          {
            image: "https://bit.ly/3iMHuI1",
            caption: "Caption for Image 3",
          },
        ],
      };
    },
    methods: {
      // Mostra um item específico
      showItem(index) {
        this.currentIndex = index;
      },
      // Vai para o slide anterior
      prevItem() {
        this.currentIndex =
          (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      // Vai para o próximo slide
      nextItem() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      },
      // Navega diretamente para um slide clicado
      goToItem(index) {
        this.showItem(index);
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 80%;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .carousel {
    aspect-ratio: 16 / 9;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .item {
    opacity: 0;
    width: 100%;
    height: 100%;
    display: none;
    transition: opacity 0.5s ease-in-out;
  }
  
  .item.active {
    opacity: 1;
    display: block;
  }
  
  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .caption {
    width: 100%;
    padding: 8px;
    position: absolute;
    bottom: 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  
  .btn {
    padding: 1em 2em;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 900;
    color: #10100e;
    background-color: #ffffe6;
    transition: transform 0.2s ease-in-out;
  }
  
  .btn:active,
  .btn:focus {
    transform: translateY(-50%) scale(0.9);
  }
  
  .btn:hover {
    transform: translateY(-50%) scale(0.96);
  }
  
  .prev {
    left: -5%;
  }
  
  .next {
    right: -5%;
  }
  
  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .dot {
    cursor: pointer;
    height: 10px;
    width: 10px;
    background-color: #242421;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }
  
  .dot.active,
  .dot:hover {
    background-color: #ffffe6;
  }
  </style>
  