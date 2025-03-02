import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";
import { Plus, X } from "lucide-react";
import { memo } from "react";

const FormArrayBase = ({ control, name }: FormFieldWithControls) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const fieldValue = Array.isArray(field.value)
          ? field.value
          : ["내용을 입력하세요"];

        const handleAddItem = () => {
          const defaultValue = "내용을 입력하세요";
          field.onChange([...fieldValue, defaultValue]);
        };

        const handleRemoveItem = (index: number) => {
          field.onChange(fieldValue.filter((_, i) => i !== index));
        };

        const handleItemChange = (index: number, newValue: string) => {
          const newItems = [...fieldValue];
          newItems[index] = newValue;
          field.onChange(newItems);
        };
        return (
          <FormItem className="flex flex-col">
            {fieldValue.map((item, index) => (
              <div key={index} className="flex gap-1">
                <FormControl>
                  <Textarea
                    value={item}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-0 focus-visible:ring-0"
                  />
                </FormControl>
                <Button
                  onClick={() => handleRemoveItem(index)}
                  className="w-5 h-6"
                >
                  <X className="w-1 h-1" />
                </Button>
              </div>
            ))}
            <Button
              onClick={handleAddItem}
              className="flex w-full items-center justify-center gap-2 rounded-md "
            >
              <Plus />
              <span>추가</span>
            </Button>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export const FormArray = memo(FormArrayBase);
