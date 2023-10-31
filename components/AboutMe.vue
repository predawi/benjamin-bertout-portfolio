<template>
    <section class="about-me">

        <div class="container about-me__container">
            <h1 class="typo-t1 about-me__title">About me</h1>

            <img src="/about-me.png" class="typo-t1 about-me__picture" alt="" loading="lazy">

            <p class="typo-p about-me__description">I’m a Senior Frontend developer</p>
        </div>
    </section>
</template>

<script>
export default {
	name: 'AboutMe'
}
</script>

<style lang="scss">
.about-me {
    position: relative;
    margin-top: rem(30px);

    @include tablet {
        margin-top: rem(150px);
    }

    &__bg {
        position: absolute;
        z-index: -1;
        top: rem(-100px);
        left: 0;
        
        svg {
            max-width: 100%;
        }
    }

    &__container.container {
        position: relative;

        @include tablet {
            max-width: 620px;
            padding: 0;
        }  
    }

    &__picture {
        display: block;
        max-width: 220px;
        margin: rem(50px) auto 0;

        @include tablet {
            position: absolute;
            top: rem(-70px);
            right: rem(-200px);
            margin-top: 0;
        }
    }

    &__description {
        margin-top: rem(50px);
        line-height: rem(32px);
        font-size: rem(25px);

        @include tablet {
            margin-top: rem(70px);
            line-height: rem(44px);
            font-size: rem(34px);
        }
    }

    &__star {
        margin-top: rem(74px);
        text-align: center;

        @include tablet {
            margin-top: rem(114px);
        }
    }
}
</style>
