import {
  AspectRatio,
  UploaderSize,
} from "@features/cv-components/img-placeholder";
import { LIST_STYLE_TYPE } from "@features/cv-components/list-item";
import { Font, StyleSheet } from "@react-pdf/renderer";

// Register your local fonts
Font.register({
  family: "GowunBatang",
  fonts: [
    {
      src: "/assets/fonts/Gowun_Batang/GowunBatang-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/assets/fonts/Gowun_Batang/GowunBatang-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "GowunDodum",
  src: "/assets/fonts/Gowun_Dodum/GowunDodum-Regular.ttf",
  fontWeight: "normal",
});

Font.register({
  family: "Pretendard",
  src: "/assets/fonts/Pretendard/PretendardVariable.ttf",
  fontWeight: "normal", // React PDF doesn't support variable fonts well, so use as normal
});

Font.register({
  family: "Gasoek",
  src: "/assets/fonts/Gasoek/Gasoek-Heavy.ttf",
  fontWeight: "bold",
});

Font.register({
  family: "CookieRun",
  fonts: [
    {
      src: "/assets/fonts/CookieRun/CookieRun-Regular.ttf",
      fontWeight: "normal",
    },
    { src: "/assets/fonts/CookieRun/CookieRun-Bold.ttf", fontWeight: "bold" },
    { src: "/assets/fonts/CookieRun/CookieRun-Black.ttf", fontWeight: 900 },
  ],
});

Font.register({
  family: "Dohyeon",
  src: "/assets/fonts/Dohyeon/Dohyeon.ttf",
  fontWeight: "normal",
});

Font.register({
  family: "Orbit",
  src: "/assets/fonts/Orbit/Orbit-Regular.ttf",
  fontWeight: "normal",
});

Font.register({
  family: "Hahmlet",
  fonts: [
    { src: "/assets/fonts/Hahmlet/Hahmlet-Thin.ttf", fontWeight: 100 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-ExtraLight.ttf", fontWeight: 200 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-Light.ttf", fontWeight: 300 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-Regular.ttf", fontWeight: 400 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-Medium.ttf", fontWeight: 500 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-SemiBold.ttf", fontWeight: 600 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-Bold.ttf", fontWeight: 700 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-ExtraBold.ttf", fontWeight: 800 },
    { src: "/assets/fonts/Hahmlet/Hahmlet-Black.ttf", fontWeight: 900 },
  ],
});

// Default font for the PDF document
export const defaultFont = "Pretendard";

// TitleInput styles
export const titleStyles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 8,
    fontFamily: defaultFont,
  },
  h2: {
    fontSize: 18,
    fontWeight: "semibold",
    letterSpacing: 0.5,
    paddingBottom: 4,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    fontFamily: defaultFont,
  },
  h3: {
    fontSize: 16,
    fontWeight: "semibold",
    letterSpacing: 0.5,
    marginBottom: 4,
    fontFamily: defaultFont,
  },
  h4: {
    fontSize: 14,
    fontWeight: "semibold",
    letterSpacing: 0.5,
    marginBottom: 4,
    fontFamily: defaultFont,
  },
  p: {
    fontSize: 10,
    lineHeight: 1.5,
    fontFamily: defaultFont,
  },
  blockquote: {
    fontSize: 12,
    marginTop: 8,
    paddingLeft: 12,
    fontStyle: "italic",
    borderLeftWidth: 2,
    borderLeftColor: "#e5e7eb",
    fontFamily: defaultFont,
  },
  lead: {
    fontSize: 12,
    color: "#4B5563", // gray-600
    fontFamily: defaultFont,
  },
  large: {
    fontSize: 16,
    fontWeight: "semibold",
    fontFamily: defaultFont,
  },
  small: {
    fontSize: 10,
    fontWeight: "medium",
    fontFamily: defaultFont,
  },
  muted: {
    fontSize: 10,
    color: "#6B7280", // gray-500
    fontFamily: defaultFont,
  },
});

// List item styles
export const listStyles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  ul: {
    paddingLeft: 8,
  },
  ol: {
    paddingLeft: 8,
  },
  listItem: {
    fontSize: 10,
    marginBottom: 3,
    textIndent: -12,
    paddingLeft: 12,
  },
});

// Get bullet character based on list style
export const getBulletChar = (listStyle: LIST_STYLE_TYPE): string => {
  switch (listStyle) {
    case "disc":
      return "•";
    case "circle":
      return "○";
    case "square":
      return "■";
    case "none":
      return "";
    default:
      return "•";
  }
};

// Get number format based on list style
export const getNumberFormat = (
  index: number,
  listStyle: LIST_STYLE_TYPE,
): string => {
  switch (listStyle) {
    case "decimal":
      return `${index + 1}.`;
    case "decimal-leading-zero":
      return `${(index + 1).toString().padStart(2, "0")}.`;
    case "upper-roman":
      return toRoman(index + 1).toUpperCase() + ".";
    case "lower-roman":
      return toRoman(index + 1).toLowerCase() + ".";
    case "upper-alpha":
      return String.fromCharCode(65 + (index % 26)) + ".";
    case "lower-alpha":
      return String.fromCharCode(97 + (index % 26)) + ".";
    default:
      return `${index + 1}.`;
  }
};

// Helper function to convert number to Roman numeral
function toRoman(num: number): string {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

// Image placeholder styles
export const imageStyles = StyleSheet.create({
  container: {
    position: "relative",
    marginHorizontal: "auto",
  },
  placeholder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed #d1d5db",
    borderRadius: 4,
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  rounded: {
    borderRadius: 4,
  },
});

// Size constants for images
export const imageSizes: Record<UploaderSize, { width: number }> = {
  sm: { width: 50 },
  md: { width: 80 },
  lg: { width: 140 },
};

// Calculate aspect ratio dimensions for images
export const getImageDimensions = (ratio: AspectRatio, size: UploaderSize) => {
  const width = imageSizes[size].width;
  let height: number;

  switch (ratio) {
    case "1/1":
      height = width;
      break;
    case "2/3":
      height = width * (3 / 2);
      break;
    case "3/2":
      height = width * (2 / 3);
      break;
    case "4/3":
      height = width * (3 / 4);
      break;
    case "3/4":
      height = width * (4 / 3);
      break;
    case "16/9":
      height = width * (9 / 16);
      break;
    case "9/16":
      height = width * (16 / 9);
      break;
    default:
      height = width;
  }

  return { width, height };
};
