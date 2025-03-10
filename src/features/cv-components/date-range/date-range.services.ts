import { DateSeparator } from "@shared/types";

export const formatDate = (
  date: Date,
  separator: DateSeparator = ".",
  hasDate: boolean = true,
): string => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${separator}${month}${hasDate ? separator + day : ""}`;
};
