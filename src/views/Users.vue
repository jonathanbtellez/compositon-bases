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
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const currentPage = ref(1);
    const isLoading = ref(true);
    const users = ref([]);

    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1;

      isLoading.value = true;

      const { data } = await axios("https://reqres.in/api/users", {
        params: {
          page,
        },
      });

      const pages  = data.total_pages;

      if (data.data.length > 0) {
        users.value = data.data;
        currentPage.value = page;
        isLoading.value = false;
      } else if (page >= pages) {
        page = pages
        currentPage.value = page;
        isLoading.value = false;
      }
    };

    getUsers();

    return {
      currentPage,
      isLoading,
      users,

      nextPage: () => getUsers(currentPage.value + 1),
      previosPage: () => getUsers(currentPage.value - 1),
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

.pagination{
    margin: auto;
    display: flex;
    width: 80%;
    justify-content: space-between;
}
</style>