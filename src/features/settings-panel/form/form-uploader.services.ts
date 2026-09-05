/** 저장 용량을 감안한 최대 변 길이 (px) */
const MAX_DIMENSION = 1200;
/** 캔버스 재인코딩 품질 */
const JPEG_QUALITY = 0.85;
/** 투명도를 유지해야 하는 타입 */
const TRANSPARENT_TYPES = ["image/png", "image/webp"];
/** 캔버스로 안전하게 재인코딩할 수 있는 타입 */
const RASTER_TYPES = ["image/jpeg", "image/png", "image/webp"];

const readAsDataURL = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const loadImage = (dataUrl: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("이미지를 읽을 수 없습니다."));
    img.src = dataUrl;
  });

/**
 * 업로드한 파일을 data URL 문자열로 변환한다.
 *
 * File 객체는 JSON 직렬화가 되지 않아(=`{}`가 된다) persist 스토어에 담을 수 없다.
 * 큰 이미지는 sessionStorage 용량을 넘기므로 캔버스로 축소한 뒤 재인코딩한다.
 */
export const fileToStorableDataUrl = async (file: File): Promise<string> => {
  const dataUrl = await readAsDataURL(file);

  // gif/svg 등은 캔버스를 태우면 애니메이션·벡터가 깨지므로 원본을 그대로 쓴다
  if (!RASTER_TYPES.includes(file.type)) return dataUrl;

  const image = await loadImage(dataUrl);
  const { width, height } = image;
  const scale = Math.min(1, MAX_DIMENSION / Math.max(width, height));

  // 이미 충분히 작으면 재인코딩하지 않는다 (화질 손실 방지)
  if (scale === 1) return dataUrl;

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);

  const ctx = canvas.getContext("2d");
  if (!ctx) return dataUrl;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  const outputType = TRANSPARENT_TYPES.includes(file.type)
    ? file.type
    : "image/jpeg";

  return canvas.toDataURL(outputType, JPEG_QUALITY);
};
