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
      <DialogTrigger asChild>
        <CircleHelpIcon size={14} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>버전 히스토리</DialogTitle>
          <DialogDescription>
            {VERSION_HISTORY.map((versionGroup) => (
              <div key={versionGroup.majorVersion}>
                {versionGroup.subVersions.map((subVersion) => (
                  <div key={subVersion.version}>
                    <h6 className="pt-2 font-bold">
                      v{versionGroup.majorVersion}
                    </h6>
                    {subVersion.updates.map((minorVersion) => (
                      <p key={minorVersion.version} className="ml-2">
                        <span className="inline-block w-11">
                          v{versionGroup.majorVersion}.{subVersion.version}.
                          {minorVersion.version}
                        </span>
                        <span>: {minorVersion.update}</span>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <h6 className="pt-8 pb-2 font-bold"> 업데이트 계획</h6>
            <ul className="ml-6 list-disc [&>li]:mt-1">
              {TODOS.map((todo) => (
                <li key={todo}>{todo}</li>
              ))}
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
