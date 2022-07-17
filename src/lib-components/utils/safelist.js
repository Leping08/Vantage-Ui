/* eslint-disable */
const colors = require("tailwindcss/colors");
/* eslint-enable */

const shadows = [
  "shadow-xs",
  "shadow-sm",
  "shadow",
  "shadow-md",
  "shadow-lg",
  "shadow-xl",
  "shadow-2xl",
  "shadow-inner",
  "shadow-none",
];
const rounded = [
  "rounded-none",
  "rounded-sm",
  "rounded",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-2xl",
  "rounded-3xl",
  "rounded-full",
];

function colorsClasses(inputColors = "*") {
  let colorNames = [];

  if (inputColors === "*") {
    colorNames = Object.keys(colors);
  }

  if (Array.isArray(inputColors)) {
    colorNames = Object.keys(colors).filter(function (val) {
      return inputColors.indexOf(val) != -1;
    });
  }

  const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const classes = [];

  colorNames.map((color) => {
    numbers.map((number) => {
      //Background color
      classes.push(`bg-${color}-${number}`);
      classes.push(`hover:bg-${color}-${number}`);
      classes.push(`active:bg-${color}-${number}`);
      classes.push(`focus:bg-${color}-${number}`);

      //Border color
      classes.push(`border-${color}-${number}`);
      classes.push(`hover:border-${color}-${number}`);
      classes.push(`active:border-${color}-${number}`);
      classes.push(`focus:border-${color}-${number}`);

      //Ring color
      classes.push(`ring-${color}-${number}`);
      classes.push(`hover:ring-${color}-${number}`);
      classes.push(`active:ring-${color}-${number}`);
      classes.push(`focus:ring-${color}-${number}`);

      //Text color
      classes.push(`text-${color}-${number}`);
      classes.push(`hover:text-${color}-${number}`);
      classes.push(`active:text-${color}-${number}`);
      classes.push(`focus:text-${color}-${number}`);
    });
  });

  return classes;
}

function heightAndWidths() {
  const classes = [];
  const heights = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20,
    24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
  ];

  heights.map((number) => {
    classes.push(`h-${number}`);
    classes.push(`w-${number}`);
  });

  return classes;
}

module.exports = {
  vantageSafelist(colors) {
    return [
      ...colorsClasses(colors),
      ...heightAndWidths(),
      ...shadows,
      ...rounded,
    ];
  },
};
