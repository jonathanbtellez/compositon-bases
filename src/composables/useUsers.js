import axios from "axios";
import { ref } from "vue";

const useUsers = () => {
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

    const pages = data.total_pages;

    if (data.data.length > 0) {
      users.value = data.data;
      currentPage.value = page;
      isLoading.value = false;
    } else if (page >= pages) {
      page = pages;
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
};

export default useUsers;
