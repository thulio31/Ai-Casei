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
.container{
    max-width: 1420px;
    height: 450px;
    display: flex;
    background-color: aquamarine;
}
.content-card{
    width: 57%;
    height: auto;
    background-color: blueviolet;
    
}
.img-card{
    width: 43%;
    height: auto;
    background-image: url('/public/img/banner.jpg');
    
}
</style>