<template>
    <header class="darkestBlue px-72">
        <page-header />
    </header>

    <body>
        <div class="w-screen darkestBlue flex flex-col contentContainer justify-center text-white transition-container">
            <divider-line class="px-72" />
            <div class="w-screen darkestBlue flex flex-col flex-0" id="contentBlock">
                <transition name="fade-slide" mode="out-in" appear>
                    <div :key="selectedInfo" class="flex flex-col flex-1 justify-center">

                        <div v-if="selectedInfo == 0" data-index="0" class="slide justify-center items-center flex">
                            <skill-set-info />
                        </div>
                        <div v-if="selectedInfo == 1" data-index="1" class="slide">
                            <cv-info />
                        </div>
                    </div>
                </transition>
            </div>
            <divider-line class="px-72" direction="right" />
            <div id="footerSelection" class="flex text-white px-72 py-16 max-h-4">
                <div class="w-1/5 border-r-1 items-center justify-center text-center flex flex-1">
                    <button @click="updateSelection('decrement')" class="hover-move-left">
                        <i class="fas fa-chevron-left fa-lg"></i>
                    </button>
                </div>
                <div class="w-3/5 items-center justify-center text-center space-x-4 pb-2 flex text-4xl font-bold">
                    <p v-if="selectedInfo == 0">Tech Stack and Tools</p>
                    <p v-else-if="selectedInfo == 1">CV</p>
                </div>
                <div class="w-1/5 border-r-1 items-center justify-center text-center flex flex-1">
                    <button @click="updateSelection('increment')" class="hover-move-right">
                        <i class="fas fa-chevron-right fa-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
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
        dividerLine,
        skillSetInfo,
        cvInfo
    },
    methods: {
        updateSelection(direction) {
            const currentDiv = this.getDivByIndex(this.selectedInfo);
            currentDiv.classList.add(direction === 'decrement' ? 'off-right' : 'off-left');

            this.selectedInfo = (this.selectedInfo + (direction === 'decrement' ? -1 : 1) + 2) % 2;

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

<style></style>
