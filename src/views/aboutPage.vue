<template>
    <div class="min-h-screen w-screen baseGreen flex flex-col">
        <div class="flex-initial mx-72">
            <div class="flex pt-16">
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover" href="/">Home
                </a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/portfolio">Portfolio</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/contact">Contact</a>
            </div>
            <div class="border-b-2 border-gray-200 py-4" id="borderLine"></div>
        </div>
        <div id="contentBlock">
            <div class="flex-initial flex justify-center items-center flex-col my-8">
                <h3 class="text-6xl font-bold">Who am I?</h3>
                <transition name="fade-slide" mode="out-in" appear>
                    <h3 :key="selectedText" class="text-3xl">
                        {{ getText(selectedText) }}
                    </h3>
                </transition>
            </div>
            <div class="flex-1 flex justify-center items-center flex-col my-32">
                <h3 class="text-4xl">Dummy Content</h3>
            </div>
        </div>

    </div>
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
        // Find the element with the id 'contentBlock'
        const contentBlock = document.getElementById('contentBlock');

        setTimeout(() => {
            contentBlock.classList.add('is-loaded')
        }, 1500); // 1000 ms delay

        // Start the cycle for selectedText
        setInterval(() => {
            this.selectedText = this.selectedText === 4 ? 1 : this.selectedText + 1;
        }, 3000); // 3000 ms interval for cycling through texts
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

#contentBlock {
    opacity: 0;

}

#contentBlock.is-loaded {
    opacity: 1;
    transition: all 1s ease;
    -webkit-transition: all 1s;
}

/* Keyframes for fading and sliding animations */
@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeOutLeft {
    from {
        opacity: 1;
        transform: translateX(0);
    }

    to {
        opacity: 0;
        transform: translateX(-100%);
    }
}

/* Transition classes for fade-slide */
.fade-slide-enter-active {
    animation: fadeInRight 1s forwards;
}

.fade-slide-leave-active {
    animation: fadeOutLeft 1s forwards;
}
</style>