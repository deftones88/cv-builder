// File: pdf-component-renderer.tsx
import React from "react";
import { View, Text } from "@react-pdf/renderer";
import {
  PdfImgPlaceholder,
  PdfTitleInput,
  PdfListItem,
} from "./pdf-components";
import { ComponentElementInstance } from "@shared/types";
import {
  AspectRatio,
  UploaderSize,
} from "@features/cv-components/img-placeholder";
import { InputVariants } from "@features/cv-components/title-input";
import { LIST_STYLE_TYPE } from "@features/cv-components/list-item";

// Convert File object to data URL
const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Image Placeholder Component for PDF
 */
const PdfImageComponent = ({
  component,
}: {
  component: ComponentElementInstance;
}) => {
  const settings = component.settings || {};

  // For static images or placeholders with no file
  if (!settings.image) {
    return (
      <PdfImgPlaceholder
        ratio={(settings.ratio as AspectRatio) || "2/3"}
        size={(settings.size as UploaderSize) || "md"}
        imageUrl={undefined}
        rounded={(settings.rounded as boolean) || false}
      />
    );
  }

  // For pre-processed data URLs (when using preprocessComponentsForPdf)
  if (settings.imageDataUrl) {
    return (
      <PdfImgPlaceholder
        ratio={(settings.ratio as AspectRatio) || "2/3"}
        size={(settings.size as UploaderSize) || "md"}
        imageUrl={settings.imageDataUrl as string}
        rounded={(settings.rounded as boolean) || false}
      />
    );
  }

  // If neither exists, render a placeholder
  return (
    <PdfImgPlaceholder
      ratio={(settings.ratio as AspectRatio) || "2/3"}
      size={(settings.size as UploaderSize) || "md"}
      imageUrl={undefined}
      rounded={(settings.rounded as boolean) || false}
    />
  );
};

/**
 * PdfComponentRenderer
 *
 * This component takes a component from your store and renders
 * the appropriate PDF component based on the component type.
 * It acts as a bridge between your component store and the PDF components.
 */
type PdfComponentRendererProps = {
  component: ComponentElementInstance;
};

export const PdfComponentRenderer: React.FC<PdfComponentRendererProps> = ({
  component,
}) => {
  // Get settings or default empty object
  const settings = component.settings || {};

  // Render different components based on type
  const renderComponent = () => {
    const { type } = component;

    // Map your component types to the PDF components
    switch (type) {
      case "TextInput":
        return (
          <PdfTitleInput
            variant={(settings.variant as InputVariants) || "h3"}
            title={settings.title as string}
          />
        );

      case "ListItem":
        return (
          <PdfListItem
            titleOptions={
              settings.titleOptions as { variant: InputVariants; title: string }
            }
            list={settings.list as string[]}
            listStyle={(settings.listStyle as LIST_STYLE_TYPE) || "disc"}
          />
        );

      case "ImgPlaceholder":
        return <PdfImageComponent component={component} />;

      // Add any other component types you have

      default:
        // Fallback for unknown component types
        console.warn(`Unknown component type: ${type}`);
        return (
          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 10, color: "#6B7280" }}>
              지원되지 않는 컴포넌트 유형: {type}
            </Text>
          </View>
        );
    }
  };

  return <View style={{ marginBottom: 8 }}>{renderComponent()}</View>;
};

/**
 * Preprocessing function for components with images
 * Use this before rendering if there are issues with image loading
 */
export async function preprocessComponentsForPdf(
  components: ComponentElementInstance[],
): Promise<ComponentElementInstance[]> {
  const processedComponents = await Promise.all(
    components.map(async (component) => {
      // If it's not an image component or doesn't have an image, return as is
      if (component.type !== "ImgPlaceholder" || !component.settings?.image) {
        return component;
      }

      try {
        // Convert the File to a data URL
        const dataUrl = await fileToDataUrl(component.settings.image as File);

        // Create a new component with the processed image
        return {
          ...component,
          settings: {
            ...component.settings,
            // Keep the original image and add the data URL
            imageDataUrl: dataUrl,
          },
        };
      } catch (error) {
        console.error("Error processing image:", error);
        // Return the component without the image in case of error
        return component;
      }
    }),
  );

  return processedComponents;
}

/**
 * PdfComponentsRenderer
 *
 * This component renders multiple components from your store.
 * It's useful for rendering the entire content of your CV.
 */
type PdfComponentsRendererProps = {
  components: ComponentElementInstance[];
};

export const PdfComponentsRenderer: React.FC<PdfComponentsRendererProps> = ({
  components,
}) => {
  return (
    <View>
      {components.map((component) => (
        <PdfComponentRenderer key={component.id} component={component} />
      ))}
    </View>
  );
};
