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
import { lerp, getMousePos, getRandomString } from '/assets/js/utils.js';

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

        document.querySelectorAll('.js-project-card').forEach((card) => {
            observer.observe(card);
        });

        // Initialize mouse position object
        let mousepos = {x: 0, y: 0};

        // Listen for mousemove events and update 
        // 'mousepos' with the current mouse position
        if (process.client) {
            window.addEventListener('mousemove', ev => {
                // Save the mouse position
                mousepos = getMousePos(ev);
            });
        }

        // Class representing a DOM element 
        // with some interactive behavior
        class Item {
            // Initialize DOM and style related properties
            DOM = {
                // main DOM element
                el: null,
                // decoration sub-element
                deco: null,
            };
            // tracks the x and y coordinates for animations
            renderedStyles = { 
                x: {previous: 0, current: 0, amt: 0.1},
                y: {previous: 0, current: 0, amt: 0.1}
            };
            // random string of 2000 chars
            randomString = getRandomString(2000);
            // tracks scroll position
            scrollVal;
            // tracks size and position of the DOM element
            rect;

            constructor(DOM_el) {
                this.DOM.el = DOM_el;
                this.DOM.deco = this.DOM.el.querySelector('.project-card__deco');
                // calculates initial size and position
                this.calculateSizePosition();
                // sets up event listeners
                this.initEvents();
            }

            // Calculate and store the current scroll 
            // position and size/position of the DOM element
            calculateSizePosition() {
                // current scroll
                this.scrollVal = {x: window.scrollX, y: window.scrollY};
                // size/position
                this.rect = this.DOM.el.getBoundingClientRect();
            }

            // Register event listeners for resize, mousemove, 
            // mouseenter and mouseleave
            initEvents() {
                // On resize, recalculate the size and position
                window.addEventListener('resize', () => this.calculateSizePosition());

                // On mousemove over the element, generate a 
                // new random string
                this.DOM.el.addEventListener('mousemove', () => {
                    // Get a new random string
                    this.randomString = getRandomString(2000);
                });

                // On mouseenter, fade in the deco element and 
                // start the animation loop
                this.DOM.el.addEventListener('mouseenter', () => {
                    gsap.to(this.DOM.deco, {
                        duration: .5,
                        ease: 'power3',
                        opacity: 1
                    });
                    const isFirstTick = true;
                    this.loopRender(isFirstTick);
                });
                
                // On mouseleave, stop the animation loop and 
                // fade out the deco element
                this.DOM.el.addEventListener('mouseleave', () => {
                    this.stopRendering();
                    
                    gsap.to(this.DOM.deco, {
                        duration: .5,
                        ease: 'power3',
                        opacity: 0
                    });
                });
            }

            // Request a new animation frame to start or 
            // continue the render loop
            loopRender(isFirstTick = false) {
                if ( !this.requestId ) {
                    this.requestId = requestAnimationFrame(() => this.render(isFirstTick));
                }
            }

            // Cancel any ongoing render loop
            stopRendering() {
                if ( this.requestId ) {
                    window.cancelAnimationFrame(this.requestId);
                    this.requestId = undefined;
                }
            }

            // Render the current frame
            render(isFirstTick) {
                // Clear requestId for the next frame
                this.requestId = undefined;
                
                // Calculate the difference between the current 
                // scroll position and the stored one
                const scrollDiff = {
                    x: this.scrollVal.x - window.scrollX,
                    y: this.scrollVal.y - window.scrollY
                };

                // Calculate the new translation values based on 
                // the mouse position, scroll difference and 
                // the element's position
                this.renderedStyles['x'].current = (mousepos.x - (scrollDiff.x + this.rect.left));
                this.renderedStyles['y'].current = (mousepos.y - (scrollDiff.y + this.rect.top));
                
                // If it's the first animation tick, set the 
                // previous values to be the same as the current ones
                if ( isFirstTick ) {
                    this.renderedStyles['x'].previous = this.renderedStyles['x'].current;
                    this.renderedStyles['y'].previous = this.renderedStyles['y'].current;
                }

                // Update the previous value to be a linear 
                // interpolation between the previous and current values
                for (const key in this.renderedStyles ) {
                    this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
                }
                
                // Apply the new styles to the DOM element 
                // using CSS variables
                gsap.set(this.DOM.el, {
                    '--x': this.renderedStyles['x'].previous,
                    '--y': this.renderedStyles['y'].previous
                });

                // Set the deco element's innerHTML to the random string
                this.DOM.deco.innerHTML = this.randomString;

                // Request the next frame
                this.loopRender();
            }
        }

        if (process.client) {
            [...document.querySelectorAll('.project-card__link')].forEach(img => new Item(img));
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
</style>~/public/js/utils.js
