<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="img">
                    <img src="/public/img/fotografo-1.jpg" alt="">
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
                    <img src="/public/img/fotografo-2.jpg" alt="">
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
                    <img src="/public/img/fotografo-3.jpg" alt="">
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
                    <img src="/public/img/fotografo-4.jpg" alt="">
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
    display: flex;
    padding-top: 100px ;
    

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
    box-shadow: rgba(0, 0, 0, 0.24) 6px 4px 9px;
}

.btn-default{
    background-color: #C84648;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 12px;
    font-weight: bold;
    border-radius: 5px;
    width: 90%;    
    margin-right: 60px; 
    margin-top: 15px;
    font-size: 17px;
    font-weight: 500;     
    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
}

.btn-default:hover{
    background-color: #741a15;
    transition: 0.4s;
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