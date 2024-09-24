<template>
  <v-app>
    <v-main class="margem">
      <router-view />
    </v-main>
    <header>
      <v-card class="pa-4 position-fixed top-0" flat width="100%">
        <v-row>
          <v-col cols="1">
            <v-img
              height="50"
              src="../assets/logoMN.png"
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
              <v-icon size="x-large">
                mdi-account-outline
              </v-icon>
              <p class="pl-3">Entrar</p>
            </v-card>
          </v-col>
          <v-col>
            <v-icon size="x-large">
              mdi-heart-outline
            </v-icon>
            <v-icon size="x-large" class="pl-6">
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
    </header>
    <footer>
      <rodape />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import rodape from '@/components/Rodape.vue'
</script>

<style>
.margem{
  margin-top: 200px;
}
</style>
