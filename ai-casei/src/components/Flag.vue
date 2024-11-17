<template>
    <div>
        <div class="container">
            <div class="content">
                <h2></h2>
                <p></p>
                <button>Click Aqui</button>
                <button>Click Aqui</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    position: relative;
    max-width: 1420px;
    height: 600px;
}

.container::before{
    content: '';
    display: block;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(6, 18, 30, 0.1), #06121e), url(/public/img/fundo-img.png);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.9;
}

</style>
<script>
export default{
    name: 'Flag'
}
</script>