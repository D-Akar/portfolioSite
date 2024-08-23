<template>
    <div class="min-h-screen w-screen darkestBlue flex flex-col">
        <div class="flex-initial mx-72">
            <div class="flex pt-8 text-white">
                <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/">Home </a>
                <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/about-me"
                    >About</a
                >
                <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/contact"
                    >Contact</a
                >
            </div>
            <div class="border-b-2 border-gray-200 py-4" id="borderLine"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'TestPage',
    data() {
        return {
            selectedText: 1,
            selectedSkills: true
        };
    },
    methods: {
        getText(selectedText) {
            const texts = {
                1: 'Full-Stack Developer',
                2: 'Full Time Student',
                3: 'Passionate Learner',
                4: 'Very Humble'
            };
            return texts[selectedText];
        }
    },
    mounted() {
        
        // Find the element with the id 'contentBlock'
        const contentBlock = document.getElementById('contentBlock');
        const footerSelection = document.getElementById('footerSelection');

        setTimeout(() => {
            contentBlock.classList.add('is-loaded');
            footerSelection.classList.add('is-loaded');
        }, 1500); // 1000 ms delay

    }
};
</script>

<style>
#borderLine {
    width: 100%;
    /* Width */
    transition: transform 1s ease;
    /* Transition duration set to 1 second */
    transform: scaleX(0);
    /* Start with scale 0 */
}

#footerLine {
    width: 100%;
    /* Width */
    transition: transform 1s ease;
    /* Transition duration set to 1 second */
    transform: scaleX(0);
    /* Start with scale 0 */
}

#contentBlock {
    opacity: 0;
}

#footerSelection.is-loaded {
    opacity: 1;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s;
}

#contentBlock.is-loaded {
    opacity: 1;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s;
}
</style>
