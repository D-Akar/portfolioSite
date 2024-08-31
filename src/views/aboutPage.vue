<template>
    <header class="darkestBlue px-72">
        <page-header />
    </header>
    <body>
        <div class="w-screen darkestBlue flex flex-col contentContainer justify-center text-white">
            <divider-line class="px-72" />
            <div class="w-screen darkestBlue flex flex-col flex-0" id="contentBlock">
                <transition name="fade-slide" mode="out-in" appear>
                    <div :key="selectedInfo" class="flex flex-col flex-1 justify-center">
                        <div v-if="selectedInfo == 0" data-index="0" class="slide justify-center items-center flex">
                            <about-me-info />
                        </div>
                        <div v-if="selectedInfo == 1" data-index="1" class="slide justify-center items-center flex">
                            <skill-set-info />
                        </div>
                        <div v-if="selectedInfo == 2" data-index="2" class="slide">
                            <cv-info />
                        </div>
                    </div>
                </transition>
            </div>
            <divider-line class="px-72" direction="right" />
            <div id="footerSelection" class="flex text-white px-72 py-16 max-h-4">
                <div class="w-1/5 border-r-1 items-center justify-center text-center flex flex-1">
                    <button @click="updateSelection('decrement')" class="hover-move-left">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
                <div class="w-3/5 items-center justify-center text-center space-x-4 pb-2 flex">
                    <p v-if="selectedInfo == 0">About Me</p>
                    <p v-else-if="selectedInfo == 1">Tech Stack and Tools</p>
                    <p v-else-if="selectedInfo == 2">CV</p>
                </div>
                <div class="w-1/5 border-r-1 items-center justify-center text-center flex flex-1">
                    <button @click="updateSelection('increment')" class="hover-move-right">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import aboutMeInfo from '../views/aboutMe/aboutMe.vue';
import skillSetInfo from '../views/aboutMe/skillset.vue';
import cvInfo from '../views/aboutMe/cv.vue';
import pageHeader from '../components/header.vue';
import dividerLine from '../components/dividerLine.vue';

export default {
    name: 'aboutMe',
    data() {
        return {
            selectedInfo: 0
        };
    },
    components: {
        pageHeader,
        aboutMeInfo,
        dividerLine,
        skillSetInfo,
        cvInfo
    },
    methods: {
        updateSelection(direction) {
            const currentDiv = this.getDivByIndex(this.selectedInfo);
            currentDiv.classList.add(direction === 'decrement' ? 'off-right' : 'off-left');

            this.selectedInfo = (this.selectedInfo + (direction === 'decrement' ? -1 : 1) + 3) % 3;

            const newDiv = this.getDivByIndex(this.selectedInfo);
            newDiv.classList.add(direction === 'decrement' ? 'off-left' : 'off-right');
        },

        getDivByIndex(index) {
            return document.querySelector(`div[data-index='${index}']`);
        }
    },
    mounted() {
        const headerBlock = document.getElementById('headerBlock');
        const contentBlock = document.getElementById('contentBlock');
        const footerSelection = document.getElementById('footerSelection');

        setTimeout(() => {
            headerBlock.classList.add('is-loaded');
            contentBlock.classList.add('is-loaded');
            contentBlock.classList.add('flex-1');
            footerSelection.classList.add('is-loaded');
        }, 1500);
    }
};
</script>

<style>
header {
    height: 10%;
}

body {
    min-height: 90%;
}

#footerLine {
    width: 100%;
    /* Width */
    transition: transform 1s ease;
    /* Transition duration set to 1 second */
    transform: scaleX(0);
    /* Start with scale 0 */
}

#content {
    margin-bottom: auto;
}

#footerSelection,
#headerBlock {
    opacity: 0;
}

#contentBlock {
    opacity: 0;
    height: 20px !important;
}

#footerSelection.is-loaded,
#contentBlock.is-loaded,
#headerBlock.is-loaded {
    opacity: 1;
    height: auto;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s;
}

.hover-move-left:hover i {
    transform: translateX(-5px);
    transition: transform 0.3s ease;
}

.hover-move-right:hover i {
    transform: translateX(5px);
    transition: transform 0.3s ease;
}
</style>
