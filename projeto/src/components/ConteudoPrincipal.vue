<!-- Diretiva v-for, um atributo que sempre incia com v- -->
<!-- V-for: Basicamente ele economiza o código utilizando de baixo dos panos o JavaScript. É declarado uma variável Ingrediente e com os [] você declara o que quer que apareça na lista. Para faze-lo funcionar, basta adicionar a variável declarada nas chaves. {{}}-->
<!-- {{}}: ela só serve para inserir a variável em conteúdo HTML -->
<!-- v-bind:key:  Ela ajuda o Vue a saber exatamente qual item mudou, foi adicionado ou removido. Assim, o Vue consegue deixar tudo organizado e rápido, sem trocar os carrinhos de lugar por acidente.
Se você não der uma "plaquinha" para cada item (ou seja, não usar a key), o Vue pode acabar confundindo os carrinhos e fazer bagunça. Por exemplo, pode pintar o carrinho errado ou trocar as posições sem querer.-->
<script lang="ts">
import SelecionarIngredientes from '../components/SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue'
import Tag from '../components/Tag.vue';
import MostrarReceitas from './MostrarReceitas.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';

export default {
  data() {
    return {
      ingredientes: [] as string[],
      conteudo: 'SelecionarIngredientes' as Pagina
    };
  },
  components: { SelecionarIngredientes, Tag, SuaLista, MostrarReceitas },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
    removerIngrediente(ingrediente: string){
      this.ingredientes = this.ingredientes.filter(iLista => ingrediente !== iLista);
    },
    navegar(pagina:Pagina){
      this.conteudo = pagina;
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
      @adicionar-ingrediente="adicionarIngrediente"
      @remover-ingrediente="removerIngrediente"
      @buscar-receitas="navegar('MostrarReceitas')"
    />

    <MostrarReceitas 
    v-else-if="conteudo === 'MostrarReceitas'"
/>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>