<template>
  <div class="dashboard">
    <h1>Dashboard de Fretes por Estado</h1>
    <p>Veja os dados consolidados de fretes realizados.</p>
    <div
      v-for="estado in estados"
      :key="estado.sigla"
      class="estado-card"
      @click="verMapa(estado.sigla)" <!-- Adiciona clique -->
    >
      <h2>{{ estado.nome }} ({{ estado.sigla }})</h2>
      <ul>
        <li>Total de Fretes: {{ estado.totalFretes }}</li>
        <li>Valor Final (R$): {{ estado.valorFinal.toLocaleString() }}</li>
        <li>Transportadora: {{ estado.transportadora }}</li>
        <li>Última Entrega: {{ estado.dataUltimaEntrega }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      estados: [
        {
          nome: "São Paulo",
          sigla: "SP",
          totalFretes: 120,
          valorFinal: 50000,
          transportadora: "Transportadora SP Ltda.",
          dataUltimaEntrega: "2024-12-01",
        },
        {
          nome: "Rio de Janeiro",
          sigla: "RJ",
          totalFretes: 80,
          valorFinal: 35000,
          transportadora: "RJ Transporte Eireli",
          dataUltimaEntrega: "2024-11-28",
        },
      ],
    };
  },
  methods: {
    verMapa(sigla) {
      // Redireciona para a página do mapa, passando a sigla como parâmetro
      this.$router.push({ name: "Mapa", query: { estado: sigla } });
    },
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.estado-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer; /* Mostra que é clicável */
  transition: background-color 0.3s;
}
.estado-card:hover {
  background-color: #f0f0f0;
}
h2 {
  margin-top: 0;
}
ul {
  padding-left: 20px;
}
</style>
