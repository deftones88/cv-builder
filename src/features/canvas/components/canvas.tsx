import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Container } from "@shared/components/container";

export const Canvas = () => {
  return (
    <Container
      align="center"
      className="bg-gray-100 w-full h-full justify-between py-5"
    >
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Canvas
      </h3>
      <div className="scroll-m-20 w-full max-w-lg">
        <AspectRatio ratio={210 / 297} className="bg-white" />
      </div>
    </Container>
  );
};
