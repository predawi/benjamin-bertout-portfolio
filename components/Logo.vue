<template>
    <div class="header__logo">
        <NuxtLink to="/">
            <img src="~/assets/ui/bbertout-logo.png" class="header__logo-img" alt="Discover Nuxt 3" width="65" height="60" />
            <div class="header__logo-text">
                <span class="header__logo-name">Benjamin Bertout</span>
                <span class="header__logo-job">Front-end developer</span>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header__logo {
    position: relative;
    z-index: 998;
    display: inline-flex;

    @include tablet {
        
    }

    & > a {
        display: flex;
        align-items: center;
    }

    &-img {
        width: 50px;
        height: auto;
        margin-right: rem(16px);

        @include tablet {
            width: 65px;
        }
    }

    &-text {
        display: flex;
        flex-flow: column;
        font-family: 'Lexend', sans-serif;

        .nav-is-opened & {
            @include mobile {
                color: var(--bg-nav);
            }
        }
    }

    &-name {
        line-height: rem(30px);
        font-size: rem(18px);
        font-weight: 300;

        @include tablet {
            line-height: rem(40px);
            font-size: rem(30px);
        }
    }

    &-job {
        font-weight: 300;
        font-size: rem(13px);

        @include tablet {
            font-size: rem(14px);
        }
    }
}
</style>