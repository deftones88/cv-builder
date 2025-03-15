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
import { useComponentsStore } from "@stores";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { useEffect } from "react";

export const CanvasMenuRemoveAll = () => {
  const componentsCount = useComponentsStore((state) => state.componentsCount);
  const removeAllComponents = useComponentsStore(
    (state) => state.removeAllComponents,
  );

  const handleClick = () => {
    removeAllComponents();
  };

  useEffect(() => {
    console.log(componentsCount);
  }, [componentsCount]);
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
                disabled={!componentsCount}
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
      <TooltipContent>전체 삭제</TooltipContent>
    </Tooltip>
  );
};
