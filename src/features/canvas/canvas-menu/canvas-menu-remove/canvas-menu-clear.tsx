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
import { EraserIcon } from "lucide-react";
import { useComponentsStore } from "@stores";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";

export const CanvasMenuClear = () => {
  const componentsCount = useComponentsStore((state) => state.componentsCount);
  const removeAllComponents = useComponentsStore(
    (state) => state.removeAllComponents,
  );

  const handleClick = () => {
    removeAllComponents();
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
                className="shadow-sm rounded-none disabled:bg-gray-300 disabled:text-gray-500"
                disabled={!componentsCount}
              >
                <EraserIcon />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  현재 페이지 안의 내용을 지우시겠습니까?
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
      <TooltipContent>내용 삭제</TooltipContent>
    </Tooltip>
  );
};
