<template>
    <div>
        <div class="main-menu">
            <div class="logo">
                <RouterLink>
                    <li id="li-logo"><i class="fa-solid fa-heart" style="color: #df2626;"></i>Ai Casei!</li>
                </RouterLink>
            </div>
            <div class="menu">
                <header> 
                    <nav id="nav">
                        <ul>
                            <RouterLink><li>Meu casamento</li></RouterLink>
                            <RouterLink><li>Espaços</li></RouterLink>
                            <RouterLink><li>Noivos</li></RouterLink>     
                            <RouterLink><li>Serviços</li></RouterLink>                                                   
                           <RouterLink><li>Lua de mel</li></RouterLink>                            
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'NavBar'
}
</script>

<style scoped>
.main-menu {
    display:  flex;
}
.main-menu a{
    text-decoration: none;
}
.main-menu .logo li{
    list-style: none;
    font-weight: bold;
    color: #f8f8f8;
    text-shadow: 0px -1px 2px #aaaa;    
    font-size: 1.6rem;
    margin-top: 0.9rem ;
}

.main-menu .logo li:hover{    
    color: #eca39f;
    transition: 0.5s;
    text-shadow: 0px -1px 2px #464444;
}


</style>