<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style> /* scoped 스타일 컴포넌트까지만 적용 /컨테너 클래스명를 컨테이너로 쓰고 있기 때문에 에러 발생  */
body {
  background-color: black;
  color: white;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} 

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo{
  max-width: 60px;
  height: auto;
}

.button {
        border-radius: 20px;
        border: 1px solid white;
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0px;
        padding: 10px;
        width: 100%;
        cursor: pointer;
}

.error-message {
   color: red;
   font-size: small;
   width: 100%;
} 

</style>
