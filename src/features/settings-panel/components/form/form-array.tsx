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
import { useState } from "react";

export const FormArray = ({
  control,
  name,
  ...props
}: FormFieldWithControls) => {
  const { value } = props;
  const [list, setList] = useState<string[]>(
    (value as string[]) ?? ["내용을 입력하세요"],
  );
  const handleAddItem = () => {
    setList([...list, list[0]]);
  };

  const handleRemoveItem = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, newValue: string) => {
    const newItems = [...list];
    newItems[index] = newValue;
    setList(newItems);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="flex flex-col">
          {list.map((item, index) => (
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
      )}
    />
  );
};
