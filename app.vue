<template>
  <div class="bg-rice bg-rice-paper text-ink font-song min-h-screen">
    <!-- 水墨装饰元素 -->
    <div
      class="ink-splash top-20 left-10 w-64 h-64 bg-ink rounded-full blur-3xl"
    ></div>
    <div
      class="ink-splash top-1/3 right-20 w-80 h-80 bg-ink rounded-full blur-3xl"
    ></div>
    <div
      class="ink-splash bottom-20 left-1/4 w-72 h-72 bg-ink rounded-full blur-3xl"
    ></div>

    <!-- 页面容器 -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden"
    >
      <!-- 页眉 -->
      <PageHeader />

      <!-- 筛选和搜索区域 (桌面端) -->
      <div
        class="hidden md:block bg-rice/80 p-4 rounded-lg shadow-md mb-8 border border-ink/20"
      >
        <div class="flex flex-col md:flex-row gap-4">
          <PeriodFilter v-model="activePeriod" />
          <SearchBox v-model="searchTerm" />
        </div>
      </div>

      <!-- 移动端菜单按钮 -->
      <div v-if="!mobileMenuOpen" class="md:hidden fixed top-4 right-4 z-50">
        <button
          class="bg-rice/90 p-2 rounded-md shadow-md"
          @click="mobileMenuOpen = true"
        >
          <i class="fa fa-bars text-xl"></i>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <Transition name="slide">
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 bg-rice/95 z-50 md:hidden"
        >
          <div class="p-6">
            <div class="flex justify-between items-center mb-8">
              <h2 class="font-calligraphy text-2xl">菜单</h2>
              <button class="p-2" @click="mobileMenuOpen = false">
                <i class="fa fa-times text-xl"></i>
              </button>
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-bold mb-3">历史时期</h3>
              <PeriodFilter v-model="activePeriod" />
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-bold mb-3">搜索</h3>
              <SearchBox v-model="searchTerm" />
            </div>

            <button
              class="w-full bg-ancient text-rice py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              @click="mobileMenuOpen = false"
            >
              查看结果
            </button>
          </div>
        </div>
      </Transition>

      <!-- 时间线滑块导航 -->
      <div class="mb-12">
        <div class="flex justify-between items-center mb-2 px-4">
          <span class="text-sm">公元前2070年</span>
          <span class="text-sm">至今</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          v-model.number="sliderValue"
          class="w-full h-2 bg-ink/10 rounded-lg appearance-none cursor-pointer accent-ink"
          @input="onSliderChange"
        />
      </div>

      <!-- 历史时期标题 -->
      <div class="mb-8 text-center">
        <h2
          class="font-calligraphy text-[clamp(1.8rem,3vw,2.5rem)]"
          :class="periodColors[activePeriod as keyof typeof periodColors]"
        >
          {{ periodNames[activePeriod as keyof typeof periodNames] }}
        </h2>
        <div
          v-if="filteredEvents.length === 0"
          class="text-ink/70 mt-4 text-lg"
        >
          抱歉，没有找到匹配的历史事件。
        </div>
      </div>

      <!-- 时间线容器 -->
      <div class="timeline-container relative pb-16">
        <TimelineSection
          v-for="period in visiblePeriods"
          :key="period.key"
          :period="period.key"
          :title="period.title"
          :events="period.events"
          @dot-click="handleDotClick"
        />
      </div>

      <!-- 页脚 -->
      <footer class="text-center py-8 border-t border-ink/20 mt-12">
        <p class="text-ink/70">华夏历史时间线 © 2025</p>
        <p class="text-ink/50 text-sm mt-2">
          探索上下五千年文明，传承华夏文化精髓
        </p>
      </footer>
    </div>

    <!-- 回到顶部按钮 -->
    <BackToTop />

    <!-- 视频播放模态框 -->
    <VideoModal
      :is-open="isModalOpen"
      :video="currentVideo"
      @close="closeVideo"
    />
  </div>
</template>

<script setup lang="ts">
import { periodNames, periodColors } from "~/data/history-events";
// import BackToTop from "~/components/Common/BackToTop.vue";
// import PageHeader from "~/components/Header/PageHeader.vue";
// import PeriodFilter from "~/components/Filter/PeriodFilter.vue";
// import SearchBox from "~/components/Filter/SearchBox.vue";

// 筛选和搜索
const { activePeriod, searchTerm, filteredEvents, setPeriod } = useFilter();

// 视频播放
const { isModalOpen, currentVideo, openVideo, closeVideo } = useVideoPlayer();

// 滚动动画
const { checkScroll } = useScrollReveal();

// 监听筛选结果变化，重新检查滚动动画
watch(filteredEvents, () => {
  if (process.client) {
    nextTick(() => {
      checkScroll();
    });
  }
});

// 移动端菜单
const mobileMenuOpen = ref(false);

// 时间线滑块
const sliderValue = ref(0);

const onSliderChange = () => {
  let period: string;
  const value = sliderValue.value;

  if (value < 25) {
    period = "ancient";
  } else if (value < 50) {
    period = "medieval";
  } else if (value < 75) {
    period = "modern";
  } else {
    period = "contemporary";
  }

  setPeriod(period);

  // 滚动到对应区域
  if (process.client) {
    nextTick(() => {
      const section = document.querySelector(
        `section[data-period="${period}"]`
      );
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
};

// 可见的时期区块
const visiblePeriods = computed(() => {
  const periods = [
    {
      key: "ancient",
      title: "古代史 (约公元前2070年-公元581年)",
      events: filteredEvents.value.filter((e) => e.period === "ancient"),
    },
    {
      key: "medieval",
      title: "中古史 (581年-1840年)",
      events: filteredEvents.value.filter((e) => e.period === "medieval"),
    },
    {
      key: "modern",
      title: "近代史 (1840年-1949年)",
      events: filteredEvents.value.filter((e) => e.period === "modern"),
    },
    {
      key: "contemporary",
      title: "现代史 (1949年至今)",
      events: filteredEvents.value.filter((e) => e.period === "contemporary"),
    },
  ];

  if (activePeriod.value === "all") {
    return periods.filter((p) => p.events.length > 0);
  }

  return periods.filter(
    (p) => p.key === activePeriod.value && p.events.length > 0
  );
});

// 处理时间轴点击
const handleDotClick = (event: any) => {
  openVideo(event);
};

// 页面标题
useHead({
  title: "华夏历史时间线",
  meta: [
    {
      name: "description",
      content: "上下五千年，纵横九万里，见证华夏文明的辉煌历程",
    },
  ],
});
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
