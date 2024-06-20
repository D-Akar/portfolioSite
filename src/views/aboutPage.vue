<script setup>
</script>

<template>
    <div class="min-h-screen w-screen baseGreen flex flex-col">
        <div class="flex-1 mx-72">
            <div class="flex flex-row pt-16">
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover" href="/">Home
                </a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/portfolio">Portfolio</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/contact">Contact</a>
            </div>
            <div class="border-b-2 border-gray-200 py-4" id="borderLine"></div>
        </div>
        <div class="flex-1 flex justify-center items-center flex-col my-64">
            <h1 class="text-8xl font-bold">Who am I?</h1>
            <h3 class="text-4xl">Full-Stack Developer</h3>
        </div>
    </div>

</template>

<script>
export default {
    name: 'TestPage',
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
            }, 1000); // 1000 ms delay
        }
    }
}
</script>


<style>
#borderLine {
    width: 100%;
    /* Starting width */
    transition: transform 1s ease;
    /* Transition duration set to 1 second */
    transform: scaleX(0);
    /* Start with scale 0 */
}
</style>