import { Option } from "./types";

export const getRandomColor = (currentTags: Option[]) => {
  const colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
  ];

  let availableColor = colors.filter(
    (color) => !currentTags.find((tag) => tag.colorScheme === color),
  );

  if (availableColor.length === 0) {
    availableColor = colors;
  }
  return availableColor[Math.floor(Math.random() * availableColor.length)];
};
