<template>
  <div class="tudo">
    <div class="gatos">
      <div v-if="$fetchState.pending">
        <h1>Carregando...</h1>
      </div>
      <div v-else-if="$fetchState.error">
        <h1> Deu erro essa desgraça.</h1>
      </div>
      <div v-else>
        <div>
          <h1 class="titulo">Site do Gato!!!</h1>
        </div>
        <ul>
          <li v-for="dado in dados" id="comp" :key="dado.id">
            <div class="divgatos" @mouseover="variavel=true" @mouseleave="variavel=false">
              <img id="gatinhos" class="gato" :src="dado.url">
              <div v-if="variavel" class="aparece">
                <h2>
                  Raça: {{ dado.breeds[0].name }}
                </h2>
                <h2>
                  Inteligência: {{ dado.breeds[0].intelligence }}
                </h2>
                <h2>
                  Nível de energia: {{ dado.breeds[0].energy_level }}
                </h2>
                <h2>
                  Expectativa de vida: {{ dado.breeds[0].life_span }}
                </h2>
                <h2>
                  Nível de amizade com crianças: {{ dado.breeds[0].child_friendly }}
                </h2>
                <h2>
                  Nível de amizade com cachorros: {{ dado.breeds[0].dog_friendly }}
                </h2>
                <h2>
                  Nível de amizade com desconhecidos: {{ dado.breeds[0].stranger_friendly }}
                </h2>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dados: [],
      variavel: false
    }
  },

  async fetch () {
    const linkapi = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_TZmaND1gPqYrAyT391Yt3YwuXTlZkwVNOHWuikeijcv0BBZoobyPCqFuHv13xrNc&has_breeds=1'
    this.dados = await this.$axios.$get(linkapi)
  },

  methods: {

  }

}
</script>
<style>
    .tudo{
      background-image: url('static/background.jpg');
      background-attachment:fixed;
    }

    .titulo{
      font-size: 60px;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      color:darkorchid;
      background-color: lightpink;
      border-radius: 20px;
      margin: 15px;
      padding: 15px;
      border: solid #cc03df 8px;
    }

    .gatos{
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #f2a2c8;
        margin-left: 27%;
        margin-right: 27%;
        border: solid #ffe3ff 7px;
        border-radius: 20px;
    }

    .gato{
        height: 300px;
        border: solid #f2a2c8 3px;
        border-radius: 20px;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    #comp{
      list-style-type: none;
      display: flex;
    }

    .divgatos{
      margin-top: 50px;
      margin-bottom: 50px;
      margin-left: auto;
      margin-right: auto;
      background-color: #f6b1df;
      padding-left: 60px;
      padding-right: 60px;
      border: solid #f197ce 7px;
      border-radius: 20px;
    }

    .aparece h2{
      font-family:'Times New Roman', Times, serif;
      color:white;
      background-color: #d926e7;
      border-radius: 10px;
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
</style>
