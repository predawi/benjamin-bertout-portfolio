<script setup>
useHead({
	bodyAttrs: {
		class: 'project-template'
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
	},
};
</script>

<style lang="scss">
.project-template {
	.container {
		@include tablet {
			max-width: 1060px;
		}
	}
}
</style>
