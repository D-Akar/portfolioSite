<template>
    <div class="flex-1 flex items-center flex-col my-6 justify-center">
        <h3 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-white">Who am I?</h3>
        <p class="pb-4 opacity-80 animate-pulse">Drag to slide</p>
        <div class="carousel-container">
            <button @click="scroll('left')" class="carousel-button prev">
                Previous
            </button>
            <div class="carousel" ref="carousel">
                <div class="flex flex-row space-x-2 md:space-x-8">
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold pb-2">About Me</h2>
                            <p class="pb-2">Hi there! I'm Derin, a 23 year old full-stack dev based out of Munich, Germany. Have a quick list of fun facts about me:</p>
                            <ul class="text-gray-200 bulletPoints">
                                <li>
                                    I enjoy building things and tackling on new experiences. The more I learn the better, currently my sights are set on ML and AI!
                                </li>
                                <li>
                                    I love to play the guitar and bass, could also be considered a half-decent producer.
                                    If you want to start a band <a href="/contact"
                                        class="text-red-500 hover:text-red-300">hit me up.</a>
                                </li>
                                <li>
                                    Passionate reader with little space left on the bookshelf. Like to give book
                                    <a href="https://www.penguinrandomhouse.com/books/553182/american-prison-by-shane-bauer/"
                                        class="text-red-500 hover:text-red-300">recommendations.</a>
                                </li>
                                <li>
                                    Enjoy bouldering, hikes & basically any other sport.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold pb-2">Work Experience</h2>
                            <h3 class="text-xl">Full Stack Developer @Medienstürmer</h3>
                            <p class="pb-2">October 2022-Present</p>
                            <ul class="text-gray-200 bulletPoints">
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
                            <h2 class="text-2xl font-bold pb-2">Education</h2>
                            <h3 class="text-xl">Information Systems @TUM</h3>
                            <p>2023 - Present</p>
                            <h3 class="text-xl">Informatics @TUM</h3>
                            <p>2020 - 2022</p>
                            <p class="text-gray-200">Dropped due to personal reasons, credits transferred to current
                                degree</p>
                            <h3 class="text-xl">Werner-von-Siemens Gymnasium</h3>
                            <p class="text-gray-200">Graduated with a final grade of 1.7</p>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold pb-2">Soft Skills</h2>
                            <h3 class="text-xl pb-2">Highly Organized</h3>
                            <p class="pb-2">
                                Through implementing project plans, documenting code-bases and working in a highly
                                regulated environment I have developed a strong sense of organization.
                            </p>
                            <h3 class="text-xl pb-2">Communication</h3>
                            <p>
                                I am comfortable with public speaking and have experience with both client communication
                                and individually closing partnership deals. Besides this I am also fluent in English,
                                German and Turkish.
                            </p>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold pb-2">Technologies</h2>
                            <h3 class="text-xl">Full Stack Development</h3>
                            <p>
                                I mainly use Javascript, Vue.js and Tailwind CSS for developing sleek frontend
                                applications. I've also developed full stack applications using Go, Node.js, Express and
                                MongoDB.
                            </p>
                            <h3 class="text-xl pt-2">RPAs</h3>
                            <p>
                                I'm a certified developer for Make.com (form. Integromat) and have experience with
                                Power Automate.
                            </p>
                            <h3 class="text-xl pt-2">CRMs and ERP systems</h3>
                            <p>
                                I'm experienced with Salesforce and Zoho, having built and automated solutions regarding
                                data management and internal tooling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="scroll('right')" class="carousel-button next">
                Next
            </button>
        </div>
        <div class="flex flex-col justify-center pt-6 space-x-8">
            <p>For a simplified PDF version click <a href="" class="text-red-500 hover:text-red-300">here</a></p>
            <div>
                <ul class="flex flex-row space-x-4 justify-center">
                    <li>
                        <a href="https://www.instagram.com/d3r.in/" class="text-red-500 hover:text-red-300"
                            target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram fa-lg"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/0dakar" class="text-red-500 hover:text-red-300" target="_blank"
                            rel="noopener noreferrer">
                            <i class="fab fa-x-twitter fa-lg"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/derin-akar/" class="text-red-500 hover:text-red-300"
                            target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-lg"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/D-Akar" class="text-red-500 hover:text-red-300" target="_blank"
                            rel="noopener noreferrer">
                            <i class="fab fa-github fa-lg"></i>
                        </a>
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
            currentSlide: 0,
            totalSlides: 5,
            isDragging: false,
            startX: 0,
            scrollLeft: 0
        };
    },
    methods: {
        scroll(direction) {
            if (direction === 'left' && this.currentSlide > 0) {
                this.currentSlide--;
            } else if (direction === 'right' && this.currentSlide < this.totalSlides - 1) {
                this.currentSlide++;
            }

            const carousel = this.$refs.carousel;
            const slideWidth = carousel.querySelector('.sliderElement').offsetWidth;
            
            this.scrollPosition = this.currentSlide * slideWidth;
            carousel.scrollTo({
                left: this.scrollPosition,
                behavior: 'smooth'
            });
        },
        
        handleWheel(e) {
            e.preventDefault();
            const carousel = this.$refs.carousel;
            const slideWidth = carousel.querySelector('.sliderElement').offsetWidth;
            
            // Calculate the maximum scroll position
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            
            // Calculate new scroll position
            const newScrollLeft = carousel.scrollLeft + e.deltaY;
            
            // Ensure scroll position stays within bounds and apply smooth scrolling
            carousel.scrollTo({
                left: Math.max(0, Math.min(newScrollLeft, maxScroll)),
                behavior: 'smooth'
            });
        },

        startDragging(e) {
            this.isDragging = true;
            this.startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
            this.scrollLeft = this.$refs.carousel.scrollLeft;
        },

        stopDragging() {
            this.isDragging = false;
        },

        move(e) {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
            const walk = (x - this.startX) * 2;
            this.$refs.carousel.scrollLeft = this.scrollLeft - walk;
        }
    },
    mounted() {
        const carousel = this.$refs.carousel;
        
        // Add wheel event listener for vertical scrolling
        carousel.addEventListener('wheel', this.handleWheel, { passive: false });
        
        // Add touch/mouse events for drag scrolling
        carousel.addEventListener('mousedown', this.startDragging);
        carousel.addEventListener('touchstart', this.startDragging);
        
        window.addEventListener('mousemove', this.move);
        window.addEventListener('touchmove', this.move);
        
        window.addEventListener('mouseup', this.stopDragging);
        window.addEventListener('touchend', this.stopDragging);
    },
    beforeDestroy() {
        // Clean up event listeners
        const carousel = this.$refs.carousel;
        carousel.removeEventListener('wheel', this.handleWheel);
        carousel.removeEventListener('mousedown', this.startDragging);
        carousel.removeEventListener('touchstart', this.startDragging);
        
        window.removeEventListener('mousemove', this.move);
        window.removeEventListener('touchmove', this.move);
        
        window.removeEventListener('mouseup', this.stopDragging);
        window.removeEventListener('touchend', this.stopDragging);
    }
};
</script>

<style scoped>
.carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    /* Remove padding from here */
}

.carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    /* Adjust padding to allow full scrolling */
    padding: 0 42.5%;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
}

.carousel:active {
    cursor: grabbing;
}

.carousel::-webkit-scrollbar {
    display: none;
}

.sliderElement {
    flex: 0 0 25%;
    min-width: 450px;
    scroll-snap-align: center;
    transition: all 0.2s;
    padding: 0 10px;
    /* Add some spacing between elements */
}

@media (max-width: 640px) {
    .sliderElement {
        flex: 0 0 30%;
        min-width: 250px;
    }
}

.bulletPoints {
    list-style-type: disc;
    padding-left: 1.5em;
}

.bulletPoints li {
    margin-bottom: 0.25em;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    z-index: 10;
    border-radius: 4px;
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}

.carousel-button:hover {
    background: rgba(0, 0, 0, 0.7);
}

.fab {
    transition: transform 0.2s ease-in-out;
}

.fab:hover {
    transform: scale(1.2);
}
</style>
