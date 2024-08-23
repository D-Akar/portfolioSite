<template>
    <div class="slide flex flex-col flex-1 items-center justify-center">
        <h3 class="text-6xl font-bold text-white">Who am I?</h3>
        <skill-rotation />
        <div class="flex items-center flex-col my-16">
            <div class="text-white flex">
                <div class="w-3/5">
                    <p>Information Systems @TUM &</p>
                    <p>
                        Full-stack developer
                        <a href="https://www.medienstuermer.de/">@Medienstuermer</a>
                    </p>
                    <p>that also knows his way around:</p>
                    <ul>
                        <li>RPAs and CRM development</li>
                        <li>Low Code CMS Options</li>
                        <li>Microsoft Powerplatform</li>
                    </ul>
                    <p>Based out of Munich</p>
                    <p>
                        For more information on my tech stack, tools I enjoy using and my portfolio feel free to click
                        on the corresponding selectors!
                    </p>
                </div>
                <div class="w-2/5 items-center justify-center">Lineart Picture</div>
            </div>
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
