import { ProfileAlignmentEng, ProfileAlignmentKor } from "./profile.types";

export const PROFILE_ALIGNMENT_MAP: Record<
  ProfileAlignmentKor,
  ProfileAlignmentEng
> = {
  왼쪽: "start",
  양쪽: "between",
  오른쪽: "end",
} as const;

/**
 * `justify-${alignment}` 동적 클래스는 Tailwind가 스캔하지 못한다.
 * (지금은 shadcn 코드가 우연히 같은 클래스를 써서 동작할 뿐이다)
 */
export const PROFILE_ALIGNMENT_CLASS: Record<ProfileAlignmentEng, string> = {
  start: "justify-start",
  between: "justify-between",
  end: "justify-end",
};
