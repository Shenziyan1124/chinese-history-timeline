export const useScrollReveal = () => {
  const checkScroll = () => {
    if (!process.client) return;

    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    scrollRevealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

  onMounted(() => {
    if (process.client) {
      checkScroll();
      window.addEventListener("scroll", checkScroll);

      // 当 DOM 更新时重新检查
      const observer = new MutationObserver(() => {
        setTimeout(checkScroll, 100);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      onUnmounted(() => {
        observer.disconnect();
      });
    }
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("scroll", checkScroll);
    }
  });

  return {
    checkScroll,
  };
};
