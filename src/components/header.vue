<template>
    <div class="flex space-x-4 text-white justify-center headerContainer" id="headerBlock">
        <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/">Home</a>
        <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/about-me">About</a>
        <a class="flex-1 text-base font-bold flex items-center justify-center headerHover"
            href="/portfolio">Portfolio</a>
        <a class="flex-1 text-base font-bold flex items-center justify-center headerHover" href="/contact">Contact</a>
    </div>
</template>

<script>
export default {
    name: 'headerComponent',
    mounted() {
        const currentPageUrl = window.location.href;
        const links = document.querySelectorAll('a');

        // Iterate through the links
        links.forEach((link) => {
            // Get the href attribute of the link
            const linkHref = link.href;

            // Check if the linkHref is identical to the currentPageUrl
            if (linkHref === currentPageUrl) {
                // Make the link unclickable
                link.removeAttribute('href'); // Remove the ability to click on the link
                link.style.pointerEvents = 'none'; // Disable pointer events
                link.style.color = 'gray'; // Change the color to indicate it's disabled
                link.classList.add('unclickable'); // Add a class to style it as needed
            }
        });
    }
};
</script>

<style></style>
