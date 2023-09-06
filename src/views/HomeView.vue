<template>
  <div class="home">
    <h1>Reactive vs ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>
    <button @click="changeIronman">Iron man</button>
    <button @click="changeHulk">Hulk</button>

    <h3>ironman: {{ ironmanIsAlive }}</h3>
    <h3>hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Change state</button>

  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const ironman = ref({ name: "tony", edad: 50 });
    const hulk = reactive({ name: "Bruce", edad: 50 });
    const ironmanIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      // ironmanIsAlive = !ironmanIsAlive;
      hulkIsAlive.value = !hulkIsAlive.value;
    };

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,

      changeIronman: () => {
        ironman.value.name = "tony stark";
        ironman.value.edad = "55";
      },
      changeHulk: () => {
        hulk.name = "Bruce baner";
        hulk.edad = "45";
      },
      changeStatus
    };
  },
};
</script>
