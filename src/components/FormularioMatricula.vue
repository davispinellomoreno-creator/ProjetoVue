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

  <option
    v-for="cursoItem in cursos"
    :key="cursoItem.id"
    :value="cursoItem.id"
  >
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
import { ref, onMounted } from "vue"

const nome = ref("")
const email = ref("")
const curso = ref("")
const mensagem = ref("")

const cursos = ref([])

// carregar cursos da API
async function carregarCursos() {
  const resposta = await fetch("http://localhost:3000/cursos")
  cursos.value = await resposta.json()
}

async function enviarFormulario() {

  if (!nome.value || !email.value || !curso.value) {
    mensagem.value = "Preencha todos os campos."
    return
  }

  try {

    const resposta = await fetch("http://localhost:3000/matricula", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        cursoId: curso.value
      })
    })

    const dados = await resposta.json()

    mensagem.value = dados.mensagem

  } catch (erro) {

    mensagem.value = "Erro ao enviar matrícula"

  }

}

// executa quando a página carrega
onMounted(() => {
  carregarCursos()
})
</script>