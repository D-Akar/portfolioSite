<template>
    <header class="darkestBlue px-72 text-white">
        <page-header />
    </header>
    <body>
        <div class="w-screen darkestBlue flex flex-col contentContainer justify-center text-white">
            <divider-line class="px-72" direction="right" />
        </div>
    </body>
</template>

<script>
import pageHeader from '../components/header.vue';
import dividerLine from '../components/dividerLine.vue';

export default {
    name: 'portfolioPage',
    components: {
        pageHeader,
        dividerLine
    },
    mounted() {
        const headerBlock = document.getElementById('headerBlock');
        setTimeout(() => {
            headerBlock.classList.add('is-loaded');
        }, 1500);
    }
};
</script>

<style>

</style>
