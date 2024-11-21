<template>
    <div
        class="h-full flex items-center flex-col py-16 lg:py-8 2xl:py-16 space-y-4 md:space-y-16 lg:space-y-8 2xl:space-y-16 justify-start md:justify-center px-6 md:px-16 lg:px-32 2xl:px-48 xl:w-2/3">
        <h3 class="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-white text-center">What can I do?</h3>
        <div class="flex flex-col-reverse md:flex-col w-full h-full md:h-auto">
            <!-- <div
                class="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 items-center justify-center w-full md:w-1/5 pt-4 md:pt-0">
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
            </div>  -->
            <div class="flex flex-row items-center w-full space-y-2 h-full md:h-auto">
                <div class="w-full items-center justify-center space-y-2 text-left">
                    <div class="flex flex-row space-x-8">
                        <div id="techStack" class="space-y-2 flex-1">
                            <h3 class="w-full text-left text-xl font-bold">Tech Stack:</h3>
                            <p>I'm proficient in a wide range of technologies that empower me to build functional
                                solutions.
                            </p>
                            <div class="ratingSelector flex flex-row space-x-2">
                                <button @click="selectRating(0)" class="skillButton">All</button>
                                <button @click="selectRating(3)" class="skillButton">Expert</button>
                                <button @click="selectRating(2)" class="skillButton">Proficient</button>
                                <button @click="selectRating(1)" class="skillButton">Novice</button>
                            </div>
                            <div class="flex flex-wrap overflow justify-left items-left py-2">
                                <div v-for="skill in filteredSkills" :key="skill.name"
                                    class="skill-item flex mr-2 mb-2">
                                    <div @click="selectedItem = skill"
                                        class="skillBox flex justify-left items-center border-white px-2 py-2 space-x-2 border rounded-lg border-opacity-40">
                                        <div
                                            class="iconContainer flex justify-center items-left border-white px-8 border-opacity-60">
                                            <img :src="skill.imageUrl" :alt="skill.name" class="skill-icon" />
                                        </div>
                                        <div>
                                            <p>{{ skill.name }}</p>
                                            <p class="opacity-75">{{ skill.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="services" class="space-y-2 flex-1">
                            <h3 class="w-full text-left text-xl font-bold">Tools & Services:</h3>
                            <p>Tools and Services that empower my development and creative progress.
                            </p>
                            <div class="ratingSelector flex flex-row space-x-2">
                                <button @click="selectRating(0)" class="skillButton">All</button>
                                <button @click="selectRating(3)" class="skillButton">Expert</button>
                                <button @click="selectRating(2)" class="skillButton">Proficient</button>
                                <button @click="selectRating(1)" class="skillButton">Novice</button>
                            </div>
                            <div class="flex flex-wrap overflow justify-left items-left py-2">
                                <div v-for="tool in filteredTools" :key="tool.name" class="skill-item flex mr-2 mb-2">
                                    <div @click="selectedItem = tool"
                                        class="skillBox flex justify-left items-center border-white px-2 py-2 space-x-2 border rounded-lg border-opacity-40">
                                        <div
                                            class="iconContainer flex justify-center items-left border-white px-8 border-opacity-60">
                                            <img :src="tool.imageUrl" :alt="tool.name" class="skill-icon" />
                                        </div>
                                        <div>
                                            <p>{{ tool.name }}</p>
                                            <p class="opacity-75">{{ tool.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full text-center">
                        <p>Certifications:</p>
                        <ul>
                            <li>Partnered Advanced Developer - Make.com</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
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
                    name: 'Vue',
                    rating: 3,
                    description: 'JS Framework',
                    imageUrl: '/techstack/vue.svg'
                },
                {
                    name: 'React',
                    rating: 1,
                    description: 'JS Framework',
                    imageUrl: '/techstack/react.svg'
                },
                {
                    name: 'Javascript',
                    rating: 3,
                    description: 'Old but Gold',
                    imageUrl: '/techstack/js.svg'
                },
                {
                    name: 'Tailwind CSS',
                    rating: 3,
                    description: 'CSS framework',
                    imageUrl: '/techstack/tailwind.svg'
                },
                {
                    name: 'Node.js',
                    rating: 3,
                    description: 'language',
                    imageUrl: '/techstack/node-js.svg'
                },
                {
                    name: 'Express',
                    rating: 2,
                    description: 'language',
                    imageUrl: '/techstack/express.svg'
                },
                {
                    name: 'Go',
                    rating: 1,
                    description: 'language',
                    imageUrl: '/techstack/go.svg'
                },
                {
                    name: 'PHP',
                    rating: 2,
                    description: 'Usable', //'One of the first languages I ever grew proficient in, first used in the setup of a new book checkout system for my high school and now a regular tool in the development of plugins and custom functionality for WordPress websites.',
                    imageUrl: '/techstack/php.svg'
                },
                {
                    name: 'Java',
                    rating: 2,
                    description: '',
                    imageUrl: '/techstack/java.svg'
                },
                {
                    name: 'MongoDB',
                    rating: 2,
                    description: 'language',
                    imageUrl: '/techstack/mongodb.svg'
                },
                {
                    name: 'PostgreSQL',
                    rating: 1,
                    description: 'language',
                    imageUrl: '/techstack/postgresql.svg'
                }
            ],
            tools: [
                {
                    name: 'Asana',
                    rating: 3,
                    description: 'Project Mgmt.',
                    imageUrl: '/tools/asana.svg'
                },
                {
                    name: 'Docker',
                    rating: 1,
                    description: 'Containerization',
                    imageUrl: '/tools/docker.svg'
                },
                {
                    name: 'Figma',
                    rating: 2,
                    description: 'Design Tool',
                    imageUrl: '/tools/figma.svg'
                },
                {
                    name: 'Firebase',
                    rating: 1,
                    description: 'Infra',
                    imageUrl: '/tools/firebase.svg'
                },
                {
                    name: 'Git',
                    rating: 3,
                    description: 'Version Control',
                    imageUrl: '/tools/git.svg'
                },
                {
                    name: 'Hetzner',
                    rating: 2,
                    description: 'language',
                    imageUrl: '/tools/hetzner.svg'
                },
                {
                    name: 'Make.com',
                    rating: 3,
                    description: 'RPA System',
                    imageUrl: '/tools/integromat.svg'
                },
                {
                    name: 'Jira',
                    rating: 1,
                    description: 'Project Mgmt.',
                    imageUrl: '/tools/jira.svg'
                },
                {
                    name: 'Obsidian',
                    rating: 3,
                    description: 'Digital Brain',
                    imageUrl: '/tools/obsidian.svg'
                },
                {
                    name: 'Postman',
                    rating: 3,
                    description: 'API Platform',
                    imageUrl: '/tools/postman.svg'
                },
                {
                    name: 'Stripe',
                    rating: 2,
                    description: 'Payment Platform',
                    imageUrl: '/tools/stripe.svg'
                },
                {
                    name: 'VSCode',
                    rating: 3,
                    description: 'IDE',
                    imageUrl: '/tools/vscode.svg'
                },
                {
                    name: 'WordPress',
                    rating: 3,
                    description: 'CMS',
                    imageUrl: '/tools/wordpress.svg'
                },
                {
                    name: 'Zoho',
                    rating: 3,
                    description: 'ERP Apps',
                    imageUrl: '/tools/zoho.svg'
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

.skillButton {
    border-width: 1px;
    border-radius: 0.5rem;
    border-color: white;
    align-items: center;
    justify-content: center;
    padding: 0.05rem 0.75rem;
    font-size: 0.85rem;
    transition: all ease-in-out 0.25s;
}

.skillButton:hover {
    border-color: #030712;
    color: #030712;
    background-color: white;
}

.skillBox {
    width: 205px;
    height: 70px;
}

.iconContainer {
    height: 50px;
    width: 50px;
    padding: 5px;
    border-width: 1px;
    border-radius: 0.25rem;
}
</style>
