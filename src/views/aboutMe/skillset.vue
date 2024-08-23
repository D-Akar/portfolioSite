<template>
    <div class="flex-1 flex items-center flex-col my-32 justify-center space-y-16">
        <div class="flex space-x-2">
            <div @click="selectRating(3)" class="flex skillSelector">3 star</div>
            <div @click="selectRating(2)" class="flex skillSelector">2 star</div>
            <div @click="selectRating(1)" class="flex skillSelector">1 star</div>
            <div @click="selectRating(4)" class="flex skillSelector">all</div>
        </div>
        <div class="flex">
            <div class="w-1/2">
                <div>
                    <p>Tech Stack:</p>
                    <div v-for="skill in filteredSkills" :key="skill.name" class="skill-item">
                        <h3>{{ skill.name }}</h3>
                    </div>
                </div>
                <div>Tools:</div>
                <div>Certs:</div>
            </div>
            <div class="w-1/2">INFOBOX</div>
        </div>
        <!-- <p>I do a bunch of different tech stacks n stuff wooo!</p>
        <div>
            Skill list: Hosting infra and development pipelines, Front-end dev Back-end dev Design Creation of RPA
            workflows between different applications Implemen
        </div>
        <div>Tool List</div>
        <div>
            Tools: Figma, Screamingfrog, Make.com, Asana, Jira, Git, hetzner, Postman, VSCode, Zoho Tech Stack: HTML,
            CSS, Tailwind, JS, PHP, Java, SQL, GO, Express, Node
        </div>
        <div>Certifications: Make.com</div> -->
    </div>
</template>

<script>
export default {
    name: 'skillSet',
    data() {
        return {
            selectedRating: 4,
            skills: [
                {
                    name: 'HTML',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                },
                {
                    name: 'JS',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                },
                {
                    name: 'CSS',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                },
                {
                    name: 'Tailwind',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                },
                {
                    name: 'PHP',
                    rating: 2,
                    description: 'language',
                    imageUrl: 'google.com'
                },
                {
                    name: 'SQL',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'google.com'
                }
            ],
            tools: [
                {
                    name: 'HTML',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                },
                {
                    name: 'HTML',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                },
                {
                    name: 'HTML',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                }
            ],
            certs: [
                {
                    name: 'make.com',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                }
            ]
        };
    },
    methods: {
        selectRating(rating) {
            this.selectedRating = rating;
            console.log("test");
        }
    },
    computed: {
        filteredSkills() {
            return this.skills.filter((skill) => skill.rating <= this.selectedRating);
        }
    }
};
</script>

<style>
.skillSelector {
    border-width: 1px;
    border-radius: 0.5rem;
    border-color: white;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
}

.skillSelector:hover {
    color: #030712;
    background-color: white;
    transition: all ease-in-out 0.25s;
}
</style>
