<template class="darkestBlue">
    <header class="darkestBlue px-8 md:px-16 lg:px-32 2xl:px-72">
        <page-header class="hidden md:flex" />
        <mobileMenu class="block md:hidden" position="top-center" />
    </header>

    <body>
        <div class="w-screen darkestBlue flex flex-col contentContainer justify-center text-white">

            <divider-line />
            <div class="w-screen darkestBlue flex flex-col flex-0 items-center justify-center" id="contentBlock">
                <div v-for="project in projects" :key=project.name
                    class="flex flex-col flex-1 justify-center w-1/2 mb-4" id="projectContainer">
                    <div class="border rounded flex flex-row">
                        <div class="flex flex-col p-8 space-y-4">
                            <h2 class="text-2xl font-bold">{{ project.name }}</h2>
                            <p>{{ project.portfolioDescription }}</p>
                            <p v-if="project.moreInfo">
                                <a :href="project.moreInfoURL" class="text-red-500 hover:text-white">{{ project.moreInfo
                                    }}</a>
                            </p>
                            <div class="flex flex-row space-x-4">
                                <p v-for="tag in project.tags" class="border rounded text-sm px-4">
                                    {{ tag }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <divider-line direction="right" />
        </div>
    </body>
</template>

<script>
import pageHeader from '../components/header.vue';
import dividerLine from '../components/dividerLine.vue';
import mobileMenu from '../components/mobileMenu.vue';

export default {
    name: 'portfolioPage',
    data() {
        return {
            projects: [
                {
                    name: "Hearth",
                    portfolioImage: "https://qodeinteractive.com/magazine/wp-content/uploads/2022/05/How-to-View-a-Mobile-Version-of-Your-Website-on-Desktop.jpg",
                    portfolioDescription: "I'm currently in the process of building a health app, designed to be a central point of contact for users to eat more nutritiously and live healthy using AI tools.",
                    moreInfo: "Check out the current Demo.",
                    moreInfoURL: "https://health-compass-app.vercel.app/pages/login",
                    tags: ["React", "TailwindCSS", "Express.js", "MongoDB"]
                },
                {
                    name: "Hello Chef",
                    portfolioImage: "",
                    portfolioDescription: "Built for HackaTUM 23, a smart recipe recommendation App that gives users a list of options based off of their preferences and dietary requirements.",
                    moreInfo: "Check out the Repo.",
                    moreInfoURL: "https://github.com/D-Akar/hellochef-hackatum23",
                    tags: ["Vue", "Javascript", "TailwindCSS", "CSS", "Go"]
                },
                {
                    name: "Portfolio Website",
                    portfolioImage: "",
                    portfolioDescription: "The website you're on right now. Built with plenty of personality and pizazz :)",
                    moreInfo: "",
                    moreInfoURL: "",
                    tags: ["Vue", "Javascript", "TailwindCSS", "CSS"]
                },
                {
                    name: "Freelance Projects",
                    portfolioImage: "",
                    portfolioDescription: "Pages built with Vue, using CSS animations to bring life to it and custom-built social media components. Most recent example is the personal website of an author.",
                    moreInfo: "Want to see it?",
                    moreInfoURL: "https://emiliayoung.com/",
                    tags: ["Vue", "Javascript", "TailwindCSS", "CSS"]
                }
            ],
            selectedInfo: null
        };
    },
    components: {
        pageHeader,
        dividerLine,
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
        }, 1500);
    }
};
</script>

<style></style>
