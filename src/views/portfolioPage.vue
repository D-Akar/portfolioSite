<template>
    <header class="darkestBlue px-16 lg:px-32 2xl:px-72 text-white">
        <page-header />
    </header>

    <body>
        <div class="w-screen darkestBlue flex flex-col contentContainer justify-center text-white">

            <divider-line class="px-16 lg:px-32 2xl:px-72" />
            <div class="w-screen darkestBlue flex flex-col flex-0 items-center justify-center" id="contentBlock">
                <h3 class="text-4xl text-center">More information on projects coming soon!</h3>
            </div>
            <divider-line class="px-16 lg:px-32 2xl:px-72" direction="right" />
        </div>
    </body>
</template>

<script>
import pageHeader from '../components/header.vue';
import dividerLine from '../components/dividerLine.vue';

export default {
    name: 'portfolioPage',
    data() {
        return {
            selectedInfo: 0
        };
    },
    components: {
        pageHeader,
        dividerLine
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
