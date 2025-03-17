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

  const component = useComponentEditStore((state) => state.component);
  const selectComponent = useComponentEditStore(
    (state) => state.selectComponent,
  );

  const handleOutsideClick = () => {
    // console.log("canvas click");
    if (component) selectComponent(null);
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

  // for typescript
  const setPageRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) pageRefs.current[index] = el;
  }, []);

  return (
    <Container
      align="center"
      className="bg-zinc-200 w-full h-full pr-45 relative pt-20"
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
        className="w-full max-w-xl"
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};
