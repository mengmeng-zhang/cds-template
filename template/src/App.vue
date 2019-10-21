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
import Icon from './components/pubilc/icon'
{{#unless router}}
{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  {{/router}},
  components: {
    Icon
  }
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
