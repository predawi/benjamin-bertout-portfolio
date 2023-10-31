<template>
    <div class="project-card">
        <a :href=link class="project-card__link" target="_blank">
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
    border-bottom: 1px solid rgba($textcolor, 0.15);

    @include tablet {
        
    }

    &__link {
        position: relative;
        display: block;
        padding: rem(30px) 0 rem(10px);

        @include tablet {
            display: flex;
            align-items: flex-end;
        }
    }

    &__title {
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
        margin-top: rem(16px);
        color: $secondary;

        @include tablet {
            margin-top: 0;
            position: relative;
            top: -6px;
        }
    }

    &__team {
        color: $tertiary;

        @include tablet {
            margin-left: rem(30px);
        }
    }
}
</style>
