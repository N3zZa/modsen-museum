declare module '*.svg' {
  const content: string; // Указываем, что SVG импортируется как строка (URL)
  export default content;
}
