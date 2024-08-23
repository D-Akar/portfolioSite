<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <!-- Shows the component currently selected by v-slot -->
      <component :is="Component" class="darkestBlue"></component>
    </transition>
  </router-view>
</template>

<style>
/** Route Transitions*/
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 1s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 1s ease-in
}
</style>