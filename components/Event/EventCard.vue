<template>
  <div
    class="event-card bg-rice/80 p-5 rounded-lg shadow-md border transition-all"
    :class="`border-${event.period}/20`"
  >
    <div class="flex items-start gap-4">
      <div
        class="font-bold whitespace-nowrap mt-1"
        :class="`text-${event.period}`"
      >
        {{ event.year }}
      </div>
      <div>
        <h4 class="text-lg font-bold mb-2">{{ event.title }}</h4>
        <p class="text-ink/80">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HistoricalEvent } from "~/data/history-events";

defineProps<{
  event: HistoricalEvent;
}>();
</script>
