<template>
    <div class="grid grid-cols-2 gap-5">
        <div class="mr-5">
            <img :src="product.image" class="w-full" alt="">
        </div>
        <div>
            <h3 class="text-4xl font-bold mb-10" v-html="product.title"></h3>
            <h6 class="bg-gray-500 text-white inline-block px-5 py-2 capitalize mb-3 rounded-lg" v-html="product.category"></h6>
            <p class="text-xl" v-html="product.description"></p>
            <hr class="my-5">
            <h6 class="text-lg" v-html="`$${product.price}`"></h6>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)

</script>

<style lang="scss" scoped>

</style>