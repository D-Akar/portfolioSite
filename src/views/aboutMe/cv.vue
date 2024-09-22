<template>
    <div class="flex-1 flex items-center flex-col my-8 justify-center">
        <h3 class="text-5xl 2xl:text-6xl font-bold text-white pb-8">Who am I?</h3>
        <div class="carousel-container">
            <div class="carousel" ref="carousel">
                <div class="flex flex-row space-x-2 md:space-x-8">
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold pb-2">Work Experience</h2>
                            <h3 class="text-xl">Full Stack Developer @Medienstürmer</h3>
                            <p>October 2022-Present</p>
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
                            <p>2022 - Present</p>
                            <h3 class="text-xl">Informatics @TUM</h3>
                            <p>2020 - 2022</p>
                            <p class="text-gray-200">Credits transferred to current
                                degree</p>
                            <h3 class="text-xl">Werner-von-Siemens Gymnasium</h3>
                            <p class="text-gray-200">Graduated with a final grade of 1.7</p>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold pb-2">Soft Skills</h2>
                            <h3 class="text-xl">Highly Organized</h3>
                            <p>
                                Through implementing project plans, documenting code-bases and working in a highly
                                regulated environment I have developed a strong sense of organization.
                            </p>
                            <h3 class="text-xl">Communication</h3>
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
                            <p class="hidden md:block">For more information regarding my tech stack and favorite tools
                                click below.</p>
                        </div>
                    </div>
                    <div class="flex-1 sliderElement">
                        <div class="border rounded border-white p-6 h-full">
                            <h2 class="text-2xl font-bold pb-2">Hobbies and Interests</h2>
                            <ul class="text-gray-200 space-y-2">
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
                                    Keeping fit through bouldering, hikes and any sport you can think of.
                                </li>
                                <li>
                                    Currently invested in learning more about AI and machine learning.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center pt-8 space-x-8">
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
                    carousel.scrollWidth - carousel.offsetWidth + (carousel.offsetWidth * 0.4), // Add extra scroll space
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
        let scrollTimeout;

        carousel.addEventListener('wheel', (e) => {
            e.preventDefault();
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.scroll(e.deltaY > 0 ? 'right' : 'left');
            }, 30); // Adjust this value to control scroll sensitivity
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
    padding: 0 40%;
}

.carousel::-webkit-scrollbar {
    display: none;
}

.sliderElement {
    flex: 0 0 20%;
    min-width: 450px;
    scroll-snap-align: center;
    transition: all 0.2s;
    padding: 0 10px;
    /* Add some spacing between elements */
}

@media (max-width: 640px) {
    .sliderElement {
        width: 85vw;
        min-width: 250px;
    }
}

.bulletPoints {
    list-style-type: disc;
    padding-left: 1.5em;
}

.bulletPoints li {
    margin-bottom: 0.5em;
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

.fab {
    transition: transform 0.2s ease-in-out;
}

.fab:hover {
    transform: scale(1.2);
}
</style>
