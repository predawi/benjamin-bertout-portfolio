<template>
    <div>
        <nav id="nav" :class="{ 'nav nav--open': isToggled, 'nav nav--close': !isToggled }">
            <div class="nav__inner">
                <div id="burger" @click="menuClicked">
                    <button class="nav__button">Menu</button>
                </div>

                <ul class="nav__list" type="none">
                    <li class="nav__list-item">
                        <NuxtLink to="/" @click="menuClicked">home/projects</NuxtLink>
                    </li>
                    <li class="nav__list-item">
                        <NuxtLink to="/about" @click="menuClicked">about</NuxtLink>
                    </li>
                    <li class="nav__list-item">
                        <NuxtLink to="/contact" @click="menuClicked">contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            isToggled: false,
        }
    },
    methods: {
        menuClicked: function () {
            this.isToggled = !this.isToggled;
            
            document.body.classList.toggle('nav-is-opened')
            //document.querySelector('#nav').classList.toggle('nav--open')
        }
    }
};
</script>

<style lang="scss">
.nav {
    position: fixed;
    z-index: 997;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: var(--bg-nav);
    overflow: hidden;
    transition: height 1s $expoInOut;

    @include tablet {
        position: relative;
        display: flex;
        align-items: center;
        width: auto;
        height: 100%;
        background: none;
    }

    &.nav--open {
        @include mobile {
            height: 100vh;
        }
    }

    &__inner {
        padding-top: rem(100px);

        @include tablet {
            padding: 0;
        }
    }

    &__button {
        position: fixed;
        z-index: 999;
        top: rem(30px);
        right: rem(25px);
        line-height: rem(30px);
        font-size: rem(14px);
        font-weight: 400;
        font-family: 'Lexend', sans-serif;
        color: var(--text-color);

        @include tablet {
            display: none;
        }
    }

    &__list {
        margin: rem(60px) 0 0;
        padding-left: rem(38px);

        @include tablet {
            display: flex;
            margin: 0;
        }
    }

    &__list-item {
        font-size: rem(25px);
        font-weight: 400;
        font-family: 'Lexend', sans-serif;
        line-height: rem(50px);
        word-break: break-word;
        text-transform: capitalize;

        @include tablet {
            margin-left: rem(30px);
            margin-bottom: 0;
            line-height: rem(18px);
            font-size: rem(14px);
            text-transform: none;
        }

        a {
            color: var(--text-color);

            &:hover,
            &:focus {
                color: var(--tertiary-color);
            }

            &.router-link-active {
                color: var(--secondary-color);
                cursor: default;
            }
        }
    }
}
</style>