import { useHalloweenTheme } from "@/hooks/useHalloweenTheme";

const ThemeToggleFab = () => {
  const { theme, toggleTheme } = useHalloweenTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[1000] w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/50 animate-glow-border pointer-events-auto"
      title={theme === "halloween" ? "Switch to Default Theme" : "Switch to Halloween Theme"}
      aria-label="Toggle Halloween Theme"
    >
      {theme === "halloween" ? "☀️" : "🎃"}
    </button>
  );
};

export default ThemeToggleFab;
