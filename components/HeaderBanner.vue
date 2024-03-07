<template>
	<header class="header" id="header">
		<div class="header__inner">
			<Logo />
			<BaseNav />
		</div>
	</header>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue';
import BaseNav from '~/components/BaseNav.vue';

export default {
	components: {
		Logo,
		BaseNav,
	},
};
</script>

<style lang="scss">
.header {
    padding: rem(30px) rem(25px);

    @include tablet {
        padding: rem(30px) rem(65px);
    }

    &__inner {
        @include tablet {
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
  