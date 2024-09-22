<template>
    <div class="min-w-full items-center darkestBlue px-8 md:px-16 lg:px-32 2xl:px-72">
        <div class="border-b-2 border-gray-200 items-center" ref="borderLine"></div>
    </div>
</template>

<script>
export default {
    props: {
        direction: {
            type: String,
            default: 'left', // Default direction is left
            validator: value => ['left', 'right', 'center'].includes(value) // Validate direction
        }
    },
    mounted() {
        const line = this.$refs.borderLine;

        // Set transform-origin based on the direction prop
        line.style.transformOrigin = this.direction;

        // Trigger the scaleX animation after a small delay
        setTimeout(() => {
            line.style.transform = 'scaleX(1)';
        }, 100); // Small delay to ensure proper application
    }
};
</script>

<style>
.border-b-2 {
    width: 100%;
    /* Full width */
    transform: scaleX(0);
    /* Start with scaleX 0 (invisible) */
    transition: transform 1s ease;
    /* Animate the transform property over 1 second */
}

/* Specific styles for center direction */
.border-b-2[style*="transform-origin: center"] {
    transform-origin: center !important;
}
</style>
