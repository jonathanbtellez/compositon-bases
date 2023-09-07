<template >
  <h2 v-if="isLoading">Espere por favor</h2>
  <h2 v-else>Users</h2>
  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>
  <div class="pagination">
    <button @click="previosPage">Previos</button>
    <span>Page {{ currentPage }}</span>
    <button @click="nextPage">Next</button>
  </div>
</template>
<script>
import useUsers from "../composables/useUsers";
export default {
  setup() {
    const { currentPage, isLoading, users, nextPage, previosPage } = useUsers();

    return {
      currentPage,
      isLoading,
      nextPage,
      previosPage,
      users,
    };
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}

.pagination {
  margin: auto;
  display: flex;
  width: 80%;
  justify-content: space-between;
}
</style>