import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/components/shadcnui";
import { TODOS, VERSION_HISTORY } from "@shared/constants";
import { CircleHelpIcon } from "lucide-react";

export const SelectionPanelFooterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <CircleHelpIcon size={14} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>버전 히스토리</DialogTitle>
          <DialogDescription>
            {VERSION_HISTORY.map((history) => {
              const { majorVersion, subVersions } = history;
              return (
                <>
                  {subVersions.map((subVersion) => {
                    const { version, updates } = subVersion;
                    return (
                      <>
                        <h6 className="pt-2 font-bold"> v{majorVersion}</h6>
                        {updates.map((update) => {
                          const { version: miniVersion, update: miniUpdate } =
                            update;
                          return (
                            <p className="ml-2">
                              <span className="inline-block w-11">
                                v{majorVersion}.{version}.{miniVersion}
                              </span>
                              <span>: {miniUpdate}</span>
                            </p>
                          );
                        })}
                      </>
                    );
                  })}
                </>
              );
            })}
            <h6 className="pt-8 pb-2 font-bold"> 업데이트 계획</h6>
            <ul className="ml-6 list-disc [&>li]:mt-1">
              {TODOS.map((todo) => (
                <li>{todo}</li>
              ))}
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
