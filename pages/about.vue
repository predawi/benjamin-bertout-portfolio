<template>
  <div>
    <AboutMe />
    <AboutMePassion />
  </div>
</template>
<script>
definePageMeta({ layout: 'default' })

import AboutMe from '~/components/AboutMe.vue';
import AboutMePassion from '~/components/AboutMePassion.vue';

export default {
  name: 'about',
  components: {
    AboutMe,
    AboutMePassion,
  },
}
</script>
