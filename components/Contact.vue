<template>
    <div class="contact">
        <div class="container">
            <h1 class="typo-t1 contact__title">Let’s Team up</h1>

            <div class="contact__description">
                <p>Looking for a freelance Senior product designer, UX designer, CX designer ? <strong>Get in touch with me</strong></p>
            </div>

            <ul class="contact__list">
                <li class="contact__item"><a href="#" target="_blank">LINKEDIN</a></li>
                <li class="contact__item"><a href="#" target="_blank">MALT</a></li>
                <li class="contact__item">email@email.com</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
	name: 'Contact'
}
</script>

<style lang="scss">
.contact {
    position: relative;
    margin-bottom: rem(100px);
    padding-top: rem(128px);

    @include tablet {
        
    }

    &__title {
        line-height: rem(86px);
        font-size: rem(72px);

        @include tablet {
            line-height: rem(188px);
            font-size: rem(100px);
        }
    }

    &__description {
        margin-top: rem(30px);
        padding: rem(30px) 0;
        line-height: rem(24px);
        font-size: rem(20px);
        font-weight: 100;
        border-top: 1px solid #2A3E25;
        border-bottom: 1px solid #2A3E25;

        @include tablet {
            margin-top: 0;
        }

        p {
            max-width: 617px;
        }

        strong {
            font-weight: 300;
        }
    }

    &__list {
        padding: rem(30px) 0 rem(20px);
        border-bottom: 1px solid #2A3E25;

        @include tablet {
            display: flex;
            flex-wrap: wrap;
            padding: rem(50px) 0 rem(40px);
        }
    }

    &__item {
        margin-right: rem(87px);
        margin-bottom: rem(10px);
        line-height: rem(18px);
        font-size: rem(14px);
        font-weight: 500;
        text-transform: uppercase;
    }
}
</style>