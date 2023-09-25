<template>
    <h1>
        Thanos todo list
    </h1>

    <!-- Acceding to the state from template -->
    <h4>Pendientes: {{ pending.length }}</h4>

    <hr>
    <h4>Todos: {{ all.length }}</h4>
    <h4>completados: {{ completed.length }}</h4>

</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){

        const store = useStore()
        
        return {
            pending: computed(()=> store.getters['pendingTodos']),
            all: computed(()=> store.getters['allTodos']),
            completed: computed(()=> store.getters['completedTodos'])
        }
    }
}
</script>
<style></style>