<template>
    <div>
        <transition name="circle">
            <div v-show="!isOpen" :class="['menu-button', { 'active': isOpen }]" @click="openMenu">
                <svg class="menu-text" viewBox="0 0 100 100">
                    <path id="curve" d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" />
                    <text>
                        <textPath xlink:href="#curve">
                            CLICK ME CLICK ME CLICK ME
                        </textPath>
                    </text>
                </svg>
            </div>
        </transition>
        <transition name="circle">
            <div v-show="isOpen" class="menu-content">
                <button class="close-button" @click="closeMenu">×</button>
                <nav class="flex flex-col lg:space-y-0 items-center">
                    <a class="text-4xl my-4 font-bold flex justify-center headerHover" href="/about-me">About</a>
                    <a class="text-4xl my-4 font-bold flex justify-center headerHover" href="/portfolio">Portfolio</a>
                    <a class="text-4xl my-4 font-bold flex justify-center headerHover" href="/contact">Contact</a>
                </nav>

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
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
    bottom: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #050A18;
    cursor: pointer;
    z-index: 1001;
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
    font-size: 11px;
}

.circle {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 50px;
    height: 50px;
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
    color: white;
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

.close-button:hover {
    background-color: #f0f0f0;
}

.circle-enter-active,
.circle-leave-active {
    transition: transform 0.5s ease;
}

.circle-enter-from,
.circle-leave-to {
    transform: translateX(100%);
}
</style>