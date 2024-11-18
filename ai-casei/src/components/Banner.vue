<template>
    <div>
        <div class="container">
            <div class="content-card">
                <div class="slogan">O início do seu 'felizes para sempre' começa aqui.</div>
                <p>Conheça mais sobre o AiCasei</p>
                <button class="botao">Saiba mais</button>
            </div>
            <div class="img-card"></div>
        </div>    
    </div>
    
    </template>
    <script>
    export default{
        name: 'Banner'
    }
    </script>
    
    <style scoped>
    .container {
        max-width: 100%;
        height: 450px;
        display: flex;
        background-color: rgb(255, 255, 255);
        margin-top: 1px;
        border-bottom: solid grey 1px;
        border-top: solid grey 1px;
    }
    
        /* Estilo para o .content-card */
    .content-card {
        width: 70%;
        height: auto;
        background-color: rgb(255, 255, 255);
        border-radius: 0px 230px 230px 0px;
        z-index: 2;
    }
    
        /* Estilo para o .img-card */
    .img-card {
        background-image: url('/img/banner.jpeg');
        background-repeat: no-repeat;
        position: absolute;
        right: -3%;
        width: 50%;
        height: 449px;
        z-index: 1; /* Card com z-index 1 (ficará acima do content-card) */
    }
    
    .slogan{
        font-size: 32px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        position: relative; 
        top: 150px;
        right: -20px;
        font-weight: 400;
    }
    
    .botao{
        top: 200px;
        margin-left: 20px;
        background-color: #800020;
        border-radius: 20px;
        height: 70px;
        width: 120px;
        border: none;
        box-shadow: 6px 3px 10px 0px black;
        color: white;   
    }
    
    .botao:hover{
        scale: 1.1;
        border: solid black 1px;
    }
    
    p{
        font-size: 16px;
        margin-left: 20px;
        margin-top:200px;
    }
    </style>
    