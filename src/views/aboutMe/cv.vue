<template>
    <div class="flex items-center flex-col my-6  space-y-8 justify-start px-8 md:px-16 lg:px-32 2xl:px-72">
        <h3 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-white pb-8">Who am I?</h3>
        <Flicking :options="{ circular: true }" :plugins="plugins" class="">
            <div class="card-panel border rounded border-white p-6 h-full">
                <h2 class="text-2xl font-bold pb-2">About Me</h2>
                <p class="pb-2">Hi there! I'm Derin, a 23 year old full-stack dev based out of
                    Munich, Germany. Have a quick list of fun facts about me:</p>
                <ul class="text-gray-200 bulletPoints">
                    <li>
                        I enjoy building things and tackling on new experiences. The more I learn
                        the better, currently my sights are set on ML and AI!
                    </li>
                    <li>
                        I love to play the guitar and bass, could also be considered a half-decent
                        producer.
                        If you want to start a band <a href="/contact" class="text-red-500 hover:text-red-300">hit
                            me up.</a>
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
            <div class="card-panel border rounded border-white p-6 h-full">
                <h2 class="text-2xl font-bold pb-2">Work Experience</h2>
                <h3 class="text-xl">Upcoming SDE Intern @Amazon</h3>
                <p class="pb-2">March 2025 - May 2025</p>
                <h3 class="text-xl">Full Stack Developer @Medienstürmer</h3>
                <p class="pb-2">October 2022 - February 2025</p>
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
                </ul>
            </div>
            <div class="card-panel border rounded border-white p-6 h-full">

                <h2 class="text-2xl font-bold pb-2">Education</h2>
                <h3 class="text-xl">Information Systems @TUM</h3>
                <p>2023 - Present</p>
                <h3 class="text-xl">Informatics @TUM</h3>
                <p>2020 - 2022</p>
                <p class="text-gray-200">Dropped due to personal reasons, credits transferred to
                    current
                    degree</p>
                <h3 class="text-xl">Werner-von-Siemens Gymnasium</h3>
                <p class="text-gray-200">Graduated with a final grade of 1.7</p>


            </div>
            <div class="card-panel border rounded border-white p-6 h-full">

                <h2 class="text-2xl font-bold pb-2">Technologies</h2>
                <h3 class="text-xl">Full Stack Development</h3>
                <p>
                    I mainly use Javascript, Vue.js and Tailwind CSS for developing sleek frontend
                    applications. I've also developed full stack applications using Go, Node.js,
                    Express and
                    MongoDB.
                </p>
                <h3 class="text-xl pt-2">RPAs</h3>
                <p>
                    I'm a certified developer for Make.com (form. Integromat) and have experience
                    with
                    Power Automate.
                </p>
                <h3 class="text-xl pt-2">CRMs and ERP systems</h3>
                <p>
                    I'm experienced with Salesforce and Zoho, having built and automated solutions
                    regarding
                    data management and internal tooling.
                </p>

            </div>
            <div class="card-panel border rounded border-white p-6 h-full">

                <h2 class="text-2xl font-bold pb-2">Soft Skills</h2>
                <h3 class="text-xl pb-2">Highly Organized</h3>
                <p class="pb-2">
                    Through implementing project plans, documenting code-bases and working in a
                    highly
                    regulated environment I have developed a strong sense of organization.
                </p>
                <h3 class="text-xl pb-2">Communication</h3>
                <p>
                    I am comfortable with public speaking and have experience with both client
                    communication
                    and individually closing partnership deals. Besides this I am also fluent in
                    English,
                    German and Turkish.
                </p>

            </div>
        </Flicking>
        <div class="flex flex-col justify-center pt-6 space-x-8 space-y-2">
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
import Flicking from "@egjs/vue3-flicking";
import { Perspective, Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";

export default {
    name: 'cvInfo',
    data() {
        return {
            isDragging: false,
            startX: 0,
            scrollLeft: 0,
            plugins: [new Perspective({ rotate: 0.25 }, new Arrow())]
        };
    },
    components: {
        Flicking: Flicking
    }
};
</script>

<style scoped>
.card-panel {
    height: 400px;
    width: 750px;
}

.bulletPoints {
    list-style-type: disc;
    padding-left: 1.5em;
}

.bulletPoints li {
    margin-bottom: 0.25em;
}

.fab {
    transition: transform 0.2s ease-in-out;
}

.fab:hover {
    transform: scale(1.2);
}
</style>
