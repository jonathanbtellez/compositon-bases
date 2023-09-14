<template >
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <input
          type="number"
          placeholder="Numero del pokemon"
          ref="txtSearchId"
          v-model="pokemonId"/>
    </form>
    <br>
    <span>Presione enter para buscar</span>
</template>
<script>
import { onActivated, ref } from 'vue';
import { useRouter } from 'vue-router'

export default {
    setup() {
        // To navigate we need use the router object
        const router = useRouter()
        const pokemonId = ref(1)

        // Get the reference to a html element
        const txtSearchId = ref()

        onActivated(()=>{
            // Put the attr selected to a html element ref
            // SElected attr put the focus in the field and select automatically the value
            txtSearchId.value.select()
        })

        return {
            pokemonId,
            txtSearchId,
            onSubmit: () => {
                // console.log('Pokemon a buscar', pokemonId.value);

                // Use method push to navigate to especify path
                router.push({name: 'pokemon-id', params: { id: pokemonId.value}})
            }
        }
    }
}
</script>
