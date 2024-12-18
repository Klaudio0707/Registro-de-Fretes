<template>
  <div class="mapa-entregas">
    <h1>Mapa Interativo de Fretes</h1>
    <p>Selecione um estado no mapa para visualizar os dados de fretes.</p>
    <div id="map" class="map-container"></div>
    <div v-if="estadoSelecionado" class="fretes-list">
      <h2>Fretes para {{ estadoSelecionado.nome }}</h2>
      <ul>
        <li v-for="frete in estadoSelecionado.fretes" :key="frete.id">
          <strong>Origem:</strong> {{ frete.origem }}<br />
          <strong>Destino:</strong> {{ frete.destino }}<br />
          <strong>Transportadora:</strong> {{ frete.transportadora }}<br />
          <strong>Data de Coleta:</strong> {{ frete.dataColeta }}<br />
          <strong>Data de Entrega:</strong> {{ frete.dataEntrega }}<br />
          <strong>Valor Total:</strong> R$ {{ frete.valorTotal.toLocaleString() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Mapa",
  data() {
    return {
      map: null,
      estadoSelecionado: null,
      estadosGeoJson: null,
    };
  },
  mounted() {
    // Inicializa o mapa
    this.map = L.map("map").setView([-14.235, -51.9253], 4); // Centro do Brasil

    // Adiciona o mapa base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Carregar os dados GeoJSON dos estados
    fetch("/brazil-states.geojson")
      .then((response) => response.json())
      .then((data) => {
        this.estadosGeoJson = data;
        this.adicionarEstados();
      });
  },
  methods: {
    adicionarEstados() {
      // Adiciona os estados ao mapa
      const geoJsonLayer = L.geoJSON(this.estadosGeoJson, {
        style: () => ({
          color: "#000",
          weight: 1,
          fillColor: "#088",
          fillOpacity: 0.5,
        }),
        onEachFeature: (feature, layer) => {
          // Adiciona interatividade
          layer.on("click", () => {
            const sigla = feature.properties.sigla;
            const nome = feature.properties.nome;

            // Filtra os fretes para o estado selecionado
            const fretes = this.carregarFretes(sigla);

            this.estadoSelecionado = {
              nome,
              fretes,
            };

            // Destaque o estado clicado
            geoJsonLayer.setStyle((layerFeature) => ({
              color: layerFeature === feature ? "#f00" : "#000",
              fillColor: layerFeature === feature ? "#f99" : "#088",
              fillOpacity: layerFeature === feature ? 0.7 : 0.5,
            }));
          });
        },
      }).addTo(this.map);
    },
    carregarFretes(sigla) {
      // Simulação de dados de fretes
      const fretesMock = {
        SP: [
          {
            id: 1,
            origem: "São Paulo",
            destino: "Rio de Janeiro",
            transportadora: "Transportadora SP Ltda.",
            dataColeta: "2024-12-01",
            dataEntrega: "2024-12-03",
            valorTotal: 1200,
          },
        ],
        RJ: [
          {
            id: 2,
            origem: "Rio de Janeiro",
            destino: "São Paulo",
            transportadora: "RJ Transporte Ltda.",
            dataColeta: "12-10-2024",
            dataEntrega: "25-10-2024",
            valorTotal: 1500,
          },
          {
            id: 3,
            origem: "Pernambuco",
            destino: "São Paulo",
            transportadora: "Transcargo Transporte Ltda.",
            dataColeta: "2024-10-05",
            dataEntrega: "2024-12-04",
            valorTotal: 12500,
          },
        ],
      };
      return fretesMock[sigla] || [];
    },
  },
};
</script>

<style scoped>
.mapa-entregas {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
.map-container {
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.fretes-list {
  margin-top: 20px;
  background: #f9f9f9;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.fretes-list ul {
  list-style: none;
  padding: 0;
}
.fretes-list li {
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
