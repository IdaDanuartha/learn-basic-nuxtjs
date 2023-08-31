<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
// const data = await useFetch("/api/omdb?name=Danuartha", {
//     method: "post",
//     body: { age: 19 }
// })

const { data } = await useFetch("/api/omdb")

console.log(data)
</script>