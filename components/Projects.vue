<template>
	<section class="projects">
		<div class="container">
			<h2 class="typo-t2 projects-title">My latest projects</h2>

			<p class="typo-p">I’ve been creating websites for more than 5 years in freelance. I had the chance to work for a lot of different industries and companies.</p>

            <div class="projects-list">
                <project-card
					v-for="(project, index) in projects"
					:key="project.slug + index"
					:link="project.link"
					:title="project.title"
					:category="project.category"
					:team="project.team"
				>
				</project-card>
            </div>

		</div>
	</section>
</template>

<script>
import projects from '../data/project-list.json';
import ProjectCard from '~/components/ProjectCard.vue'

export default {
	name: 'NuxtProjects',
	components: {
		ProjectCard,
  	},
      data() {
		return {
			projects,
		}
	},
}
</script>

<style lang="scss">
.projects {
    margin-top: rem(70px);
    overflow: hidden;

    @include tablet {
        margin-top: rem(180px);
    }

    &-title {
        margin-bottom: rem(50px);
    }

    &-row {
        display: flex;
        width: 100%;
        overflow: scroll;

        @include tablet {
            max-width: 900px;
            margin: auto;
        }

        .project-card {
            width: rem(324px);
            flex: 0 0 rem(324px);
            margin-left: rem(30px);

            @include tablet {
                flex: 0 1 34%;
                margin-left: 0;
            }

            &:first-of-type {
                margin-left: rem(25px);

                @include tablet {
                    margin-left: 0;
                    border-right: 0;
                }
            }

            &:last-of-type {
                margin-right: rem(25px);

                @include tablet {
                    margin-right: 0;
                    border-left: 0;
                }
            }
        }
    }

    &-list {
        margin-top: rem(50px);

        @include tablet {
            margin-top: rem(90px);
        }
    }
}
</style>

