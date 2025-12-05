<template>
  <div class="relative flex-grow max-w-md ml-auto">
    <input
      type="text"
      :value="modelValue"
      placeholder="搜索历史事件..."
      class="w-full px-4 py-2 pl-10 rounded-full border border-ink/30 bg-rice/90 focus:outline-none focus:ring-2 focus:ring-ink/30"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <i
      class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-ink/60"
    ></i>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>
