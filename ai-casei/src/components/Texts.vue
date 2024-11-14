<template>
    <div>
        <div class="container">
            <div class="content">
                <h1>Teste Txto a</h1>

                <p>Ai Casei é uma empresa especializada em transformar o dia do
                    seu casamento em uma experiência única e memorável. Com mais de 69 anos de atuação no 
                    mercado, nossa missão é proporcionar aos noivos momentos de pura felicidade, alicerçados 
                    em uma organização impecável e um atendimento personalizado.</p>
                
            </div>
            <div class="img">
                <img src="/public/img/casamento.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    max-width: 1400px;
    height: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    align-items: center;
}
.container .content{
    width: 50%;
    padding: 50px;
}
.container .img{
    width: 50%;
    background-color: blue;
}

.container .img img{
    width: 62%;
}
</style>
<script>
export default{
    name: 'Texts'
}
</script>