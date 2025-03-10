import { DateRange } from "@shared/types";

export const EXPERIENCE_DEFAULT_TEXT: { title: string; description: string } = {
  title: "ABC 컨설팅",
  description:
    "2023년 상반기에 500만 달러 규모의 디지털 혁신 프로젝트를 총괄했으며, 프로젝트 완료 후 클라이언트의 디지털 전환율이 40% 상승했습니다. 2022년 하반기에는 고객사 업무 프로세스 효율화를 주도하여 생산성을 30% 개선했고, 이를 통해 연간 비용 절감액 120만 달러를 달성했습니다. 2022년 상반기에는 고객 경험 개선 프로그램을 설계하고 실행하여 고객 만족도 지수(NPS)를 15점 높였습니다.",
} as const;

export const DEFAULT_DATE_RANGE: DateRange = {
  from: new Date("2025.01.01"),
  to: new Date("2025.01.02"),
};
