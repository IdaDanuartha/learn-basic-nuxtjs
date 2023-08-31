export default defineEventHandler(async (event) => {
    // // Handle query params
    // const { name } = useQuery(event)
    
    // // Handle post data
    // const { age } = await useBody(event)

    // return {
    //     message: `Hello ${name}! You are ${age} years old`
    // }

    const { apiKey } = useRuntimeConfig()
    // api call with private key
    const data = await $fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`)

    return data
})