import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return <div className="flex justify-evenly w-full h-screen">{children}</div>;
};
