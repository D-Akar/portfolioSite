<template>
    <div class="h-screen w-screen pinkBase flex flex-col overflow-hidden text-white">
        <div
            class="flex-1 flex justify-center md:justify-end items-center flex-col mx-4 lg:mx-0 mb-4 my-8 xl:my-16 2xl:my-32">
            <div class="flex flex-col lg:flex-row items-center w-full md:w-auto mb-12 md:mb-0">
                <h1
                    class="text-6xl lg:text-8xl font-bold pb-4 md:pb-8 lg:pb-0 w-full md:w-auto flex flex-col md:flex-row">

                    Hi
                    there! <span class="hidden md:block ml-1">I'm</span><span class="block md:hidden">The
                        names</span></h1>
                <h2 class="text-8xl font-bold wordContainer ml-0 lg:ml-1">
                    <span class="word textPurple w-full md:w-auto px-4 lg:px-0">Derin.</span>
                    <span class="word textBlue w-full md:w-auto px-4 lg:px-0">Derin.</span>
                    <span class="word textRed w-full md:w-auto px-4 lg:px-0">Derin.</span>

                    <span class="word textGreen w-full md:w-auto px-4 lg:px-0">Derin.</span>

                    <span class="word textYellow w-full md:w-auto px-4 lg:px-0">Derin.</span>

                </h2>



            </div>
            <skillRotation class="w-full md:w-auto flex" />
        </div>
        <div class="hidden md:block flex-1 border-solid border-t-2 border-gray-200 mx-8 lg:mx-32 2xl:mx-72 h-full">

            <nav
                class="flex flex-col lg:flex-row pt-12 2xl:pt-16 space-y-4 md:space-y-16 lg:space-y-0 items-end md:items-center">
                <a class="flex-1 text-4xl font-bold flex justify-center headerHover" href="/about-me">About</a>
                <a class="flex-1 text-4xl font-bold flex justify-center headerHover" href="/portfolio">Portfolio</a>
                <a class="flex-1 text-4xl font-bold flex justify-center headerHover" href="/contact">Contact</a>
            </nav>
        </div>
        <mobileMenu class="block md:hidden" />
    </div>
</template>


<script>
import skillRotation from '../components/skillRotation.vue'
import mobileMenu from '../components/mobileMenu.vue'

export default {
    components: {
        skillRotation,
        mobileMenu
    },
    mounted() {
        this.startFontColorChange();
    },
    methods: {
        startFontColorChange() {
            var words = document.getElementsByClassName('word');
            var wordArray = [];
            var currentWord = 0;

            words[currentWord].style.opacity = 1;
            for (var i = 0; i < words.length; i++) {
                this.splitLetters(words[i], wordArray);
            }

            function changeWord() {
                var cw = wordArray[currentWord];
                var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
                for (var i = 0; i < cw.length; i++) {
                    animateLetterOut(cw, i);
                }

                for (var i = 0; i < nw.length; i++) {
                    nw[i].className = 'letter behind';
                    nw[0].parentElement.style.opacity = 1;
                    animateLetterIn(nw, i);
                }

                currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
            }

            function animateLetterOut(cw, i) {
                setTimeout(function () {
                    cw[i].className = 'letter out';
                }, i * 80);
            }

            function animateLetterIn(nw, i) {
                setTimeout(function () {
                    nw[i].className = 'letter in';
                }, 340 + (i * 80));
            }

            setInterval(changeWord, 3000);
            changeWord();
        },
        splitLetters(word, wordArray) {
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                letter.className = 'letter';
                letter.innerHTML = content.charAt(i);
                word.appendChild(letter);
                letters.push(letter);
            }

            wordArray.push(letters);
        }
    }
}
</script>