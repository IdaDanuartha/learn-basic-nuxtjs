<template>
    <div class="container mx-auto my-10">
      <div class="flex justify-between bg-gray-800 text-gray-100 p-5 rounded-lg">
        <div>
            <h5 class="font-bold uppercase">Nuxt App</h5>
        </div>
        <div>
            <NuxtLink class="link" to="/">Home</NuxtLink>
            <NuxtLink class="link" to="/about">About</NuxtLink>
            <NuxtLink class="link" to="/products">Products</NuxtLink>
        </div>
      </div>
  
      <div class="mt-5">
        <slot />
      </div>
    </div>
</template>
  
  <style scoped>
  .link {
    margin-right: 10px;
  }
  </style>