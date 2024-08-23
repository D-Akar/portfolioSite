<template>
    <div class="h-screen w-screen pinkBase flex flex-col overflow-hidden text-white">
        <div class="flex-1 flex justify-end items-center flex-col my-32">
            <h1 class="text-8xl font-bold">Hi there! I'm Derin.</h1>
            <skillRotation/>
        </div>
        <div class="flex-1 border-solid border-t-2 border-gray-200 mx-72">
            <div class="flex flex-row pt-16">
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover" 
                    href="/about-me">About</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/portfolio">Portfolio</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/contact">Contact</a>
            </div>
        </div>
    </div>

</template>

<script>
import skillRotation from '../components/skillRotation.vue'
export default {
    components: {
        skillRotation
    }
}
</script>