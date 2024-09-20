<script setup>
</script>

<template>
    <header class="darkestBlue px-72 text-white">
        <page-header />
    </header>

    <body>
        <div class="w-screen darkestBlue flex flex-col contentContainer justify-center text-white">
            <h3 class="text-4xl text-center">
                You can reach me <a href="mailto:derinaliakar@gmail.com"
                    class="text-red-500 hover:text-red-300 hover:animate-pulse">here</a>.
            </h3>
        </div>
    </body>
</template>

<script>
import pageHeader from '../components/header.vue';
export default {
    name: 'contactMe',
    components: {
        pageHeader
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
}
</script>