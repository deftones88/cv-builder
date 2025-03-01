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
import { ChangeEvent, useState } from "react";

export const FormUploader = ({
  control,
  name,
  // settings,
  ...props
}: FormFieldWithControls) => {
  const {
    id,
    label,
    // value,
    options = ["파일을 올려주세요", "image/*"],
  } = props;
  const [placeholder, accept] = options;

  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (
    fieldOnChange: (...event: unknown[]) => void,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    console.log(e.target.files);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      fieldOnChange(file);
      setFileName(file.name);
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
        return (
          <FormItem className="flex">
            <FormControl>
              <div className="relative w-full">
                <Input
                  id={`upload.${id}.${label}`}
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer [&::file-selector-button]:cursor-pointer w-full"
                  onChange={(e) => handleChange(field.onChange, e)}
                  accept={accept}
                />
                <Input
                  className="text-zinc-800 font-bold w-full"
                  value={fileName ? fileName : placeholder}
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
