<template>
    <div class="flex-initial flex justify-center items-center flex-col my-8 text-white">
                <transition name="fade-slide" mode="out-in" appear>
                    <h3 :key="selectedText" class="text-3xl">
                        {{ getText(selectedText) }}
                    </h3>
                </transition>
            </div>
</template>

<script>
export default {
    name: 'skillRotation',
    data() {
        return {
            selectedText: 1
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
        // Start the cycle for selectedText
        setInterval(() => {
            this.selectedText = this.selectedText === 4 ? 1 : this.selectedText + 1;
        }, 4500); // 4500 ms interval for cycling through texts
    }
};
</script>

<style></style>