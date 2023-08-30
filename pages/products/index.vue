<template>
    <div class="grid grid-cols-4 gap-10">
        <ProductCard :products="products" />
    </div>
</template>

<script setup>
// definePageMeta({
//     layout: 'products'
// })
const { data: products } = useFetch('https://fakestoreapi.com/products')
console.log(products)
</script>

<style lang="scss" scoped>

</style>