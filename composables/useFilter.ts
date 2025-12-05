import { historyEvents, type HistoricalEvent } from "~/data/history-events";

export const useFilter = () => {
  const activePeriod = ref<string>("all");
  const searchTerm = ref<string>("");

  const filteredEvents = computed(() => {
    return historyEvents.filter((event) => {
      const matchesPeriod =
        activePeriod.value === "all" || event.period === activePeriod.value;

      const matchesSearch =
        !searchTerm.value ||
        event.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        event.description
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase()) ||
        event.year.toLowerCase().includes(searchTerm.value.toLowerCase());

      return matchesPeriod && matchesSearch;
    });
  });

  const setPeriod = (period: string) => {
    activePeriod.value = period;
  };

  const setSearchTerm = (term: string) => {
    searchTerm.value = term;
  };

  return {
    activePeriod,
    searchTerm,
    filteredEvents,
    setPeriod,
    setSearchTerm,
  };
};
