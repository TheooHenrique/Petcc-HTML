<template class="tudo">
  <div class="gatos">
    <div v-if="$fetchState.pending">
      <h1>Carregando...</h1>
    </div>
    <div v-else-if="$fetchState.error">
      <h1> Deu erro essa desgraça.</h1>
    </div>
    <div v-else>
      <ul>
        <li v-for="dado in dados" id="comp" :key="dado.id">
          <img id="gatinhos" class="gato" :src="dado.url">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dados: []
    }
  },

  async fetch () {
    const linkapi = 'https://api.thecatapi.com/v1/images/search?limit=10'
    this.dados = await this.$axios.$get(linkapi)
  },

  mounted () {
    this.chamar()
  },

  methods: {
    chamar () {
      const title = document.querySelector('#comp')
      title.addEventListener('mouseover', function () {
        this.style.height = '1000px'
      })
      title.addEventListener('mouseleave', function () {
        this.style.height = '300px'
      })
    }
  }

}
</script>
<style>
    template{
        background-color: blue;
    }

    .gatos{
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #b611c1;
        margin-left: 200px;
        margin-right: 200px;
        border: solid #f2a2c8 7px;
        border-radius: 20px;
    }

    .gato{
        height: 300px;
        border: solid #f2a2c8 3px;
        border-radius: 20px;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    /*.gato:hover{
        height: 400px;
        margin-right: 50%;
    }*/
</style>
