<template>
    <section class="passion">
        
        <div class="passion__container">
            <h1 class="typo-t2 passion__title">Passion</h1>

            <p class="typo-p passion__description">Epicurean . Tech enthusiast . Music addict . Cat owner . Jurassic Park fanatic</p>
        </div>

    </section>
</template>

<script>
export default {
	name: 'AboutMePassion'
}
</script>

<style lang="scss">
.passion {
    position: relative;
    margin-top: rem(30px);

    @include tablet {
        margin-top: rem(150px);
    }

    &__container {
        position: relative;
        margin: auto;
        text-align: center;

        @include tablet {
            max-width: 620px;
            padding: 0 rem(146px);
        }
    }

    &__description {
        max-width: 450px;
        margin: rem(30px) auto 0;
        padding: 0 rem(25px);
        line-height: rem(30px);
        font-size: rem(20px);
        font-weight: 400;

        @include tablet {
            padding: 0;
        }
    }
}
</style>
