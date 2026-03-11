<template>
  <div class="form-container">
    <h2>Formulário de Matrícula</h2>

    <form @submit.prevent="enviarFormulario">

      <div class="campo">
        <label>Nome completo</label>
        <input type="text" v-model="nome" placeholder="Digite seu nome completo" />
      </div>

      <div class="campo">
        <label>Email</label>
        <input type="email" v-model="email" placeholder="Digite seu email" />
      </div>

      <div class="campo">
        <label>Curso</label>
        <select v-model="curso">
          <option value="">Selecione um curso</option>
          <option v-for="cursoItem in cursos" :key="cursoItem.id" :value="cursoItem.nome">
            {{ cursoItem.nome }}
          </option>
        </select>
      </div>

      <button type="submit">Matricular</button>

    </form>

    <p v-if="mensagem">{{ mensagem }}</p>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const nome = ref("")
const email = ref("")
const curso = ref("")
const mensagem = ref("")

const cursos = ref([
  { id: 1, nome: "JavaScript Básico" },
  { id: 2, nome: "Node.js Fundamental" },
  { id: 3, nome: "Vue.js Iniciante" }
])

function enviarFormulario() {
  if (!nome.value || !email.value || !curso.value) {
    mensagem.value = "Preencha todos os campos."
    return
  }

  mensagem.value = "Matrícula realizada com sucesso!"
}
</script>

<style>
.form-container {
  max-width: 400px;
  margin: auto;
}

.campo {
  margin-bottom: 15px;
}

button {
  padding: 10px;
}
</style>