<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center"
        @click.self="close"
      >
        <div
          class="video-modal-backdrop absolute inset-0 bg-ink/70"
          @click="close"
        ></div>

        <div
          class="video-modal relative bg-rice rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden mx-4"
        >
          <button
            class="absolute top-4 right-4 bg-ink/60 text-rice p-2 rounded-full z-10 hover:bg-ink/80 transition-colors"
            @click="close"
          >
            <i class="fa fa-times"></i>
          </button>

          <div class="p-6">
            <h3
              v-if="video"
              class="font-calligraphy text-2xl mb-4"
              :class="`text-${video.period}`"
            >
              {{ video.title }}
            </h3>

            <div
              class="aspect-video bg-ink/90 rounded-lg overflow-hidden relative flex items-center justify-center"
            >
              <iframe
                v-if="video && iframeSrc"
                :src="iframeSrc"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                class="w-full h-full absolute top-0 left-0"
              ></iframe>
            </div>

            <p v-if="video" class="mt-4 text-ink/80">
              {{ video.description }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { HistoricalEvent } from "~/data/history-events";

const props = defineProps<{
  isOpen: boolean;
  video: HistoricalEvent | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const iframeSrc = computed(() => {
  if (!props.video) return "";

  const videoUrl = props.video.videoUrl;
  if (videoUrl.includes("bilibili.com")) {
    const bvMatch = videoUrl.match(/BV[\w]+/);
    if (bvMatch) {
      const bvid = bvMatch[0];
      return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&t=${props.video.videoTime}`;
    }
  }

  return "";
});

const close = () => {
  emit("close");
};

// ESC键关闭
onMounted(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape" && props.isOpen) {
      close();
    }
  };

  if (process.client) {
    document.addEventListener("keydown", handleEsc);

    onUnmounted(() => {
      document.removeEventListener("keydown", handleEsc);
    });
  }
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
