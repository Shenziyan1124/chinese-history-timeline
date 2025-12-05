<template>
  <div
    class="timeline-dot w-8 h-8 rounded-full bg-ancient border-4 border-rice group"
    :class="`bg-${event.period}`"
    @click="$emit('click', event)"
  >
    <div class="play-icon transition-transform"></div>
  </div>
</template>

<script setup lang="ts">
import type { HistoricalEvent } from "~/data/history-events";

defineProps<{
  event: HistoricalEvent;
}>();

defineEmits<{
  click: [event: HistoricalEvent];
}>();
</script>
