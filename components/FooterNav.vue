<template>
    <div>
        <h2 class="typo-t2 footer-nav__title">Feel free to contact me</h2>
        <nav class="footer-nav__nav">
            <ul class="footer-nav__list" type="none">
                <li class="footer-nav__list-item">
                    <a href="https://www.malt.fr/profile/benjaminbertout" target="_blank"><span>malt</span></a>
                </li>
                <li class="footer-nav__list-item">
                    <a href="www.linkedin.com/in/benjamin-bertout-04634441" target="_blank"><span>linkedIn</span></a>
                </li>
                <li class="footer-nav__list-item">
                    <NuxtLink to="/contact">email</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
.footer-nav {
    &__title {
        text-align: center;

        @include tablet {
            text-align: left;
        }
    }
    
    &__list {
        display: flex;
        margin-top: rem(30px);
        justify-content: center;
    }

    &__list-item {
        margin: 0 rem(15px);
        line-height: rem(18px);
        font-size: rem(14px);
        font-weight: 400;

        @include tablet {
            margin: 0 rem(30px) 0 0;
        }

        a {
            color: var(--text-color);

            &:hover,
            &:focus {
                color: var(--tertiary-color);
            }
        }
    }
}

</style>