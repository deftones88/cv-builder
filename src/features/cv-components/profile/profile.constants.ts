import { ProfileAlignmentEng, ProfileAlignmentKor } from "./profile.types";

export const PROFILE_ALIGNMENT_MAP: Record<
  ProfileAlignmentKor,
  ProfileAlignmentEng
> = {
  왼쪽: "start",
  양쪽: "between",
  오른쪽: "end",
} as const;
