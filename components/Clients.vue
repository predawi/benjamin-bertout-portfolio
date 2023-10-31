<template>
	<section class="clients">
		<div class="container">
            <div class="clients__wrapper">

                <div class="clients__content">
                    <h2 class="typo-t2 clients__title">Some other clients</h2>

                    <p class="clients__list">Chanel . Société Générale . NRJ . Fnac/Darty . Jaeger-Lecoultre . Gucci . Coty . Schoolab . Ippon Technologies . 34 Studio . 6freedom . AFER</p>
                </div>
            </div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Clients'
}
</script>

<style lang="scss">
.clients {
    margin-top: rem(90px);

    @include tablet {
        margin-top: rem(180px);
    }

    &__wrapper {
        position: relative;
        max-width: 450px;
        margin: auto;
    }

    &__content {
       text-align: center;
    }

    &__list {
        margin-top: rem(30px);
        line-height: rem(30px);
        font-size: rem(20px);
    }
}
</style>
