<template>
    <div class="border-b-2 border-gray-200 py-4" id="borderLine"></div>
</template>

<script>
export default {
    name: 'TestPage',
    data() {
        return {
            selectedText: 1,
        };
    },
    methods: {
        getText(selectedText) {
            const texts = {
                1: 'Full-Stack Developer',
                2: 'Cool Guy',
                3: 'At times funny',
                4: 'Uni Student',
            };
            return texts[selectedText];
        }
    },
    mounted() {
        // Find the element with the id 'borderLine'
        const line = document.getElementById('borderLine');

        if (line) {
            // Initially set the scale to 0 to make the line invisible
            line.style.transform = 'scaleX(0)';

            // Set the transform-origin to center to expand from the middle
            line.style.transformOrigin = 'center';

            // Use setTimeout to introduce a delay of 1 second before the animation starts
            setTimeout(() => {
                // Set the scale to 1 to expand the line to full width
                line.style.transform = 'scaleX(1)';
            }, 500); // 1000 ms delay
        }
    }
}
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
</style>