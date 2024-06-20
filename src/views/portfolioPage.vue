<script setup>
</script>

<template>
    <div class="min-h-screen w-screen pinkBase flex flex-col">
        <div class="border-solid border-t-2 border-gray-200 mx-72">
            <div ref="line" class="line bg-blue-500 w-full h-1 my-4"></div>
            <div class="flex flex-row pt-16">
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover" href="/">Home</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover" href="/about-me">About
                    Me</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/contact">Contact</a>
            </div>
        </div>
        <div class="flex-1 border-solid border-t-2 border-gray-200 mx-72">
            <h1>Over the years I've worked on a myriad of different projects utilizing different tech stacks, both in my
                personal time as projects or hackathon submissions as well as in a professional capacity. Listed on this
                page are all non-NDA projects available.</h1>
        </div>
    </div>
</template>