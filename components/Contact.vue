<template>
    <div class="contact">
        <div class="container">
            <h1 class="typo-t1 contact__title">Let's get in <span class="secondary-color">touch</span></h1>

            <ul class="contact__list">
                <li class="contact__item"><a href="https://www.malt.fr/profile/benjaminbertout" target="_blank">MALT</a></li>
                <li class="contact__item"><a href="https://www.linkedin.com/in/benjamin-bertout-04634441" target="_blank">LINKEDIN</a></li>
                <li class="contact__item secondary-color">bertout.benjamin@gmail.com</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
export default {
	name: 'Contact',
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-delay');
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(document.querySelector('.contact') as HTMLElement);
    }
}
</script>

<style lang="scss">
.contact {
    position: relative;
    top: rem(10px);
    opacity: 0;
    margin-top: rem(60px);
    margin-bottom: rem(100px);

    @include tablet {
        margin-top: 0;
        padding-top: rem(128px);
    }

    &__title {
        
    }

    &__list {
        padding: rem(30px) 0 rem(20px);
        border-bottom: 1px solid var(--main-grey);
        list-style: none;

        @include tablet {
            display: flex;
            flex-wrap: wrap;
            padding: rem(50px) 0 rem(40px);
            list-style: disc;
            list-style-position: inside;
        }
    }

    &__item {
        margin-right: rem(87px);
        margin-bottom: rem(10px);
        line-height: rem(18px);
        font-size: rem(14px);
        font-weight: 500;
        text-transform: uppercase;

        @include tablet {
            padding-left: rem(4px);
        }

        a {
            &:hover,
            &:focus {
                color: var(--tertiary-color);
            }
        }
    }
}
</style>