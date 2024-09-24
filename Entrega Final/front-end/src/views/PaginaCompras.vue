<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'
import { ref } from 'vue'
const iconeCoracao = ref('mdi-heart-outline')
const corCoracao = ref('black')

const gostei = () => {
  if (iconeCoracao.value === 'mdi-heart-outline') {
    iconeCoracao.value = 'mdi-heart'
    corCoracao.value = 'red'
  } else {
    iconeCoracao.value = 'mdi-heart-outline'
    corCoracao.value = 'black'
  }
}
</script>
<template>
  <v-card class="bg-primary pa-6 margem">
    <v-row>
      <v-col class="d-flex align-center justify-center">
        <v-icon class="pr-1">mdi-currency-usd</v-icon>
        <p class="text-subtitle-1">Desconto de 5% no PIX</p>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-icon class="pr-3">mdi-truck-outline</v-icon>
        <p class="text-subtitle-1">Frete Grátis*</p>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-icon class="pr-3">mdi-credit-card-multiple-outline</v-icon>
        <p class="text-subtitle-1">Parcelamento em 6x sem juros</p>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <v-icon class="pr-3">mdi-medal-outline</v-icon>
        <p class="text-subtitle-1">Garantia de originalidade</p>
      </v-col>
    </v-row>
  </v-card>
  <!--  Inicio Imagem Compra-->
  <v-card class="pa-10 pb-0">
    <v-row class="d-flex align-center" cols="12">
      <v-col cols="7">
        <v-col class="d-flex">
          <v-col class="d-flex flex-column justify-center" cols="1">
            <v-card class="mb-2" variant="outlined" width="80">
              <v-img
                height="100"
                src="@/assets/Mini1.png"
              />
            </v-card>
            <v-card class="mb-2" variant="outlined" width="80">
              <v-img
                height="100"
                src="@/assets/Mini2.png"
              />
            </v-card>
            <v-card class="mb-2" variant="outlined" width="80">
              <v-img
                height="100"
                src="@/assets/Mini3.png"
              />
            </v-card>
            <v-card class="mb-2" variant="outlined" width="80">
              <v-img
                height="100"
                src="@/assets/Mini4.png"
              />
            </v-card>
          </v-col>
          <v-col>
            <v-img
              height="500px"
              src="@/assets/ImagemWhey.png"
            >
              <v-card class="d-flex justify-end bg-transparent align-center" flat height="100">
                <v-icon class="text-h4" :color="corCoracao" @click="gostei">
                  {{ iconeCoracao }}
                </v-icon>
              </v-card>
            </v-img>
          </v-col>
        </v-col>
        <v-row class="pa-6 pt-1">
          <v-col>
            <p class="text-subtitle-2 text-justify">
              Potencialize seus treinos com este kit que inclui: Max Titanium 100% Whey Refil Baunilha (900g): Proteína para recuperação e
              crescimento muscular, Creatina (300g): Aumenta força e resistência, Hórus Frutas Vermelhas (150g): Suplemento energético que
              melhora a disposição. Ideal para ganhar massa muscular, melhorar o desempenho e ter mais energia nos treinos.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <!--      -->
      <v-col>
        <v-row>
          <p class="text-h5 font-weight-bold text-justify">Kit Mais músculos, força e disposição - <span class="text-h5">Max Titanium 100% Whey Refil Baunilha + Creatina 300g + Hórus 150g Frutas Vermelhas</span></p>
          <v-card class="d-flex mt-4" flat>
            <p class="text-subtitle-1 font-weight-black pr-2">4,2</p>
            <v-icon>mdi-star</v-icon>
            <v-icon>mdi-star</v-icon>
            <v-icon>mdi-star</v-icon>
            <v-icon>mdi-star</v-icon>
            <v-icon>mdi-star-outline</v-icon>
            <p class="text-subtitle-2 font-weight-light pl-10">138 avaliações</p>
          </v-card>
          <v-divider class="mt-2" :thickness="2" />
        </v-row>
        <v-row class="d-flex justify-center">
          <v-card class="d-flex pa-6" flat>
            <p class="text-h1 text-secondary font-weight-medium mr-2">- 12%</p>
            <v-col>
              <p class="text-h4 font-weight-black">R$319,00</p>
              <p class="text-h6 text-decoration-line-through">R$359,00</p>
            </v-col>
          </v-card>
        </v-row>
        <v-col>
          <p class="text-h5 font-weight-medium mb-2">Em estoque</p>
          <v-select
            class="mb-4"
            :items="[1,2, 3, 4, 5, 6, 7, 8, 9, 10]"
            label="Quantidade:"
            variant="outlined"
          />
          <v-btn class="mb-3" size="large" variant="outlined" width="100%">
            Adicionar ao carrinho
          </v-btn>
          <v-btn color="secondary" size="large" width="100%">
            Comprar agora
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-card>
  <!--  Inicio Produtos Semelhantes-->
  <v-card flat>
    <v-row>
      <v-col class="d-flex align-center">
        <v-divider color="black" :thickness="4" />
      </v-col>
      <v-col>
        <v-container class="mt-14">
          <v-card class="d-flex justify-center" flat>
            <p class="text-h4">Produtos Semelhantes</p>
          </v-card>
          <v-card class="d-flex justify-center text-h6" flat>
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
      <v-card class="pa-6" flat width="200px">
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
      <v-card class="pa-6" flat width="200px">
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
  </v-card>
  <!--  O menu ta embaixo porque se colocar em cima o conteudo da pagina passa por cima-->
  <Menu />
  <Rodape />
</template>
<style scoped>
.margem{
  margin-top: 200px;
}
</style>
