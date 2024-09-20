<template>
    <div class="flex items-center flex-col my-16 justify-center space-y-16 w-1/2">
        <h3 class="text-6xl font-bold text-white">What can I do?</h3>
        <div class="flex flex-row w-full">
            <div class="flex flex-col space-y-2 items-center justify-center w-1/5">
                <div @click="selectRating(3)"
                    :class="['flex', 'flex-col', 'skillSelector', { active: selectedRating === 3 }]">
                    <span class="row-top">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </span>
                    <span class="m-t">
                        <i class="fas fa-star"></i>
                    </span>
                </div>
                <div @click="selectRating(2)" :class="['flex', 'skillSelector', { active: selectedRating === 2 }]">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div @click="selectRating(1)" :class="['flex', 'skillSelector', { active: selectedRating === 1 }]">
                    <i class="fas fa-star"></i>
                </div>
                <div @click="selectRating(0)" :class="['flex', 'skillSelector', { active: selectedRating === 0 }]"><i
                        class="far fa-star"></i></div>
            </div>
            <div class="flex flex-col items-center w-full space-y-2">
                <div class="w-4/5 items-center justify-center space-y-2">
                    <p class="w-full text-center">Tech Stack:</p>
                    <div class="flex flex-wrap overflow justify-center items-center">
                        <div v-for="skill in filteredSkills" :key="skill.name"
                            class="skill-item flex space-x-2 mr-2 mb-2">
                            <div @click="selectedItem = skill"
                                class="iconContainer flex justify-center items-center border-white px-8">
                                <img :src="skill.imageUrl" :alt="skill.name" class="skill-icon" />
                            </div>
                        </div>
                    </div>
                    <p class="w-full text-center">Tools & Services</p>
                    <div class="flex flex-wrap overflow justify-center items-center">
                        <div v-for="tool in filteredTools" :key="tool.name" class="skill-item flex space-x-2 mr-2 mb-2">
                            <div @click="selectedItem = tool"
                                class="iconContainer flex justify-center items-center border-white px-8">
                                <img :src="tool.imageUrl" :alt="tool.name" class="skill-icon" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full text-center">
                        <p>Certifications:</p>
                        <ul>
                            <li>Advanced Developer for Make.com</li>
                        </ul>

                    </div>
                </div>
                <!-- <div class="h-1/5 items-center justify-center">
                    <div v-if="selectedItem" class="flex flex-col">
                        <ul class="space-y-2 text-center">
                            <li class="justify-center">{{ selectedItem.name }}</li>
                            <li>Skill level: {{ selectedItem.rating }}/3</li>
                            <li>{{ selectedItem.description }}</li>
                        </ul>
                    </div>
                </div> -->
            </div>
        </div>


        <!-- <p>I do a bunch of different tech stacks n stuff wooo!</p>
        <div>
            Skill list: Hosting infra and development pipelines, Front-end dev Back-end dev Design Creation of RPA
            workflows between different applications Implemen
        </div>
        <div>Tool List</div>
        <div>
            Tools: Figma, docker, firebase, Screamingfrog TODO, Make.com, Asana, Jira, Git, hetzner, Postman, VSCode, Zoho Tech Stack: HTML,
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
            selectedRating: 0,
            selectedItem: null,
            skills: [
                {
                    name: 'HTML',
                    rating: 3,
                    description: 'A classic that I have been making use of for over 5 years at this point alongisde JS and CSS.',
                    imageUrl: 'src/public/techstack/html.svg'
                },
                {
                    name: 'Javascript',
                    rating: 3,
                    description: 'A classic that I have been making use of for over 5 years at this point alongisde HTML and CSS.',
                    imageUrl: 'src/public/techstack/js.svg'
                },
                {
                    name: 'CSS',
                    rating: 3,
                    description: 'A classic that I have been making use of for over 5 years at this point alongisde HTML and JS.',
                    imageUrl: 'src/public/techstack/css.svg'
                },
                {
                    name: 'Tailwind CSS',
                    rating: 3,
                    description: 'My CSS Framework of choice, have over 1,5 years of experience and has been utilized in practically all projects I have built since learning it (including this page).',
                    imageUrl: 'src/public/techstack/tailwind.svg'
                },
                {
                    name: 'PHP',
                    rating: 2,
                    description: 'One of the first languages I ever grew proficient in, first used in the setup of a new book checkout system for my high school and now a regular tool in the development of plugins and custom functionality for WordPress websites.',
                    imageUrl: 'src/public/techstack/php.svg'
                },
                {
                    name: 'Java',
                    rating: 2,
                    description: 'My very first language which has been a companion of mine throughout uni.',
                    imageUrl: 'src/public/techstack/java.svg'
                },
                {
                    name: 'PostgreSQL',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'src/public/techstack/postgresql.svg'
                },
                {
                    name: 'Go',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'src/public/techstack/go.svg'
                },
                {
                    name: 'Express',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'src/public/techstack/express.svg'
                },
                {
                    name: 'React',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'src/public/techstack/react.svg'
                },
                {
                    name: 'Vue',
                    rating: 3,
                    description: 'I first began using Vue at my current workspace',
                    imageUrl: 'src/public/techstack/vue.svg'
                },
                {
                    name: 'Node.js',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/techstack/node-js.svg'
                }
            ],
            tools: [
                {
                    name: 'Asana',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/asana.svg'
                },
                {
                    name: 'Docker',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'src/public/tools/docker.svg'
                },
                {
                    name: 'Figma',
                    rating: 2,
                    description: 'language',
                    imageUrl: 'src/public/tools/figma.svg'
                },
                {
                    name: 'Firebase',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'src/public/tools/firebase.svg'
                },
                {
                    name: 'Git',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/git.svg'
                },
                {
                    name: 'Hetzner',
                    rating: 2,
                    description: 'language',
                    imageUrl: 'src/public/tools/hetzner.svg'
                },
                {
                    name: 'Make.com (formerly Integromat)',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/integromat.svg'
                },
                {
                    name: 'Jira',
                    rating: 1,
                    description: 'language',
                    imageUrl: 'src/public/tools/jira.svg'
                },
                {
                    name: 'Obsidian',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/obsidian.svg'
                },
                {
                    name: 'Postman',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/postman.svg'
                },
                {
                    name: 'Stripe',
                    rating: 2,
                    description: 'language',
                    imageUrl: 'src/public/tools/stripe.svg'
                },
                {
                    name: 'VSCode',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/vscode.svg'
                },
                {
                    name: 'WordPress',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/wordpress.svg'
                },
                {
                    name: 'Zoho',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'src/public/tools/zoho.svg'
                }
            ],
            certs: [
                {
                    name: 'make.com',
                    rating: 3,
                    description: 'language',
                    imageUrl: 'google.com'
                }
            ],
            filteredSkills: this.skills,
            filteredTools: this.tools
        };
    },
    methods: {
        selectRating(rating) {
            this.selectedRating = rating;
            if (rating !== 0) {
                this.filterToRating();
            } else {
                this.filteredSkills = this.skills;
                this.filteredTools = this.tools;
            }
        },
        filterToRating() {
            this.filteredSkills = this.skills.filter((skill) => skill.rating == this.selectedRating);
            this.filteredTools = this.tools.filter((tool) => tool.rating == this.selectedRating);
        },
    },
    mounted() {
        this.selectRating(this.selectedRating);
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

.skillSelector:hover,
.skillSelector.active {
    color: #030712;
    background-color: white;
    transition: all ease-in-out 0.25s;
}

.iconContainer {
    height: 50px;
    width: 50px;
    padding: 5px;
    border-width: 1px;
    border-radius: 0.25rem;
}
</style>
