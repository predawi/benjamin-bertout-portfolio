<template>
    <div>
        <h2 class="typo-t2">Feel free to contact me</h2>
        <nav class="footer-nav__nav">
            <ul class="footer-nav__list">
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
    &__list {
        display: flex;
        margin-top: rem(30px);
    }

    &__list-item {
        margin: 0 rem(30px) 0 0;
        line-height: rem(18px);
        font-size: rem(14px);
        font-weight: 400;

        a {
            color: $textcolor;
        }
    }
}

</style>