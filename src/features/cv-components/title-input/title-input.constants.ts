import { JSX } from "react";
import { InputVariants } from "./title-input.types";

export const tagName: Record<InputVariants, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
};
export const styles: Record<InputVariants, string> = {
  h1: "text-2xl font-bold tracking-wide lg:text-5xl mb-2",
  h2: "text-xl font-semibold tracking-wide border-b pb-2 mb-1",
  h3: "text-lg font-semibold tracking-wide mb-1",
  h4: "text-md font-semibold tracking-wide mb-1",
  p: "text-xs leading-5",
  blockquote: "text-sm mt-2 border-l-2 pl-6 italic",
  lead: "text-sm text-gray-600",
  large: "text-lg font-semibold",
  small: "text-xs font-medium",
  muted: "text-xs text-gray-500",
};

export const presetTitle: Record<InputVariants, string> = {
  h1: "김영희",
  h2: "마케팅 전략 전문가",
  h3: "직무 경험",
  h4: "연구 프로젝트",
  p: "분기별 판매 목표를 지속적으로 초과 달성하였으며, 신규 고객 유치율을 전년 대비 27% 향상시켰습니다. 데이터 분석을 통한 의사결정으로 마케팅 예산 효율성을 개선했습니다.",
  blockquote:
    '"클라이언트 니즈를 정확히 파악하고 기술적 솔루션을 제시하는 능력이 탁월합니다." - 전 팀장 박민수',
  lead: "고객 중심 사고와 데이터 기반 의사결정을 통해 브랜드 가치를 높이는 마케팅 전문가입니다.",
  large: "브랜드 전략 | 디지털 마케팅 | 시장 조사",
  small: "영어, 일본어 비즈니스 회화 가능",
  muted: "포트폴리오 요청 시 제공 가능",
};
