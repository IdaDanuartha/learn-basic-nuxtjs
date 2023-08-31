<template>
    <div class="container mx-auto my-5 shadow-md bg-gray-50 max-w-sm text-center p-5">
        <h1 class="font-bold text-4xl">{{ error.statusCode }}</h1>
        <h1 class="font-semibold text-xl">Ooopsss</h1>
        <h1 class="font-bold text-lg text-red-500">{{ error.message }}</h1>
        <div class="mt-5">
        <button @click="handleError()" class="mt-5 bg-green-100 text-green-600 px-4 py-2 rounded-lg duration-200 border-0 hover:border hover:border-green-500 focus:bg-green-200">            
            Back to Home            
        </button>
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleError = () => clearError({ redirect: '/' })

</script>

<style scoped>

</style>