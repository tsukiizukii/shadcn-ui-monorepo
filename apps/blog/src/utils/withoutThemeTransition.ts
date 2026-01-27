export function withoutThemeTransition(action: () => void) {
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode(`
      * {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }
    `),
  );
  document.head.appendChild(style);
  // テーマ切替
  action();
  // repaint を強制
  void style.offsetHeight;
  document.head.removeChild(style);
}
