<template class="darkestBlue">
  <router-view class="overflow-hidden darkestBlue" v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <!-- Shows the component currently selected by v-slot -->
      <component :is="Component" class="darkestBlue"></component>
    </transition>
  </router-view>
</template>