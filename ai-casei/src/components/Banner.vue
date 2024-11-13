<template>
<div>
    <div class="container">
        <div class="content-card">

        </div>
        <div class="img-card">

        </div>
    </div>    
</div>

</template>
<script>
export default{
    name: 'Banner'
}
</script>

<style scoped>
/*.container{
    max-width: 1420px;
    height: 450px;
    display: flex;
    background-color: rgb(255, 255, 255);
}

.content-card{
    width: 20%;
    height: auto;
    background-color: blueviolet;
    border-radius:   0px 160px 160px 0px;
    z-index: 3;
}
.img-card{
    width: 40%;
    height: auto;
    background-image: url('/public/img/banner.jpg');
    z-index: 1;
}
*/
.container {
    max-width: 100%;
    height: 450px;
    display: flex;
    background-color: rgb(255, 255, 255);
    margin-top: 1px;
    border-top: 1px solid rgb(0, 0, 0);
    border-bottom: 1px solid rgb(0, 0, 0);
}

    /* Estilo para o .content-card */
.content-card {
    width: 70%;
    height: auto;
    background-color: rgb(255, 255, 255);
    border-radius: 0px 200px 200px 0px;
    z-index: 2;
}

    /* Estilo para o .img-card */
.img-card {
    background-image: url('/public/img/banner.jpeg');
    background-repeat: no-repeat;
    position: absolute;
    right: -5%;
    width: 50%;
    height: 450px;
    z-index: 1; /* Card com z-index 1 (ficará acima do content-card) */
}
</style>