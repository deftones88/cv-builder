import { InfoList } from "@features/cv-components/contact";
import { DEFAULT_INFO_LIST } from "@features/cv-components/contact";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/components/shadcnui";
import { FORM_ICON_LIST } from "@shared/constants";
import { FormFieldWithControls } from "@shared/types";
import { renderIcon } from "@shared/utilities";
import { Plus, X } from "lucide-react";
import { memo } from "react";

const FormIconArrayBase = ({ control, name }: FormFieldWithControls) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const fieldValue = Array.isArray(field.value)
          ? field.value
          : DEFAULT_INFO_LIST;

        const handleAddItem = () => {
          const defaultValue = "@github";
          const id = fieldValue.length;
          const icon = "github";
          field.onChange([...fieldValue, { id, icon, info: defaultValue }]);
        };

        const handleRemoveItem = (index: number) => {
          field.onChange(fieldValue.filter((_, i) => i !== index));
        };

        const handleItemChange = (
          index: number,
          newValue: Partial<InfoList>,
        ) => {
          const newItems = [...fieldValue];
          newItems[index] = { ...newItems[index], ...newValue };
          field.onChange(newItems);
        };
        return (
          <FormItem className="flex flex-col">
            {fieldValue.map((item, index) => (
              <div key={index} className="flex h-full gap-1">
                <FormControl>
                  <Select
                    value={item.icon}
                    onValueChange={(value) =>
                      handleItemChange(index, { icon: value })
                    }
                  >
                    <SelectTrigger className="w-20 rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-0 focus-visible:ring-0 shadow-none0">
                      <SelectValue placeholder="선택" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="w-20 min-w-0">
                      {FORM_ICON_LIST.map(({ icon, value }) => (
                        <SelectItem key={value} value={value}>
                          {renderIcon(icon)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormControl>
                  <Input
                    value={item.info}
                    onChange={(e) =>
                      handleItemChange(index, { info: e.target.value })
                    }
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-0 focus-visible:ring-0 rounded-r-none"
                  />
                </FormControl>
                <Button
                  onClick={() => handleRemoveItem(index)}
                  className="w-5 rounded-l-none"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button
              onClick={handleAddItem}
              className="flex w-full items-center justify-center gap-2 rounded-md mt-1"
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

export const FormIconArray = memo(FormIconArrayBase);
