<template>
    <div class="container mx-auto my-10">
      <div class="flex justify-center bg-gray-800 text-gray-100 p-5 rounded-lg">
        <div>
            <h5 class="font-bold uppercase">Products Page</h5>
        </div>
      </div>
  
      <div class="mt-5">
        <ul class="flex justify-center">
            <li class="text-xl mx-5 text-green-500 hover:text-green-300 duration-200">
                <NuxtLink class="link" to="/products/1">Product 1</NuxtLink>
            </li>
            <li class="text-xl mx-5 text-green-500 hover:text-green-300 duration-200">
                <NuxtLink class="link" to="/products/2">Product 2</NuxtLink>
            </li>
            <li class="text-xl mx-5 text-green-500 hover:text-green-300 duration-200">
                <NuxtLink class="link" to="/products/3">Product 3</NuxtLink>
            </li>
        </ul>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>