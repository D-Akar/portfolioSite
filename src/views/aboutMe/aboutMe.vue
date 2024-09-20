<template>
    <div class="slide flex flex-col flex-1 items-center justify-center">
        <h3 class="text-6xl font-bold text-white">Who am I?</h3>
        <skill-rotation />
        <div class="flex items-center flex-col my-4 2xl:my-8 w-full px-72">
            <p>Information Systems @TUM </p>
            <p>
                Full-stack developer
                <a href="https://www.medienstuermer.de/">@Medienstuermer</a>
            </p>
            <p>Also proficient in:</p>
            <ul class="list-disc list-inside">
                <li>Development for RPAs and CRMs</li>
                <li>Low Code CMS Platforms</li>
                <li>Microsoft Powerplatform</li>
            </ul>
            <p>Based out of Munich</p>
            <p>
                Fan of music, philosophy, reading <br>and video games
            </p>
            <p><a href="https://www.penguinrandomhouse.com/books/553182/american-prison-by-shane-bauer/">Current Book
                    Recommendation</a></p>
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
