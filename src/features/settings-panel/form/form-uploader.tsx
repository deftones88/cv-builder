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

const FormUploaderBase = ({
  control,
  name,
  settings,
  ...props
}: FormFieldWithControls) => {
  const { id, label, options = ["파일을 올려주세요", "image/*"] } = props;
  const [placeholder, accept] = options;

  const [fileName, setFileName] = useState<string | null>(
    (settings.image as File)?.name ?? null,
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            field.onChange(file);
            setFileName(file.name);
          }
        };
        const handleDelete = () => {
          field.onChange(null);
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
            <Button onClick={handleDelete} className="rounded-l-none">
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
