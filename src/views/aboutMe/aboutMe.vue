<template>
    <div class="slide flex flex-col flex-1 items-center justify-center">
        <h3 class="text-6xl font-bold text-white">Who am I?</h3>
        <skill-rotation />
        <div class="flex items-center flex-col my-4 2xl:my-16 w-full px-72">
                    <p class="infoContainer">Information Systems @TUM </p>
                    <p class="infoContainer">
                        Full-stack developer
                        <a href="https://www.medienstuermer.de/">@Medienstuermer</a>
                    </p>
                    <p class="infoContainer">Also proficient in:</p>
                    <ul class="list-disc list-inside">
                        <li class="infoContainer">RPAs and CRM development</li>
                        <li class="infoContainer">Low Code CMS Options</li>
                        <li class="infoContainer">Microsoft Powerplatform</li>
                    </ul>
                    <p class="infoContainer">Based out of Munich</p>
                    <p class="infoContainer">
                        Fan of music, philosophy, reading <br>and video games
                    </p>
                    <p class="infoContainer"><a href="https://www.penguinrandomhouse.com/books/553182/american-prison-by-shane-bauer/">Current Book Recommendation</a></p>
        </div>
    </div>
</template>

<script>
import skillRotation from '../../components/skillRotation.vue';

export default {
    name: 'aboutMe',
    components: {
        skillRotation
    }
};
</script>

<style>
.infoContainer {
    padding: 5px;
}
</style>
