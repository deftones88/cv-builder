import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";
import { ChangeEvent, useState } from "react";
import { ACCEPTED_FILE_TYPES } from "@features/cv-components/img-placeholder";
import { X } from "lucide-react";

export const FormUploader = ({
  control,
  name,
  ...props
}: FormFieldWithControls) => {
  const { id, label, value = "파일을 올려주세요" } = props;

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (file: File) => {
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      alert("지원되지 않는 파일 형식입니다.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFileName(reader.result as string);
    };
    reader.readAsDataURL(file);
    setFileName(file.name);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  const handleDelete = () => {
    setFileName(null);
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        console.log("image", field);
        return (
          <FormItem className="flex">
            <FormControl>
              <div className="relative w-full">
                <Input
                  id={`upload.${id}.${label}`}
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer [&::file-selector-button]:cursor-pointer w-full"
                  onChange={handleChange}
                  accept="image/*"
                />
                <Input
                  className="text-zinc-800 font-bold w-full"
                  value={fileName ? fileName : (value as string)}
                  readOnly
                />
              </div>
            </FormControl>
            <Button onClick={handleDelete}>
              <X />
            </Button>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
