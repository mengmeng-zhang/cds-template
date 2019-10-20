<template>
  <img class="icon-svg" :src="icon" :style="sheet || defaultStyle"/>
</template>
<script>
export default {
    props: ["name", "sheet"],
    data(){
        return {
            icon: "",
            defaultStyle: {
                width: "20px",
                height: "20px"
            }
        }
    },
    mounted () {
        this.icon = require(`@/assets/svg/${this.name}.svg`);
    }
}
</script>
<style lang="scss" scope>
.icon-svg{
    padding-right: 10px;
}
</style>
