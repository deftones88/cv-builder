import { MobileWarningBanner } from "@shared/components";
import { SidebarProvider } from "@shared/components/shadcnui";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-evenly w-full h-screen">
      <MobileWarningBanner />
      <SidebarProvider>{children}</SidebarProvider>
      <Toaster position="top-center" expand closeButton richColors />
    </div>
  );
};
