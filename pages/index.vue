<template>
  <div>
    <Intro/>
    <Projects/>
    <Clients/>
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue';
import Projects from '~/components/Projects.vue';
import Clients from '~/components/Clients.vue';

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    Intro,
    Projects,
    Clients,
  },
}
</script>
