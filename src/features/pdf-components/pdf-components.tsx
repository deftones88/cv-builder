// File: pdf-components.tsx
import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import {
  titleStyles,
  listStyles,
  getBulletChar,
  getNumberFormat,
  imageStyles,
  getImageDimensions,
  defaultFont,
} from "./pdf-stylesheets";
import { InputVariants } from "@features/cv-components/title-input";
import { LIST_STYLE_TYPE } from "@features/cv-components/list-item";
import {
  AspectRatio,
  UploaderSize,
} from "@features/cv-components/img-placeholder";

// TitleInput component for PDF
export type PdfTitleInputProps = {
  variant?: InputVariants;
  title?: string;
};

export const PdfTitleInput: React.FC<PdfTitleInputProps> = ({
  variant = "h3",
  title,
}) => {
  // Use the preset titles from your constants if title is not provided
  const defaultTitles: Record<InputVariants, string> = {
    h1: "김영희",
    h2: "마케팅 전략 전문가",
    h3: "직무 경험",
    h4: "연구 프로젝트",
    p: "분기별 판매 목표를 지속적으로 초과 달성하였으며, 신규 고객 유치율을 전년 대비 27% 향상시켰습니다. 데이터 분석을 통한 의사결정으로 마케팅 예산 효율성을 개선했습니다.",
    blockquote:
      '"클라이언트 니즈를 정확히 파악하고 기술적 솔루션을 제시하는 능력이 탁월합니다." - 전 팀장 박민수',
    lead: "고객 중심 사고와 데이터 기반 의사결정을 통해 브랜드 가치를 높이는 마케팅 전문가입니다.",
    large: "브랜드 전략 | 디지털 마케팅 | 시장 조사",
    small: "영어, 일본어 비즈니스 회화 가능",
    muted: "포트폴리오 요청 시 제공 가능",
  };

  const displayText = title ?? defaultTitles[variant];

  return <Text style={titleStyles[variant]}>{displayText}</Text>;
};

// ListItem component for PDF
export type PdfListItemProps = {
  titleOptions?: { variant: InputVariants; title: string };
  list?: string[];
  listStyle?: LIST_STYLE_TYPE;
};

export const PdfListItem: React.FC<PdfListItemProps> = ({
  titleOptions,
  list = [
    "다양한 이해관계자와의 원활한 의사소통 및 협상 능력 보유",
    "복잡한 문제에 대한 창의적 해결책 도출 및 실행 역량 입증",
  ],
  listStyle = "disc",
}) => {
  const isOrderedList = [
    "decimal",
    "decimal-leading-zero",
    "upper-roman",
    "lower-roman",
    "upper-alpha",
    "lower-alpha",
  ].includes(listStyle);

  return (
    <View style={listStyles.container}>
      {titleOptions && (
        <PdfTitleInput
          variant={titleOptions.variant}
          title={titleOptions.title}
        />
      )}
      <View style={isOrderedList ? listStyles.ol : listStyles.ul}>
        {list.map((item, index) => (
          <Text key={index} style={listStyles.listItem}>
            {isOrderedList
              ? `${getNumberFormat(index, listStyle)} ${item}`
              : `${getBulletChar(listStyle)} ${item}`}
          </Text>
        ))}
      </View>
    </View>
  );
};

// ImgPlaceholder component for PDF
export type PdfImgPlaceholderProps = {
  ratio?: AspectRatio;
  size?: UploaderSize;
  imageUrl?: string;
  rounded?: boolean;
};

export const PdfImgPlaceholder: React.FC<PdfImgPlaceholderProps> = ({
  ratio = "2/3",
  size = "sm",
  imageUrl,
  rounded = false,
}) => {
  const dimensions = getImageDimensions(ratio, size);

  // Create style objects
  const containerStyle = {
    ...imageStyles.container,
    width: dimensions.width,
    height: dimensions.height,
  };

  const placeholderStyle = {
    ...imageStyles.placeholder,
    width: dimensions.width,
    height: dimensions.height,
  };

  const imageStyle = {
    ...imageStyles.image,
    ...(rounded ? imageStyles.rounded : {}),
  };

  return (
    <View style={containerStyle}>
      <View style={placeholderStyle}>
        {imageUrl ? (
          <Image src={imageUrl} style={imageStyle} />
        ) : (
          // Empty placeholder for when no image is provided
          <Text style={{ color: "#9CA3AF", fontSize: 16 }}>이미지</Text>
        )}
      </View>
    </View>
  );
};

// Main CV Document component to put everything together
type CvDocumentProps = {
  children?: React.ReactNode;
};

export const CvDocument: React.FC<CvDocumentProps> = ({ children }) => {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          padding: 30,
          fontFamily: defaultFont,
        }}
      >
        {children}
      </Page>
    </Document>
  );
};
