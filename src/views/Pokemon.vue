<template >
    <h1 v-if="!pokemon && !errorMessage">
        Buscando....
    </h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.other.dream_world.front_default" alt="Pokemon image">
        <br>
        <router-link :to="{ name: 'pokemon-search' }">Go to search</router-link>
    </template>
</template>
<script>
import { useRoute,  onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composables/usePokemon.js'
import { watch } from 'vue'
export default {
    setup() {
        // Get route info
        const route = useRoute()

        // use composable to get the information
        const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(route.params.id)

        watch(
            // listening change is this reactive prop
            () => route.params.id,
            // Excecute when the reactive prop change
            () => searchPokemon(route.params.id)
        )

        onBeforeRouteLeave(()=>{
            const answer = window.confirm('¿Are you sure?')
            // To avoid left of the current route we must return false otherwise the user could leave
            if(answer) return false
        })
        return {
            pokemon, isLoading, errorMessage
        }
    }

}
</script>