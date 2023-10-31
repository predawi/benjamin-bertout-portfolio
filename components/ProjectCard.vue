<template>
    <div class="project-card">
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
    props: ['link', 'title', 'category', 'team'],
}
</script>

<style lang="scss">
.project-card {
    border-bottom: 1px solid rgba(#fff, 0.15);

    @include tablet {
        
    }

    &__link {
        position: relative;
        display: block;
        padding: rem(30px) 0 rem(10px);
        position: relative;
	    overflow: hidden;

        --x: 0px; 
	    --y: 0px;

        @include tablet {
            display: flex;
            align-items: flex-end;
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
            background-size: 130%;
            mix-blend-mode: darken;
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
        line-height: rem(40px);
        font-size: rem(26px);

        @include tablet {
            margin-right: rem(30px);
        }
    }

    &__category,
    &__team {
        position: relative;
        z-index: 1;
        margin-top: rem(16px);
        color: var(--secondary-color);

        @include tablet {
            margin-top: 0;
            position: relative;
            top: -6px;
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
