<script setup>
useHead({
	bodyAttrs: {
		class: 'contact-template'
	},
})
</script>

<template>
	<div>
		<HeaderBanner />
			<slot />
		<Footer />
	</div>
</template>

<script>
import HeaderBanner from '~/components/HeaderBanner.vue';
import Footer from '~/components/Footer.vue';

export default {
	components: {
		HeaderBanner,
		Footer,
	}
};
</script>

<style lang="scss">
.contact-template {
	background: #D9D9D9;
}
</style>
