<template>
    <div>
        <div class="footer-main">
            <div class="links">
                <div class="lisks-content">
                    <RouterLink><li>Espaços</li></RouterLink>
                    <RouterLink><li>Sobre Nos</li></RouterLink>
                    <RouterLink><li>Noivos</li></RouterLink>
                    <RouterLink><li>Casamento</li></RouterLink>
                </div>
            </div>
            <div class="content">
                <div class="content-slogan">                    
                    <RouterLink to="/">
                        <li style="font-weight: bold;"><i class="fa-solid fa-heart" style="color: #df2626;"></i>Ai Casei!</li>
                    </RouterLink>
                    <p>Planeje, compartilhe e eternize o seu grande dia em um só lugar. O 
                        começo da sua história merece o cenário perfeito.</p>
                </div>
            </div>
            <div class="social">
                <div class="social-content">                    
                    <li>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                </div>
            </div>            
        </div>
    </div>
</template>

<style scoped>
.footer-main{
    padding: 50px 65px;
    width: 100%;
    height: auto;
    
    justify-content: center;
    display: flex;
    text-align: center;
}

.footer-main a{
 text-decoration: none;
 color: #FFFFFF;
}

.footer-main li{
    list-style: none;
}

.content .content-slogan{
    text-align: center;
    justify-content: center;
    align-items: center;
}

.content .content-slogan p{
    padding:40px 200px;
    font-weight: 400;
    color: #FFFFFF;
    text-shadow: -1px 1px 0px #575656aa;
    font-size: 1.2rem;
}

.lisks-content{    
    text-align: center;
    justify-content: center;
    align-items: center;
    
}

.lisks-content li{
    margin: 15px;
    font-weight: 400;
}

.lisks-content li:hover{
    color: #eca39f;
    text-decoration: underline;
    transition: 0.3s ease-in-out;
}


@keyframes icons{
    to{
        color: #eca39f;
        transform: translateX(10px);
    }
}

.social-content{
    text-align: center;
    justify-content: center;
    align-items: center;     
}
.social-content i{
    font-size: 1.3rem; 
}

.social-content li{
    margin: 15px;
    font-size: 1.2rem;
}

.social-content i:hover{
    animation: icons 1.2s infinite alternate;
}
</style>

<script>  
export default{
    name: 'Footer'
}
</script>