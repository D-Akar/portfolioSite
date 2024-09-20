<template>
    <div class="h-screen w-screen pinkBase flex flex-col overflow-hidden text-white">
        <div class="flex-1 flex justify-end items-center flex-col my-8 xl:my-16 2xl:my-32">
            <div class="flex items-center">
                <h1 class="text-8xl font-bold">Hi there! I'm</h1>
                <h2 class="text-8xl font-bold wordContainer ml-1">
                    <span class="word textPurple">Derin.</span>
                    <span class="word textBlue">Derin.</span>
                    <span class="word textRed">Derin.</span>
                    <span class="word textGreen">Derin.</span>
                    <span class="word textYellow">Derin.</span>
                </h2>
            </div>
            <skillRotation />
        </div>
        <div class="flex-1 border-solid border-t-2 border-gray-200 mx-16 lg:mx-32 2xl:mx-72">
            <nav class="flex flex-row pt-12 2xl:pt-16">
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/about-me">About</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/portfolio">Portfolio</a>
                <a class="flex-1 text-4xl font-bold flex items-center justify-center headerHover"
                    href="/contact">Contact</a>
            </nav>
        </div>
    </div>
</template>

<script>
import skillRotation from '../components/skillRotation.vue'

export default {
    components: {
        skillRotation
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