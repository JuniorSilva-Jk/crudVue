<template>
<center>
  <div class="card mt-4" style="max-width: 50%;">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col" style="text-align: center;">Nome</th>
          <th scope="col" style="text-align: center;">Valor</th>
          <th scope="col" style="text-align: center;">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, valuep } in product" :key="id">
          <td style="text-align: center;">{{ name }}</td>
          <td style="text-align: center;">{{ valuep }}</td>

          <td style="text-align: center;">
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Editar
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(id)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</center>
</template>

<script>
import { loadProduct, deleteProduct } from '@/firebase'

export default {
  setup() {
    const product = loadProduct()
    return { product, deleteProduct }
  }
}
</script>
