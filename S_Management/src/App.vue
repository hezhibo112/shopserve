<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style  lang="scss">
.wrap{
  width: 100%;
  height: 100%;
}
a{
  color:black;
  
}
</style>

