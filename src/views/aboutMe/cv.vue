<template>
    <div class="flex-1 flex items-center flex-col my-32 justify-center">
        <div class="carousel-container">
            <div class="carousel" ref="carousel">
                <div class="flex flex-row space-x-8">
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold">Work Experience</h2>
                            <h3 class="text-xl">Full Stack Developer @Medienstürmer</h3>
                            <p>October 2022-Present</p>
                            <ul class="text-gray-200">
                                <li>
                                    Developed and maintained web applications using Vue.js and Node.js
                                </li>
                                <li>
                                    Closed partnership programs with top service providers through advanced
                                    certifications, demonstrating expertise and commitment.
                                </li>
                                <li>
                                    Implemented and integrated external payment services into the large user
                                    facing application
                                </li>
                                <li>
                                    Automated workflows into customer CRM systems to increase efficiency by 50%
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold">Education</h2>
                            <h3 class="text-xl">Information Systems @TUM</h3>
                            <p>2023 - Present</p>
                            <h3 class="text-xl">Informatics @TUM</h3>
                            <p>2020 - 2022</p>
                            <p class="text-gray-200">Dropped out due to health reasons, credits transferred to current
                                degree</p>
                            <h3 class="text-xl">Werner-von-Siemens Gymnasium</h3>
                            <p>- 2019</p>
                            <p class="text-gray-200">Graduated with a final grade of 1.7</p>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold">Technical and Social Skills</h2>
                            <h3 class="text-xl">Full Stack Development</h3>
                            <p>
                                I have a strong understanding of both frontend and backend development, comfortable with
                                a myriad of frameworks and tools.
                            </p>
                            <h3 class="text-xl">Highly Organized</h3>
                            <p>
                                Through implementing project plans, documenting code-bases and working in a highly
                                regulated environment I have developed a strong sense of organization.
                            </p>
                            <h3 class="text-xl">Communication</h3>
                            <p>
                                I am comfortable with public speaking and have experience with both client communication
                                and leading large groups of people.
                            </p>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold">Hobbies and Interests</h2>
                            <ul class="text-gray-200 space-y-2">
                                <li>
                                    I love to play the guitar and bass, could also be considered a half-decent producer.
                                    If you want to start a band <a href="/contact" class="text-red-500">hit me up.</a>
                                </li>
                                <li>
                                    Passionate reader with little space left on the bookshelf. Like to give book
                                    <a href="https://www.penguinrandomhouse.com/books/553182/american-prison-by-shane-bauer/"
                                        class="text-red-500">recommendations.</a>
                                </li>
                                <li>
                                    Keeping fit through bouldering, hikes and any sport you can think of.
                                </li>
                                <li>
                                    Currently invested in learning more about AI and machine learning.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button class="carousel-button prev" @click="scroll('left')">&lt;</button>
                <button class="carousel-button next" @click="scroll('right')">&gt;</button>
            </div>
        </div>
        <div class="flex flex-col justify-center pt-8">
            <p>For a simplified PDF version click <a href="" class="text-red-500">here</a></p>
            <div>
                <ul class="flex flex-row space-x-4 justify-center">
                    <li>
                        <a href="instagram.com/max_kuehne" class="text-red-500">Instagram</a>

                    </li>
                    <li>
                        <a href="x.com/maxkuehne" class="text-red-500">X</a>
                    </li>
                    <li>
                        <a href="linkedin.com/in/maxkuehne" class="text-red-500">LinkedIn</a>
                    </li>
                    <li>
                        <a href="github.com/maxkuehne" class="text-red-500">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'cvInfo',
    data() {
        return {
            scrollPosition: 0,
        };
    },
    methods: {
        scroll(direction) {
            const carousel = this.$refs.carousel;
            const slideWidth = carousel.offsetWidth * 0.2; // Width of one slide
            if (direction === 'left') {
                this.scrollPosition = Math.max(0, this.scrollPosition - slideWidth);
            } else {
                this.scrollPosition = Math.min(
                    carousel.scrollWidth - carousel.offsetWidth,
                    this.scrollPosition + slideWidth
                );
            }
            carousel.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth',
            });
        },
    },
    mounted() {
        const carousel = this.$refs.carousel;
        carousel.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.scroll(e.deltaY > 0 ? 'right' : 'left');
        });

        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 0.5; // Reduced drag sensitivity
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Add this new function to snap to the nearest slide
        const snapToNearestSlide = () => {
            const slideWidth = carousel.offsetWidth * 0.2;
            const nearestSlide = Math.round(carousel.scrollLeft / slideWidth);
            carousel.scrollTo({
                left: nearestSlide * slideWidth,
                behavior: 'smooth',
            });
        };

        carousel.addEventListener('scrollend', snapToNearestSlide);
    },
};
</script>

<style scoped>
.carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 0 10%;
    /* Add padding to show partial elements on sides */
}

.carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    /* Changed to mandatory for smoother scrolling */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 40%;
    /* Add padding to center the active slide */
}

.carousel::-webkit-scrollbar {
    display: none;
}

.sliderElement {
    flex: 0 0 20%;
    /* Changed to 20% width */
    min-width: 400px;
    /* Ensure a minimum width for smaller screens */
    scroll-snap-align: center;
    transition: all 0.2s;
    padding: 0 10px;
    /* Add some spacing between elements */
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

/* ... existing styles ... */
</style>
