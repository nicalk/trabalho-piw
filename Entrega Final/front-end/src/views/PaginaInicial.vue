<template>
  <v-carousel>
    <v-carousel-item
      src="@/assets/Carousel.png"
      cover
    />
    <v-carousel-item
      src="@/assets/espartano.png"
      cover
    />
  </v-carousel>

  <v-row>
    <v-col class="d-flex align-center">
      <v-divider :thickness="4" color="black"></v-divider>
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
      <v-divider :thickness="4" color="black"></v-divider>
    </v-col>
  </v-row>

  <v-card flat class="d-flex justify-space-around">
    <v-card class="pa-6" flat width="200px">
      <v-img
        height="200"
        src="@/assets/blend.png"
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
      />
      <v-card class="d-flex flex-column align-center" flat>
        <p class="text-body-1">Mass Titanium Refil 2,4Kg</p>
        <p class="text-h6 mt-2">R$119,00</p>
        <p class="text-body-2 text-decoration-line-through">R$149,00</p>
      </v-card>
    </v-card>
    <v-card class="pa-6" flat  width="200px">
      <v-img
        height="200"
        src="@/assets/whey.png"
      />
      <v-card class="d-flex flex-column align-center" flat>
        <p class="text-body-1">100% Whey  900g</p>
        <p class="text-h6 mt-2">R$109,00</p>
        <p class="text-body-2 text-decoration-line-through">R$139,00</p>
      </v-card>
    </v-card>
    <v-card class="pa-6" flat  width="200px">
      <v-img
        height="200"
        src="@/assets/super.png"
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
        height="600"
        width="100%"
        src="@/assets/1.png"
        cover
        class="d-flex align-center justify-center"
      >
        <v-card height="50" class="d-flex justify-center align-center" flat>
          <p class="text-h5 text-primary font-weight-black">Definição Muscular</p>
        </v-card>
      </v-img>
    </v-col>
    <v-col>
      <v-img
        height="600"
        width="100%"
        src="@/assets/2.png"
        cover
        class="d-flex align-center justify-center"
      >
        <v-card height="50" class="d-flex justify-center align-center" flat>
          <p class="text-h5 text-primary font-weight-black">Emagrecimento</p>
        </v-card>
      </v-img>
    </v-col>
    <v-col>
      <v-img
        height="600"
        width="100%"
        src="@/assets/3.png"
        cover
        class="d-flex align-center justify-center"
      >
        <v-card height="50" class="d-flex justify-center align-center" flat>
          <p class="text-h5 text-primary font-weight-black">Ganho de Massa Muscular</p>
        </v-card>
      </v-img>
    </v-col>
    <v-col>
      <v-img
        height="600"
        width="100%"
        src="@/assets/4.png"
        cover
        class="d-flex align-center justify-center"
      >
        <v-card class="d-flex justify-center align-center" flat height="50">
          <p class="text-h5 text-primary font-weight-black">Saude e Bem Estar</p>
        </v-card>
      </v-img>
    </v-col>
  </v-row>
  <v-card>
    <p>Aaaaaaa</p>
  </v-card>
</template>
<script setup lang="ts">
</script>

<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Transparência no fundo */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
