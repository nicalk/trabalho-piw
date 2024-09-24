<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const IrParaLogin = () => {
  router.push('/Login')
}
const IrParaCarrinho = () => {
  router.push('/Carrinho')
}
const IrParaHome = () => {
  router.push('/Home')
}
</script>

<template>
  <v-card class="pa-4 position-fixed top-0" flat width="100%">
    <v-row class="pr-4">
      <v-col cols="1">
        <v-img
          height="50"
          src="../assets/logoMN.png"
          @click="IrParaHome"
          class="cursor-pointer"
        />
      </v-col>
      <v-col cols="9" class="d-flex align-baseline">
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          variant="outlined"
          label="Digite aqui o que voce quer pesquisar"
          @click:append-inner=""
        />
      </v-col>
      <v-col>
        <v-card class="d-flex align-center  justify-center" flat>
          <v-icon size="x-large" to="/login">
            mdi-account-outline
          </v-icon>
          <!--          Botao entrar -->
          <v-btn variant="text" class="text-none text-h6" @click="IrParaLogin">Entrar</v-btn>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-space-around">
        <v-icon size="x-large">
          mdi-heart-outline
        </v-icon>
        <v-icon size="x-large" class="pl-6" @click="IrParaCarrinho">
          mdi-cart-outline
        </v-icon>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center justify-space-between pa-6">
      <v-card flat>
        <p>Lançamentos</p>
      </v-card>
      <v-card flat>
        <p>|</p>
      </v-card>
      <v-card flat>
        <p>Suplementos</p>
      </v-card>
      <v-card flat>
        <p>|</p>
      </v-card>
      <v-card flat>
        <p>Proteínas</p>
      </v-card>
      <v-card flat>
        <p>|</p>
      </v-card>
      <v-card flat>
        <p>Vitaminas e Minerais</p>
      </v-card>
      <v-card flat>
        <p>|</p>
      </v-card>
      <v-card flat>
        <p>Kits Promocionais</p>
      </v-card>
    </v-row>
  </v-card>
</template>
