<template>
  <div>
    <div class="global">
      <main class="carousel-container">
        <!-- Carrossel -->
        <div class="carousel">
          <div
            v-for="(item, index) in items"
            :key="index"
            :class="['item', { active: currentIndex === index }]"
          >
            <img :src="item.image" :alt="item.caption" />
          
          </div>
        </div>
    
        <!-- Botões de Navegação -->
        <button class="btn prev" @click="prevItem"><i class="fa-solid fa-angles-left"></i></button>
        <button class="btn next" @click="nextItem"><i class="fa-solid fa-angles-right"></i></button>
    
        <!-- Pontos de Navegação
        <div class="dots">
          <span
            v-for="(_, index) in items"
            :key="index"
            :class="['dot', { active: currentIndex === index }]"
            @click="goToItem(index)"
          ></span>
        </div> -->
      </main>
      <div class="forms">
        <div class="form">
          <h1>Joao Fagas De Paula</h1>
          <h3> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> 4.8 <span>Excelente</span></h3>
          <h3><i class="fa-solid fa-location-dot"></i> <a href="">Sabara, Centro 192</a></h3>
          <div class="colums">
          <div class="colum">

          </div>
          <div class="colum">
            <h3><i class="fa-solid fa-coins"></i> Preço</h3>
            <h4>R$ 240,00 p/ Album</h4>
          </div>
          <div class="colum">
            <h3><i class="fa-solid fa-calendar-days"></i> Horario</h3>
            <h4>Segunda a Sabado 8hrs a 22hrs</h4>
          </div>
          <div class="colum">
            <h3><i class="fa-solid fa-square-check"></i> Atendimentos</h3>
            <h4>Mais de <span>67</span> clientes satisfeitos</h4>
          </div>

          <button class="btn-default">Adicionar ao Carrinho</button>
        </div>
        </div>
      </div>


    </div>
    <div class="content">
      <div class="conteiner-cont">
        <div class="cont-p">
          <i class="fa-solid fa-camera"></i>
          fotografo
        </div>
        <div class="cont-p">
          <i class="fa-solid fa-person"></i>
          otima interação
        </div>
        <div class="cont-p">
          <i class="fa-solid fa-icons"></i>
          qualidade impecavel
        </div>
      </div>
      <div class="informacao">
        <p>João Fagas de Paula é um renomado fotógrafo brasileiro, conhecido por suas fotografias 
          que capturam a essência das paisagens naturais e culturais do Brasil. Nascido em 1985 na 
          pequena cidade de Tiradentes, em Minas Gerais, João descobriu sua paixão pela fotografia 
          ainda jovem, quando ganhou sua primeira câmera de filme aos 14 anos.</p>

        <p>Formação e Trajetória
          João estudou Artes Visuais na Universidade Federal de Minas Gerais (UFMG), onde aprofundou
          seus conhecimentos sobre fotografia e composição visual. Após a graduação, ele embarcou em 
          uma viagem de três anos pelo Brasil, documentando as tradições, festividades e paisagens do
          país. Essas experiências deram origem à sua primeira exposição, intitulada "Brasil Intocado",
          que foi apresentada em museus de Belo Horizonte e São Paulo, recebendo aclamação da crítica.</p>

        <p>Estilo Fotográfico
          Fagas de Paula é conhecido por suas imagens vibrantes, com ênfase no uso natural da luz e em enquadramentos
          únicos que transmitem emoção e autenticidade. Ele mistura técnicas clássicas e contemporâneas, transitando entre
          fotografia analógica e digital com maestria.</p>
      </div>
    </div>
  </div>
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
          },
          {
            image: "https://bit.ly/3lkp5DW",            
          },
          {
            image: "https://bit.ly/3iMHuI1",
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
.global{
  display: flex;
}

.forms{
  width: 40%;
}


  .carousel-container {
    width: 50%;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 40px;
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
    border-radius: 20px;
    
  }
  
 
  
  .btn {
    padding: 1em 2em;
    position: absolute;
    transform: translateY(-50%);
    top: 53%;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 900;
    color: #ffffff;
    background-color: transparent;
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
    background-color: #C84648;
  }
  </style>
  