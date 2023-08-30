<template>
  <div>
    <NuxtLink class="link" to="/">Home</NuxtLink>
    <NuxtLink class="link" to="/about">About</NuxtLink>
    <NuxtLink class="link" to="/products">Products</NuxtLink>

    <NuxtPage />
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}
</style>