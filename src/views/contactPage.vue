<template>
    <header class="darkestBlue px-8 md:px-16 lg:px-32 2xl:px-72">
        <page-header class="hidden md:flex" />
        <mobileMenu class="block md:hidden" position="top-center" />
    </header>

    <body>
        <div class="w-screen darkestBlue flex flex-col contentContainer justify-center text-white contentBlock">
            <h3 class="text-4xl text-center">
                You can reach me <a href="mailto:derinaliakar@gmail.com"
                    class="text-red-500 hover:text-red-300 hover:animate-pulse">here</a>.
            </h3>
        </div>
    </body>
</template>

<script>
import pageHeader from '../components/header.vue';
import mobileMenu from '../components/mobileMenu.vue';

export default {
    name: 'contactMe',
    components: {
        pageHeader,
        mobileMenu
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
        }, 0);
    }
}
</script>