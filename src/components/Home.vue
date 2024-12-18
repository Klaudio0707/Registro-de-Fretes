<template>
    <div class="home">
      <h1>Bem-vindo ao Sistema de Fretes Brasil</h1>
      <p>Organize e visualize suas operações de transporte em um só lugar.</p>
      <nav>
        <router-link to="/cadastro">Cadastrar Fretes</router-link> |
        <router-link to="/mapa">Mapa das Entregas</router-link> |
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  .home {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  nav {
    margin-top: 20px;
  }
  a {
    color: #007bff;
    text-decoration: none;
    margin: 0 10px;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  