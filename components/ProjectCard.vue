<template>
    <div class="project-card js-project-card" id={{id}}>
        <a :href=link class="project-card__link" target="_blank">
            <div class="project-card__deco"></div>
            <h3 class="project-card__title">{{ title }}</h3>
            <span v-if="category" class="typo-category project-card__category">{{ category }}</span>
            <span v-if="team" class="typo-category project-card__team">Team: {{ team }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'project-card',
    props: ['link', 'title', 'category', 'team', 'key'],
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

        const projectCards = document.querySelectorAll('.js-project-card');
        for (const card of projectCards) {
            observer.observe(card);
        }
    },
}
</script>

<style lang="scss">
.project-card {
    position: relative;
    top: rem(10px);
    border-bottom: 1px solid rgba(#fff, 0.15);

    @include tablet {
        
    }

    &__link {
        position: relative;
        display: block;
        padding: rem(30px) 0;
        position: relative;
	    overflow: hidden;

        --x: 0px; 
	    --y: 0px;

        @include tablet {
            display: flex;
            align-items: flex-end;
            padding: rem(30px) 0 rem(10px);
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(rgb(0, 0, 0) 0%, rgb(23, 24, 37) 40%, rgb(226 188 181));
            background-position: -280px 15px;
            background-size: 200%;
            mix-blend-mode: darken;

            @include tablet {
                background-size: 130%;
            }
        }
    }

    &__deco {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        font-family: "input-mono", monospace;
        font-size: 0.85rem;
        word-wrap: break-word;
        line-height: 1.15;
        color: #fff;
        opacity: 0;
        -webkit-mask-image: radial-gradient(300px circle at var(--x) var(--y), black 0%, rgba(0,0,0,0.25), transparent);
        mask-image: radial-gradient(300px circle at var(--x) var(--y), black 0%, rgba(0,0,0,0.25), transparent);
    }

    &__title {
        position: relative;
        z-index: 1;
        margin: 0;
        font-weight: 300;
        line-height: rem(30px);
        font-size: rem(24px);

        @include tablet {
            margin-right: rem(30px);
            line-height: rem(40px);
            font-size: rem(26px);
        }
    }

    &__category,
    &__team {
        display: block;
        position: relative;
        z-index: 1;
        color: var(--secondary-color);

        @include tablet {
            display: inline;
            margin-top: 0;
            position: relative;
            top: -6px;
        }
    }

    &__category {
        margin-top: rem(10px);

        @include tablet {

        }
    }

    &__team {
        color: var(--tertiary-color);

        @include tablet {
            margin-left: rem(30px);
        }
    }
}
</style>
