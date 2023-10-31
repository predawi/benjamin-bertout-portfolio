<script setup>
useHead({
	bodyAttrs: {
		class: 'about-template'
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
.about-template {
	background: $blackcolor;
	color: #fff;
	transition: background-color .5s ease-out;

	.nav__button,
	a {
		color: #fff;
	}

	.nav__list-item a {
		@include tablet {
			color: #fff;
		}
	}
}
</style>
