import {
  Button,
  Input,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@shared/components/shadcnui";
import { usePagesStore } from "@stores";
import { ChevronDown, ChevronUp, PlusIcon } from "lucide-react";

export const CanvasMenuAddPaper = () => {
  const carouselApi = usePagesStore((state) => state.carouselApi);
  const pagesCount = usePagesStore((state) => state.pagesCount);
  const selectedPageIndex = usePagesStore((state) => state.selectedPageIndex);
  const selectPage = usePagesStore((state) => state.selectPage);
  const addPage = usePagesStore((state) => state.addPage);

  const pageIndex = selectedPageIndex + 1;
  const [min, max] = [1, pagesCount];

  const handleIncrement = () => {
    const newValue = Math.min(pageIndex + 1, max);
    selectPage(newValue - 1);
    carouselApi?.scrollNext();
  };

  const handleDecrement = () => {
    const newValue = Math.max(pageIndex - 1, min);
    selectPage(newValue - 1);
    carouselApi?.scrollPrev();
  };

  const handleAddPage = () => {
    const newPage = selectedPageIndex + 1;
    addPage(newPage);
    selectPage(newPage);
    // 안 해주면 가끔 작동 안 함
    setTimeout(() => {
      carouselApi?.scrollTo(newPage);
    }, 50);
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Button
              variant="outline"
              size={"icon"}
              className="ml-4 rounded-r-none shadow-sm cursor-pointer"
              onClick={handleAddPage}
            >
              <PlusIcon />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">페이지 추가</TooltipContent>
      </Tooltip>
      <div className="relative flex items-center">
        <Input
          type="number"
          value={pageIndex}
          className="rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-0 w-15 bg-zinc-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          min={min}
          max={max}
          step={1}
          readOnly
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-4 w-4 disabled:text-zinc-400 cursor-pointer"
            onClick={handleIncrement}
            disabled={pageIndex >= max}
          >
            <ChevronUp className="h-2 w-2" />
            <span className="sr-only">위</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-4 w-4 disabled:text-zinc-400 cursor-pointer"
            onClick={handleDecrement}
            disabled={pageIndex <= min}
          >
            <ChevronDown className="h-2 w-2" />
            <span className="sr-only">아래</span>
          </Button>
        </div>
      </div>
    </>
  );
};
