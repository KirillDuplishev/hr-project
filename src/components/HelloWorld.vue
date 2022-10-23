<template lang="pug">
  div.container
    div.header

    div.navigation

    div.sidebar

    div.content

    div.clear

    div.footer
</template>

<script>
export default {
  
};
</script>

<style scoped>
.header {
  position: absolute;
  right: 0px;
  top: 0px;
  background: #e1f5a4;
  width: 100%;
  height: 55px;
}

.container {
  margin: auto auto;
  text-align: center;
  width: 100%;
  height: 100%;
}

.navigation {
  position: absolute;
  top: 55px;
  left: 0px;
  background: #edb86d;
  width: 100%;
  height: 50px;
}

.sidebar {
  position: absolute;
  top: 105px;
  left: 0px;
  background: #fae8b9;
  float: left;
  width: 17%;
  height: 100%;
}

.content {
  position: absolute;
  top: 105px;
  right: 0px;
  background: #ffffff;
  float: right;
  width: 83%;
  height: 100%;
}
.clear {
  clear: both;
}

.footer {
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: #edb86d;
  width: 100%;
  height: 50px;
}
</style>
