// Apply a saved preference before paint. A fresh visit always starts in dark mode.
try {
  const savedTheme = localStorage.getItem("junkai-theme");
  if (savedTheme === "light" || savedTheme === "dark")
    document.documentElement.dataset.theme = savedTheme;
} catch {
  /* The site also works when browser storage is unavailable. */
}
