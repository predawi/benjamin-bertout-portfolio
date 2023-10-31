<template>
	<footer class="footer" id="footer">
		<div class="footer__inner">
			<FooterNav />
		</div>
	</footer>
</template>

<script>
import FooterNav from '~/components/FooterNav.vue';

export default {
	components: {
		FooterNav,
	}
};
</script>

<style lang="scss">
.footer {
	margin-top: rem(120px);
    padding: rem(30px) rem(25px);

    @include tablet {
		margin-top: rem(180px);
        padding: rem(42px) rem(65px);
    }

    &__inner {
		display: flex;
		justify-content: center;

        @include tablet {
            display: flex;
			justify-content: flex-start;
        }
    }
}
</style>

  