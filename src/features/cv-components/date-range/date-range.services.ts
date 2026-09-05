import { DateSeparator, StoredDateRange } from "@shared/types";

/**
 * 저장된 값(ISO 문자열)이나 Date 객체를 유효한 Date로 정규화한다.
 *
 * settings는 persist(JSON)를 거치므로 Date 객체가 문자열로 되돌아온다.
 * 옛 버전이 저장한 Date 문자열도 여기서 함께 흡수한다.
 */
export const toDate = (value: unknown): Date | undefined => {
  if (!value) return undefined;

  const date =
    value instanceof Date
      ? value
      : typeof value === "string" || typeof value === "number"
        ? new Date(value)
        : undefined;

  if (!date || Number.isNaN(date.getTime())) return undefined;
  return date;
};

/** Date를 저장 가능한 ISO 문자열로 변환 */
export const toStoredDate = (date: Date | undefined): string | undefined =>
  date ? date.toISOString() : undefined;

export const toStoredDateRange = (range?: {
  from?: Date;
  to?: Date;
}): StoredDateRange => ({
  from: toStoredDate(range?.from),
  to: toStoredDate(range?.to),
});

export const formatDate = (
  date: unknown,
  separator: DateSeparator = ".",
  hasDate: boolean = true,
): string => {
  const parsed = toDate(date);
  if (!parsed) return "";

  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");

  return `${year}${separator}${month}${hasDate ? separator + day : ""}`;
};
