import { Container } from "@shared/components/container";
import { useCallback, useEffect, useRef, useState } from "react";
import { Paper } from "./canvas-paper.types";
import { CanvasPaper } from "./canvas-paper";
import { useComponentEditStore, usePagesStore } from "@stores";
import { CanvasMenu } from "./canvas-menu/";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@shared/components/shadcnui";

export const Canvas = () => {
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paperSize, setPaperSize] = useState<Paper>("A4");
  const [api, setApi] = useState<CarouselApi>();

  const selectedId = useComponentEditStore((state) => state.selectedId);
  const selectComponent = useComponentEditStore(
    (state) => state.selectComponent,
  );

  const handleOutsideClick = () => {
    // console.log("canvas click");
    if (selectedId) selectComponent(null);
  };

  const pagesCount = usePagesStore((state) => state.pagesCount);
  const selectPage = usePagesStore((state) => state.selectPage);
  const setCarouselApi = usePagesStore((state) => state.setCarouselApi);

  // 위 menu add button 과 sync 하기 위한 함수
  useEffect(() => {
    if (!api) return;

    setCarouselApi(api);

    const onSelect = () => {
      selectPage(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api, selectPage, setCarouselApi]);

  // 언마운트(페이지 삭제) 시에도 슬롯을 비워야 한다.
  // `if (el)` 로 걸러버리면 삭제된 페이지의 DOM 참조가 남아 PDF에 그대로 출력된다.
  const setPageRef = useCallback((el: HTMLDivElement | null, index: number) => {
    pageRefs.current[index] = el;
  }, []);

  return (
    <Container
      align="center"
      /*
       * 세로가 짧으면 종이가 뷰포트보다 커진다. justify-center인 채로 넘치면
       * 위쪽이 잘려 상단 툴바와 겹쳤다. 스크롤을 열고 정렬은 종이 쪽의
       * `my-auto`에 맡긴다 (auto margin은 넘칠 때 0으로 접혀 위쪽이 잘리지 않는다).
       *
       * `md:pr-45`는 상세 설정 패널이 예약하는 폭(--sidebar-width)보다
       * 실제 폭(w-110)이 넓어서 넣었던 보정값이다. 이제 두 값이 같아 필요 없다.
       */
      className="bg-zinc-200 w-full h-full min-w-0 px-2 md:px-4 py-4 relative overflow-y-auto justify-start"
      onClick={handleOutsideClick}
    >
      <CanvasMenu
        paperSize={paperSize}
        setPaperSize={setPaperSize}
        pageRefs={pageRefs}
      />
      <Carousel
        opts={{
          slidesToScroll: 1,
          watchDrag: false,
        }}
        setApi={setApi}
        className="w-full max-w-xl my-auto"
      >
        <CarouselContent>
          {Array.from({ length: pagesCount }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                ref={(el) => setPageRef(el, index)}
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <CanvasPaper paperSize={paperSize} pageIndex={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/*
         * 화살표를 종이 바깥(-left-12)에 두면 캔버스를 벗어난다.
         * 예전에는 `md:pr-45`가 만들던 여백에 기대고 있었다.
         * 종이 가장자리 안쪽에 겹쳐 두면 어느 폭에서도 넘치지 않는다.
         * (캐러셀 바깥이라 PDF 캡처에는 포함되지 않는다)
         */}
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </Container>
  );
};
