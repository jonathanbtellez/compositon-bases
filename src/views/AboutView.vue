<template>
  <div class="about">
    <h1>{{title}}</h1>
    <button @click="changeTitle">Change title</button>
  </div>
</template>
<script>
import { onActivated, onBeforeMount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUpdated, ref } from 'vue';
export default {
  setup() {
    const title = ref('About')

    onBeforeMount(()=>{console.log('beforeMount')})
    onMounted(()=>{console.log('Mounted')})
    onBeforeUpdate(()=>{console.log('beforeupdate')})
    onUpdated(()=>{console.log('updated')})
    onErrorCaptured(()=>{console.log('Error capture')})
    onRenderTracked(()=>{console.log('renderTRaked')})
    onRenderTriggered(()=>{console.log('rendertrgiger')})
    onActivated(()=>{console.log('activated')})
    onDeactivated(()=>{console.log('deactivadet')})

    return {
      title,
      changeTitle: ()=> title.value = 'About title'
    }
  },
};
</script>