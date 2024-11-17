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
                             <RouterLink><li>Meu casamento</li></RouterLink><!--colocar os diretorios -->
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

</style>