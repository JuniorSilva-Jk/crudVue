<template>
  <div class="flex justify-center">
    <h3 class="text-lg font-medium text-center leading-6 text-gray-900">
      Adicionar Produto
    </h3>
  </div>
  <div class="mt-5 flex justify-center">
    <form @submit.prevent="onSubmit">
        <div class="shadow sm:rounded-md sm:overflow-hidden px-3">
          <div class="px-4 py-5 bg-gray-50 space-y-6 sm:p-6">
            <div class="grid grid-cols-1 gap-6"> 
              <div class="mb-4">
              <label for="description" class="block text-sm mb-2" id="text">
                  Nome
              </label>
              <input v-model="form.name" type="text" required class="shadow appearance-none border rounded w-full py-2 px-5 text-grey-darker">
              </div>
              <div class="mb-4">
                <label for="description" class="block text-sm mb-2" id="text">
                  Valor
              </label>
              <input v-model="form.valuep" type="number" required class="shadow appearance-none border rounded w-full py-2 px-5 text-grey-darker">
              </div>
            </div>
                    <!-- Submit Button -->
            <div class="px-4 py-3 text-center sm:px-6">
              <button type="submit" id="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-2xl text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-indigo-500 hover:bg-indigo-900">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import { createProduct } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '', valuep: '' })

    const onSubmit = async () => {
      await createProduct({ ...form })
      form.name = ''
      form.valuep = ''
    }

    return { form, onSubmit }
  }
}
</script>
