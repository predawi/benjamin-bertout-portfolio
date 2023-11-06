<template>
  <div>
    <Contact />
  </div>
</template>


<script>
definePageMeta({ layout: 'default' })

import Contact from '~/components/Contact.vue';

export default {
  name: 'ContactPage',
  components: {
    Contact,
  }
}
</script>
