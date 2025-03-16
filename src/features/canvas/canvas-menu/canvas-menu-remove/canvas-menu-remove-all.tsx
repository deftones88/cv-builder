import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@shared/components/shadcnui";
import { XIcon } from "lucide-react";
import { usePagesStore } from "@stores";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";

export const CanvasMenuRemoveAll = () => {
  const pagesCount = usePagesStore((state) => state.pagesCount);
  const removeAllPages = usePagesStore((state) => state.removeAllPages);

  const handleClick = () => {
    removeAllPages();
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                // variant="outline"
                size={"icon"}
                className="shadow-sm rounded-l-none disabled:bg-gray-300 disabled:text-gray-500"
                disabled={pagesCount === 1}
              >
                <XIcon />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  작업한 이력서를 삭제하시겠습니까?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  삭제된 내용은 되돌릴 수 없습니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction onClick={handleClick}>
                  확인
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </TooltipTrigger>
      <TooltipContent side="right">전체 삭제</TooltipContent>
    </Tooltip>
  );
};
