import type { HistoricalEvent } from "~/data/history-events";

export const useVideoPlayer = () => {
  const isModalOpen = ref(false);
  const currentVideo = ref<HistoricalEvent | null>(null);

  const openVideo = (event: HistoricalEvent) => {
    currentVideo.value = event;
    isModalOpen.value = true;
    // 禁止页面滚动
    if (process.client) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeVideo = () => {
    isModalOpen.value = false;
    currentVideo.value = null;
    // 恢复页面滚动
    if (process.client) {
      document.body.style.overflow = "";
    }
  };

  return {
    isModalOpen,
    currentVideo,
    openVideo,
    closeVideo,
  };
};
