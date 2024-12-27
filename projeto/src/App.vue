<script lang="ts">//Aqui especifica a linguagem que estamos utilzando, na qual seria TypeScript
import Banner from './components/Banner.vue'; //Importação do componente Banner
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
import Rodape from './components/Rodape.vue'

//Criamos um objeto e exportamos o Banner (Adiciona o objeto componentes, abre o objeto {}, adiciona sua propriedade que é Banner e seu valor será o Banner que importamos na linha 2)
//Nesse caso, por importamos o Banner e nomear ele, podemos implementar ele normalmente no Banner sem o valor! Especificamente o componente Banner.
export default {
  components: { Banner, ConteudoPrincipal, Rodape }
}
</script>

<template>
  <Banner />
  <ConteudoPrincipal />
  <Rodape />
</template>