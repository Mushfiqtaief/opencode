export const EmptyBorder = {
  topLeft: "",
  bottomLeft: "",
  vertical: "",
  topRight: "",
  bottomRight: "",
  horizontal: " ",
  bottomT: "",
  topT: "",
  cross: "",
  leftT: "",
  rightT: "",
}

export const SplitBorder = {
  border: ["left" as const, "right" as const],
  customBorderChars: {
    ...EmptyBorder,
    vertical: "┃",
  },
}

export const CardBorderChars = {
  ...EmptyBorder,
  vertical: "┃",
}

export const LeftAccentBorder = {
  border: ["left" as const],
  customBorderChars: CardBorderChars,
}

export const RoundedBorder = {
  border: ["top" as const, "right" as const, "bottom" as const, "left" as const],
  customBorderChars: {
    topLeft: "╭",
    topRight: "╮",
    bottomLeft: "╰",
    bottomRight: "╯",
    horizontal: "─",
    vertical: "│",
    topT: "┬",
    bottomT: "┴",
    leftT: "├",
    rightT: "┤",
    cross: "┼",
  },
}

export const SingleBorder = {
  border: ["top" as const, "right" as const, "bottom" as const, "left" as const],
  customBorderChars: {
    topLeft: "┌",
    topRight: "┐",
    bottomLeft: "└",
    bottomRight: "┘",
    horizontal: "─",
    vertical: "│",
    topT: "┬",
    bottomT: "┴",
    leftT: "├",
    rightT: "┤",
    cross: "┼",
  },
}

export const AsciiBorder = {
  border: ["top" as const, "right" as const, "bottom" as const, "left" as const],
  customBorderChars: {
    topLeft: "+",
    topRight: "+",
    bottomLeft: "+",
    bottomRight: "+",
    horizontal: "-",
    vertical: "|",
    topT: "+",
    bottomT: "+",
    leftT: "+",
    rightT: "+",
    cross: "+",
  },
}
