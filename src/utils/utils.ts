export const colors = [
  "blue",
  "cyan",
  "orange",
  "gold",
  "geekblue",
  "lime",
  "green",
  "purple",
  "magenta",
  "red",
  "volcano",
];

export function getColorFromChar(char: string) {
  return colors[char.charCodeAt(0) % colors.length];
}
