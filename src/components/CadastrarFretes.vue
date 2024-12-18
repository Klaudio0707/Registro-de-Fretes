<template>
    <div class="cadastro-fretes">
      <h1>Cadastro de Fretes</h1>
      <form @submit.prevent="cadastrarFrete">
        <div>
          <label for="data">Data:</label>
          <input type="date" id="data" v-model="frete.data" required />
        </div>
        <div>
          <label for="tipo">Tipo de Frete:</label>
          <select id="tipo" v-model="frete.tipo" required>
            <option value="Rodoviário">Rodoviário</option>
            <option value="Aéreo">Aéreo</option>
            <option value="Marítimo">Marítimo</option>
          </select>
        </div>
        <div>
          <label for="origem">Origem:</label>
          <input type="text" id="origem" v-model="frete.origem" placeholder="Cidade de origem" required />
        </div>
        <div>
          <label for="destino">Destino:</label>
          <input type="text" id="destino" v-model="frete.destino" placeholder="Cidade de destino" required />
        </div>
        <div>
          <label for="quantidade">Quantidade (toneladas):</label>
          <input type="number" id="quantidade" v-model="frete.quantidade" required />
        </div>
        <div>
          <label for="observacoes">Observações:</label>
          <textarea id="observacoes" v-model="frete.observacoes" placeholder="Informações adicionais"></textarea>
        </div>
        <button type="submit">Cadastrar Frete</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        frete: {
          data: "",
          tipo: "",
          origem: "",
          destino: "",
          quantidade: "",
          observacoes: "",
        },
      };
    },
    methods: {
      cadastrarFrete() {
        console.log("Frete cadastrado:", this.frete);
        // Aqui você pode adicionar o código para salvar os dados no backend
        alert("Frete cadastrado com sucesso!");
        this.frete = {
          data: "",
          tipo: "",
          origem: "",
          destino: "",
          quantidade: "",
          observacoes: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .cadastro-fretes {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  form div {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input,
  textarea,
  select,
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  