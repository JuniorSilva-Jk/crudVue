<template>
  <InsertProduct/>
  <ProductList /> 
  
</template>

<script>
import InsertProduct from '@/components/InsertProduct.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: { 
    ProductList, 
    InsertProduct
  }
}
</script>