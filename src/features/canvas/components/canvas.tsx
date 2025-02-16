import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Container } from "@shared/components/container";

export const Canvas = () => {
  return (
    <Container align="center" className="bg-zinc-200 w-full h-full">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Canvas
      </h3>
      <div className="scroll-m-20 w-lg h-full flex items-center">
        <AspectRatio ratio={210 / 297} className="bg-white shadow-xl" />
      </div>
    </Container>
  );
};
