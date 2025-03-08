import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@shared/components/shadcnui";
import { CircleHelpIcon } from "lucide-react";

export const SelectionPanelFooterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <CircleHelpIcon size={14} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>버전 히스토리</DialogHeader>
        <DialogDescription>v0.0.1 : Heading, Image, List</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
