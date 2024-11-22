<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="img-card">
                    <img src="/img/img-1.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Teste Casamento</h3>
                    <p>lorem ipsulum test ray humber
                        lorem ipsulum test ray humber
                        ray humber
                    </p>
                    <button class="btn-default">Ver Pacotes</button>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="/img/img-1.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Teste Casamento</h3>
                    <p>lorem ipsulum test ray humber
                        lorem ipsulum test ray humber
                        ray humber
                    </p>
                    <button class="btn-default">Ver Pacotes</button>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="/img/img-1.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Teste Casamento</h3>
                    <p>lorem ipsulum test ray humber
                        lorem ipsulum test ray humber
                        ray humber
                    </p>
                    <button class="btn-default">Ver Pacotes</button>
                </div>
            </div>
            <div class="card">
                <div class="img-card">
                    <img src="/img/img-1.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Teste Casamento</h3>
                    <p>lorem ipsulum test ray humber
                        lorem ipsulum test ray humber
                        ray humber
                    </p>
                    <button class="btn-default">Ver Pacotes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 100%;
    height: auto;
    justify-content: center;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.card{
    background-color: rgb(253, 253, 253);
    width: 290px;
    height: 390px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.card:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 5px 5px 10px; ;
    transform: translateY(-10px);
    transition: 0.4s;
        
}


.img-card img{
width: 100%;
}

.content{
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
}

.content p{
    padding: 10px;
    font-size: 0.8rem;
}

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

.btn-default:hover{    
    animation: btn 0.5s infinite alternate ease-in-out; 
}


@keyframes btn{
    to{
        transform: translateY(-5px);
        background-color: #a90c0e;
    }
}
</style>
<script>
export default {
    nome: 'Cards'   
}
</script>