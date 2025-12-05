<template>
  <Transition name="fade">
    <button
      v-if="visible"
      class="fixed bottom-8 right-8 bg-ink/80 text-rice p-3 rounded-full shadow-lg back-to-top hover:bg-ink transition-colors z-50"
      @click="scrollToTop"
    >
      <i class="fa fa-arrow-up"></i>
    </button>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false);

const checkScroll = () => {
  if (process.client) {
    visible.value = window.pageYOffset > 300;
  }
};

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  if (process.client) {
    checkScroll();
    window.addEventListener("scroll", checkScroll);

    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll);
    });
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
