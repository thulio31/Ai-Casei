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
                        <li><i class="fa-solid fa-heart" style="color: #df2626;"></i>Ai Casei!</li>
                    </RouterLink>
                    Planeje, compartilhe e eternize o seu grande dia em um só lugar. O começo da sua história merece o cenário perfeito.
                </div>
            </div>
            <div class="social">
                <div class="social-content">
                    <li>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
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

<script>
export default{
    name: 'Footer'
}
</script>