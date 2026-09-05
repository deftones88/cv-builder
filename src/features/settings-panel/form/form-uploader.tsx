import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";
import { X } from "lucide-react";
import { ChangeEvent, memo, useState } from "react";
import { toast } from "sonner";
import { fileToStorableDataUrl } from "./form-uploader.services";

/** 새로고침 이후에는 원본 파일명을 알 수 없으므로 대체 표기 */
const RESTORED_LABEL = "업로드된 이미지";

const FormUploaderBase = ({
  control,
  name,
  settings,
  ...props
}: FormFieldWithControls) => {
  const { id, label, options = ["파일을 올려주세요", "image/*"] } = props;
  const [placeholder, accept] = options;

  const [fileName, setFileName] = useState<string | null>(
    typeof settings.image === "string" && settings.image ? RESTORED_LABEL : null,
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;

          try {
            // File 객체는 직렬화되지 않으므로 data URL로 바꿔 저장한다
            const dataUrl = await fileToStorableDataUrl(file);
            field.onChange(dataUrl);
            setFileName(file.name);
          } catch (error) {
            console.error("이미지 업로드 실패:", error);
            toast.error("이미지를 불러오지 못했습니다. 다른 파일을 선택해주세요.");
          } finally {
            // 같은 파일을 다시 선택해도 change가 발생하도록 초기화
            e.target.value = "";
          }
        };

        const handleDelete = () => {
          field.onChange(undefined);
          setFileName(null);
        };

        return (
          <FormItem className="flex gap-0">
            <FormControl>
              <div className="relative w-full">
                <Input
                  id={`upload.${id}.${label}`}
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer [&::file-selector-button]:cursor-pointer w-full"
                  onChange={handleChange}
                  accept={accept}
                />
                <Input
                  className="text-zinc-800 font-bold w-full rounded-r-none"
                  value={fileName ? fileName : placeholder}
                  readOnly
                />
              </div>
            </FormControl>
            <Button
              type="button"
              onClick={handleDelete}
              className="rounded-l-none"
            >
              <X />
            </Button>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export const FormUploader = memo(FormUploaderBase);
