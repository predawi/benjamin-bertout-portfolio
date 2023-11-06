<template>
	<div>
		<nav id="nav" :class="{ 'nav nav--open': isToggled, 'nav nav--close': !isToggled }">
			<div class="nav__inner">
				<div id="burger" @click="isToggled = !isToggled">
					<button class="nav__button">Menu</button>
				</div>

				<ul class="nav__list" type="none">
					<li class="nav__list-item">
						<NuxtLink to="/">home/projects</NuxtLink>
					</li>
					<li class="nav__list-item">
						<NuxtLink to="/about">about</NuxtLink>
					</li>
					<li class="nav__list-item">
						<NuxtLink to="/contact">contact</NuxtLink>
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
	}
};
</script>

<style lang="scss">
.nav {
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: var(--main-color);
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
        height: 100vh;
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
        padding-left: rem(38px);

        @include tablet {
            display: flex;
        }
    }

    &__list-item {
        margin-bottom: 5vh;
        font-size: rem(35px);
        font-weight: 400;
        font-family: 'Lexend', sans-serif;
        line-height: rem(77px);
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
            transition: .2s ease-out;

            &:hover,
            &:focus {
                color: var(--secondary-color);
            }

            &.router-link-active {
                color: var(--secondary-color);
            }
        }
    }
}
</style>