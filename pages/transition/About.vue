<template>
    <div>
        This is Transition About
        <NuxtLink to="/transition/home">Home page</NuxtLink>
    </div>
</template>
<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1)
}
</style>
<script setup>
definePageMeta({
    layout: "transition",
    pageTransition: {
    name: 'rotate'
  }
});
</script>