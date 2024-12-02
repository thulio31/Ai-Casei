<template>
    <div>
        <div class="main-menu">
            <div class="logo">
                <RouterLink to="/">
                    <li><i class="fa-solid fa-heart" style="color: #df2626;"></i>Ai Casei!</li>
                </RouterLink>
            </div>
            <div class="menu">
                <header> 
                    <nav id="nav">
                        <ul>
                            <RouterLink to="/"><li>Meu casamento</li></RouterLink><!--colocar os diretorios -->
                            <RouterLink to="Espacos"><li>Espaços
                                <div class="sub-menu">
                                    <ul>
                                        <li><RouterLink>fotografo</RouterLink></li>
                                    </ul>
                                </div>
                            </li></RouterLink>
                            <RouterLink to="Noivos"><li>Noivos</li></RouterLink>     
                            <RouterLink to="Servicos"><li>Serviços</li></RouterLink>                                                   
                            <RouterLink to="LuaDeMel"><li>Lua de mel</li></RouterLink>                            
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
.main-menu{
    position: fixed;
    z-index: 5;
    width: 100%;
}
.sub-menu{
    display: none;
}

nav ul li:hover .sub-menu{
    display: block;
}
</style>