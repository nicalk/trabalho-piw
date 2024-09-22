<template>
  <v-divider :thickness="3" class="mb-8"></v-divider>
  <v-card class="pl-10 pr-10 d-flex justify-space-between mb-4" flat>
    <p class="text-h5 font-weight-medium">Carrinho de compras</p>
    <v-card flat>
      <v-btn variant="text" size="small" class="text-none">
        Desmarcar todos os items
      </v-btn>
    </v-card>
  </v-card>
  <!--  Inicio items-->
  <v-card class="pl-10 pr-10 pt-6" flat>
    <v-row cols="12">
      <v-col class="d-flex" cols="3">
        <v-checkbox color="secondary"></v-checkbox>
        <v-img
          height="150"
          src="@/assets/ImagemWhey.png"
        />
      </v-col>
      <v-col>
        <v-row class="d-flex flex-column">
          <p class="text-h6">Kit Mais músculos, força e disposição - Max Titanium 100% Whey Refil Baunilha +
            Creatina 300g + Hórus 150g Frutas Vermelhas</p>
          <p class="text-subtitle-2 text-success">Em estoque</p>
        </v-row>
        <v-row class="d-flex justify-end">
          <v-card color="secondary pa-1 mr-3" flat>
            <p class="text-subtitle-2 font-weight-medium">12% off</p>
          </v-card>
        </v-row>
        <v-row cols="12">
          <v-col cols="2">
            <v-select
              label="Qtd:"
              :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
              density="compact"
              variant="outlined"
            />
          </v-col>
          <v-col class="d-flex align-baseline">
            <v-btn variant="text" class="text-none">
              Excluir
            </v-btn>
            <p>|</p>
            <v-btn variant="text" class="text-none">
              Mover para lista de desejos
            </v-btn>
          </v-col>
          <v-col cols="4" class="d-flex flex-column align-end">
            <p class="text-h5 font-weight-black">R$ 319,00</p>
            <p class="text-subtitle-2">De: R$ 359,00</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
  <v-divider :thickness="3" class="mt-4"></v-divider>
  <v-row cols="12" class="d-flex pa-10 pb-0">
    <v-col class="mt-6">
      <v-card height="100" width="100%" class="d-flex justify-center align-center" flat>
        <v-btn color="secondary" width="70%" size="x-large">
          Comprar agora
        </v-btn>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="d-flex justify-space-between" flat>
        <p class="text-h6">Subtotal</p>
        <p class="text-h6 font-weight-black">R$ 837,00</p>
      </v-card>
      <v-card class="d-flex justify-space-between mb-4" flat>
        <p class="text-h6">Desconto</p>
        <p class="text-h6 text-secondary">-R$ 76,00</p>
      </v-card>
      <v-card class="d-flex justify-space-between" flat>
        <p class="text-h5">Total:</p>
        <p class="text-h5 font-weight-black">R$ 797,00</p>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
</script>
