<template>
  <v-carousel class="margem">
    <v-carousel-item
      cover
      src="@/assets/carousel1.png"
    />
    <v-carousel-item
      cover
      src="@/assets/carousel2.png"
    />
    <v-carousel-item
      cover
      src="@/assets/carousel3.png"
    />
  </v-carousel>
  <v-row>
    <v-col class="d-flex align-center">
      <v-divider color="black" :thickness="4" />
    </v-col>
    <v-col>
      <v-container class="mt-14">
        <v-card class="d-flex justify-center" flat>
          <p class="text-h5">Top Suplementos</p>
        </v-card>
        <v-card class="d-flex justify-center text-subtitle-1" flat>
          <p>EM PROMOÇÃO</p>
        </v-card>
      </v-container>
    </v-col>
    <v-col class="d-flex align-center">
      <v-divider color="black" :thickness="4" />
    </v-col>
  </v-row>

  <v-card class="d-flex justify-space-around" flat>
    <v-card class="pa-6" flat width="200px">
      <v-img
        height="200"
        src="@/assets/blend.png"
        @click="VerProduto"
        class="cursor-pointer"
      />
      <v-card class="d-flex flex-column align-center" flat>
        <p class="text-body-1">Whey Blend 1,8kg</p>
        <p class="text-h6 mt-2">R$109,00</p>
        <p class="text-body-2 text-decoration-line-through">R$139,00</p>
      </v-card>
    </v-card>
    <v-card class="pa-6" flat width="200px">
      <v-img
        height="200"
        src="@/assets/titanium.png"
        @click="VerProduto"
        class="cursor-pointer"
      />
      <v-card class="d-flex flex-column align-center" flat>
        <p class="text-body-1">Mass Titanium Refil 2,4Kg</p>
        <p class="text-h6 mt-2">R$119,00</p>
        <p class="text-body-2 text-decoration-line-through">R$149,00</p>
      </v-card>
    </v-card>
    <v-card class="pa-6" flat width="200px">
      <v-img
        height="200"
        src="@/assets/whey.png"
        @click="VerProduto"
        class="cursor-pointer"
      />
      <v-card class="d-flex flex-column align-center" flat>
        <p class="text-body-1">100% Whey  900g</p>
        <p class="text-h6 mt-2">R$109,00</p>
        <p class="text-body-2 text-decoration-line-through">R$139,00</p>
      </v-card>
    </v-card>
    <v-card class="pa-6" flat width="200px">
      <v-img
        height="200"
        src="@/assets/super.png"
        @click="VerProduto"
        class="cursor-pointer"
      />
      <v-card class="d-flex flex-column align-center" flat>
        <p class="text-body-1">Super Gainers  3Kg</p>
        <p class="text-h6 mt-2">R$129,00</p>
        <p class="text-body-2 text-decoration-line-through">R$159,00</p>
      </v-card>
    </v-card>
    <v-card class="pa-6" flat width="200px">
      <v-img
        height="200"
        src="@/assets/dextrose.png"
        @click="VerProduto"
        class="cursor-pointer"
      />
      <v-card class="d-flex flex-column align-center" flat>
        <p class="text-body-1">Dextrose 1Kg</p>
        <p class="text-h6 mt-2">R$99,00</p>
        <p class="text-body-2 text-decoration-line-through">R$119,00</p>
      </v-card>
    </v-card>
  </v-card>
  <v-card class="d-flex justify-center mt-6" flat>
    <p class="text-h5">Qual a sua meta?</p>
  </v-card>
  <v-row class="mt-4">
    <v-col>
      <v-img
        class="d-flex align-center justify-center"
        cover
        height="600"
        src="@/assets/1.png"
        width="100%"
      >
        <v-card class="d-flex justify-center align-center" flat height="50">
          <p class="text-h5 text-primary font-weight-black">Definição Muscular</p>
        </v-card>
      </v-img>
    </v-col>
    <v-col>
      <v-img
        class="d-flex align-center justify-center"
        cover
        height="600"
        src="@/assets/2.png"
        width="100%"
      >
        <v-card class="d-flex justify-center align-center" flat height="50">
          <p class="text-h5 text-primary font-weight-black">Emagrecimento</p>
        </v-card>
      </v-img>
    </v-col>
    <v-col>
      <v-img
        class="d-flex align-center justify-center"
        cover
        height="600"
        src="@/assets/3.png"
        width="100%"
      >
        <v-card class="d-flex justify-center align-center" flat height="50">
          <p class="text-h5 text-primary font-weight-black">Ganho de Massa Muscular</p>
        </v-card>
      </v-img>
    </v-col>
    <v-col>
      <v-img
        class="d-flex align-center justify-center"
        cover
        height="600"
        src="@/assets/4.png"
        width="100%"
      >
        <v-card class="d-flex justify-center align-center" flat height="50">
          <p class="text-h5 text-primary font-weight-black">Saude e Bem Estar</p>
        </v-card>
      </v-img>
    </v-col>
  </v-row>
  <Menu />
  <Rodape />
</template>
<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const VerProduto = () => {
  router.push('/Compras')
}

</script>

<style scoped>
.margem{
  margin-top: 200px;
}
</style>
