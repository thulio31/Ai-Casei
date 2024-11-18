<template>
    <div>
        <div class="container">
            <div class="content">
                <h2>text of the printing and</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <button class="btn-default">Click Aqui</button>
                <button class="btn-alter">Click Aqui</button>
            </div>            
        </div>
       </div>
</template>
<style scoped>
.container{
    position: relative;
    width: 100%;
    height: 600px;
    justify-content: center;
    text-align: center;
    align-items: center;
}

.container::before{
    content: '';
    display: block;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(245, 243, 243, 0), #5a5a5a), url(/public/img/fundo-img.png);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
}

.content{
    padding-top: 15%;  
}
.btn-default{
    background-color: #C84648;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    padding: 10px 18px;
    margin: 12px;
    font-weight: bold;
    border-radius: 5px;
}

.btn-default:hover{
    transform: translateY(-10px);
    background-color: #C84648;
}

.btn-alter{
  background-color: transparent;  
  padding: 10px 18px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: bold;  
  border-radius: 5px;
}

h2{
    color: #FFFFFF;
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: 0px -1px 6px #1d1d1db2;
}

p{
    color: #FFFFFF;
    font-weight: 400;
    margin: 10px;
}
</style>
<script>
export default{
    name: 'Flag'
}
</script>