<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/img12.jpg" alt="">
                    <p>Joao Fagas De Paula</p>
                </div>
                <div class="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took </p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the </p>
                    <a href=""><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/img12.jpg" alt="">
                    <p>Joao Fagas De Paula</p>
                </div>
                <div class="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took </p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the </p>
                    <a href=""><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/img12.jpg" alt="">
                    <p>Joao Fagas De Paula</p>
                </div>
                <div class="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took </p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the </p>
                    <a href=""><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/img12.jpg" alt="">
                    <p>Joao Fagas De Paula</p>
                </div>
                <div class="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took </p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the </p>
                    <a href=""><button class="btn-default">Ler Mais</button></a>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style scoped>
.container{    
    width: 100%;
    height: 350px;
    justify-content: center;
    display: flex
    

}
.card{    
    max-width:90%;
    height: 290px;
    display: flex;    
    border-radius: 30px;
    background-color: rgb(244, 248, 248);
    border: 1px solid #9494946c;    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.card:hover{
    scale: 102%;
    transition: 0.5s ease;    
    box-shadow: rgba(0, 0, 0, 0.24) 5px 5px 10px;
}

button{
    width: 90%;    
    margin-right: 60px; 
    margin-top: 15px;
    font-size: 17px;
    font-weight: 500;      
}
.img{
    width: 30%; 
}

p{
    font-weight: 400;
}
.img p{
   text-align: center;
   margin-top: -27px;
   margin-left: 20px;
   text-transform: uppercase;
   background-color: #C84648;
   color: #FFFFFF;
   width: 320px;
   border-radius: 0px 0px 20px 20px;
   height: 30px;   
   border: 1px solid #fc7979cc;    
   
}

.content{
    width: 70%;
    padding-left: 15%;
    justify-content: center;    
    text-align: center;
    align-items: center;
}

.content p {
    text-align: justify;
    margin-right: 60px; 
    margin-top: 40px;
}



img{
    width: 360px;    
    padding: 20px;
    border-radius: 30px 30px 0px 0px;
    height: auto;
    
}

</style>
<script>
export default{
    name: 'Fotografos'
}
</script>