import { ref } from "vue";

// Create a composable
const useCounter = (value = 10) => {
  const counter = ref(value);

  return {
    counter,
    increase: () => counter.value++,
    decrease: () => counter.value--,
  };
};

export default useCounter;
