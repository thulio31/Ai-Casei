<template>
    <div id="container">
        <div class="card">

        </div>
    </div>
</template>
<script>
export default{
    name: 'Card'
}
</script>

<style scoped> 
.container{    
    width: 100%;
    height: 350px;
    justify-content: center;
    display: flex;
    padding-top: 100px;
}
.card{  
    max-width:65%;
    height: 290px;
    display: flex;    
    border-radius: 30px;
    background-image: url('../img/Casamento1.jpg');
    background-repeat: no-repeat;
    background-size: 100% 290px;
    border: 1px solid #9494946c;    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>