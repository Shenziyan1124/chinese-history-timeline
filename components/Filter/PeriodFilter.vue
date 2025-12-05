<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="period in periods"
      :key="period.value"
      class="px-4 py-2 rounded-full text-sm font-medium transition-all"
      :class="
        isActive(period.value)
          ? activeClasses(period.value)
          : 'bg-ink/10 text-ink'
      "
      @click="$emit('update:modelValue', period.value)"
    >
      {{ period.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();

defineEmits<{
  "update:modelValue": [value: string];
}>();

const periods = [
  { value: "all", label: "全部时期" },
  { value: "ancient", label: "古代史" },
  { value: "medieval", label: "中古史" },
  { value: "modern", label: "近代史" },
  { value: "contemporary", label: "现代史" },
];

const isActive = (value: string) => {
  return props.modelValue === value;
};

const activeClasses = (value: string) => {
  // 所有激活状态都使用 bg-ancient 颜色
  if (value === "all") return "bg-ink text-rice";
  return "bg-ancient text-rice";
};
</script>
