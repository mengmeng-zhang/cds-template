<template>
  <div id="app">
    <Icon name="logo" :style="{width: '54px', height: '22px'}" />
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Icon from './components/pubilc/icon'
{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Icon
  }{{/router}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
