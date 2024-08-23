<template>
        <div class="flex space-x-4 text-white justify-center headerContainer" id="headerBlock">
            <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/">Home</a>
            <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/about-me"
                >About</a
            >
            <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/portfolio"
                >Portfolio</a
            >
            <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/contact"
                >Contact</a
            >
        </div>
</template>

<script>
export default {
    name: 'headerComponent',
    mounted() {
        const currentPageUrl = window.location.href;
        const links = document.querySelectorAll('a');
        const homePageUrl = "http://127.0.0.1:5173/";

        // Iterate through the links
        links.forEach((link) => {
            // Get the href attribute of the link
            const linkHref = link.href;
            console.log(currentPageUrl);
            // Check if the href is included in the current page URL
            if (currentPageUrl.includes(linkHref) && linkHref !== homePageUrl) {
                // Make the link unclickable
                link.removeAttribute('href'); // This removes the ability to click on the link
                link.style.pointerEvents = 'none'; // Optionally, disable pointer events
                link.style.color = 'gray'; // Optionally, change the color to indicate it's disabled
                link.classList.add('unclickable'); // Optionally, add a class to style it
            }
        });

        // Find the element with the id 'borderLine'
        // const line = document.getElementById('borderLine');

        // if (line) {
        //     // Initially set the scale to 0 to make the line invisible +
        //     // set the transform-origin to center to expand from the middle
        //     line.style.transform = 'scaleX(0)';
        //     line.style.transformOrigin = 'center';

        //     // Use setTimeout to introduce a delay of 1 second before the animation starts
        //     setTimeout(() => {
        //         // Set the scale to 1 to expand the line to full width
        //         line.style.transform = 'scaleX(1)';
        //     }, 500); // 1000 ms delay
        // }
    }
};
</script>

<style></style>
