<template>
  <v-card image="@/assets/espartano.png" class="d-flex justify-center align-center" width="100%" height="100%">
    <v-card width="35%" height="80%" class="rounded-xl d-flex flex-column justify-center align-center">
      <v-container>
        <v-card class="d-flex justify-center" flat>
          <v-container width="100px">
            <v-img
              src="@/assets/logoMN.png"
              width="80px"
            />
          </v-container>
        </v-card>
        <v-col class="d-flex justify-center mt-4">
          <v-card class="w-75 h-75" flat>
            <v-text-field
              label="E-mail"
              type="email"
              variant="outlined"
              density="compact"
            />
            <v-text-field
              label="Senha"
              type="password"
              variant="outlined"
              density="compact"
            />
            <v-btn color="secondary" width="100%" size="large" class="text-none mb-4">
              Entrar
            </v-btn>
            <v-btn variant="outlined" width="100%" size="large" class="text-none mb-6">
              Entrar com Google
            </v-btn>
            <v-card class=" d-flex flex-column align-center mb-6" flat>
              <p class="text-h6">ou</p>
            </v-card>
            <v-btn variant="outlined" width="100%" size="large" class="text-none" @click="IrParaCadastro">
              Cadastre-se
            </v-btn>
          </v-card>
        </v-col>
      </v-container>

    </v-card>
  </v-card>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const IrParaCadastro = () => {
  router.push('/Cadastro')
}
</script>
