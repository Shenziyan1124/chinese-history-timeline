<template>
  <section class="mb-16 scroll-reveal" :data-period="period">
    <h3
      class="font-calligraphy text-2xl mb-6 pl-2 border-l-4"
      :class="[`text-${period}`, `border-${period}`]"
    >
      {{ title }}
    </h3>

    <!-- 时间线 -->
    <div class="timeline-line bg-ancient/30 mb-8 relative">
      <div
        v-for="(event, index) in events"
        :key="event.id"
        class="absolute top-1/2 -translate-y-1/2"
        :style="{ left: event.timelinePosition }"
      >
        <TimelineDot :event="event" @click="onDotClick" />
      </div>
    </div>

    <!-- 事件卡片网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HistoricalEvent } from "~/data/history-events";

defineProps<{
  period: string;
  title: string;
  events: HistoricalEvent[];
}>();

const emit = defineEmits<{
  dotClick: [event: HistoricalEvent];
}>();

const onDotClick = (event: HistoricalEvent) => {
  emit("dotClick", event);
};
</script>
