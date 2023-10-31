<template>
    <section class="passion">
        
        <div class="passion__container">
            <h1 class="typo-t2 passion__title">Passion</h1>

            <p class="typo-p passion__description">Food lover, musician...</p>
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
        padding: 0 rem(77px);

        @include tablet {
            max-width: 620px;
            padding: 0 rem(146px);
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 0;
            display: block;
            width: 42px;
            height: 100%;
            border: 1px solid $maincolor;

            @include tablet {
                width: 52px;
            }
        }

        &::before {
            left: 0;
        }
        
        &::after {
            right: 0;
        }
    }

    &__description {
        margin-top: rem(30px);
        line-height: rem(48px);
        font-size: rem(20px);

        @include tablet {
            line-height: rem(52px);
            font-size: rem(28px);
        }
    }

    &__cta {
        display: flex;
        align-items: center;
        color: #fff;
    }

    &__cta-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 57px;
        height: 57px;
        margin-right: rem(20px);
        border-radius: 50%;
        background: #fff;
    }

    &__cta-text {
        text-decoration: underline;
    }
}
</style>
