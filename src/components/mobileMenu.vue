<template>
    <div>
        <transition :name="transitionName">
            <div v-show="!isOpen" :class="['menu-button', position, { 'active': isOpen }]" @click="openMenu">
                <svg class="menu-text" viewBox="0 0 100 100">
                    <path id="curve" d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" />
                    <text>
                        <textPath xlink:href="#curve">
                            CLICK HERE CLICK HERE CLICK HERE
                        </textPath>
                    </text>
                </svg>
            </div>
        </transition>
        <transition :name="transitionName">
            <div v-show="isOpen" class="menu-content">
                <button class="close-button text-white" @click="closeMenu">×</button>
                <nav class="flex flex-col lg:space-y-0 items-center text-white">
                    <a class="text-4xl my-4 font-bold flex justify-center headerHover" href="/">Home</a>
                    <a class="text-4xl my-4 font-bold flex justify-center headerHover" href="/about-me">About</a>
                    <a class="text-4xl my-4 font-bold flex justify-center headerHover" href="/portfolio">Portfolio</a>
                    <a class="text-4xl my-4 font-bold flex justify-center headerHover" href="/contact">Contact</a>
                </nav>
                <div class="flex flex-col justify-center pt-8 space-x-8">
                    <div>
                        <ul class="flex flex-row space-x-4 justify-center">
                            <li>
                                <a href="https://www.instagram.com/d3r.in/" class="text-red-500 hover:text-red-300"
                                    target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-instagram fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/0dakar" class="text-red-500 hover:text-red-300" target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fab fa-x-twitter fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/derin-akar/"
                                    class="text-red-500 hover:text-red-300" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-linkedin fa-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/D-Akar" class="text-red-500 hover:text-red-300"
                                    target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-github fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        position: {
            type: String,
            default: 'bottom-right',
            validator: (value) => ['top-center', 'bottom-right'].includes(value)
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        transitionName() {
            return this.position === 'top-center' ? 'slide-vertical' : 'slide-horizontal';
        }
    },
    methods: {
        openMenu() {
            this.isOpen = true;
        },
        closeMenu() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
.menu-button {
    position: fixed;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #050A18;
    cursor: pointer;
    z-index: 1001;
}

.menu-button.bottom-right {
    bottom: -40px;
    right: -40px;
}

.menu-button.top-center {
    top: -60px;
    left: calc(50% - 60px);
}

.menu-text {
    width: 100%;
    height: 100%;
    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.menu-text path {
    fill: none;
}

.menu-text text {
    fill: white;
    font-size: 9px;
    /* Reduced from 11px to maintain proportions */
}

.circle {
    position: absolute;
    top: 20px;
    /* Adjusted from 25px */
    left: 20px;
    /* Adjusted from 25px */
    width: 40px;
    /* Adjusted from 50px */
    height: 40px;
    /* Adjusted from 50px */
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #333;
}

.menu-content {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #050A18;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.menu-content a {
    font-size: 24px;
    margin: 10px 0;
    text-decoration: none;
}

.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    transition: all 0.3s ease;
}

.slide-vertical-enter-active,
.slide-vertical-leave-active,
.slide-horizontal-enter-active,
.slide-horizontal-leave-active {
    transition: transform 0.5s ease;
}

.slide-vertical-enter-from,
.slide-vertical-leave-to {
    transform: translateY(-100%);
}

.slide-horizontal-enter-from,
.slide-horizontal-leave-to {
    transform: translateX(100%);
}
</style>