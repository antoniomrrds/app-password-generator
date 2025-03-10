import { CheckboxGroup, Checkbox } from "@heroui/checkbox";
import { FC } from "react";

import { TypeOfPassword } from "@/components/CheckBox/types";

type CheckBoxTypeOfPasswordProps = {
  setPasswordOptions: (options: string[]) => void;
  passwordOptions: string[];
  options: {
    value: TypeOfPassword;
    label: string;
  }[];
};

export const CheckBoxTypeOfPassword: FC<CheckBoxTypeOfPasswordProps> = ({
  setPasswordOptions,
  passwordOptions,
  options,
}) => {
  const handleValueChange = (newSelected: string[]) => {
    if (newSelected.length > 0) {
      setPasswordOptions(newSelected);
    }
  };

  return (
    <div className="flex flex-col gap-3 m-auto">
      <CheckboxGroup
        lineThrough
        color="secondary"
        label="Caracteres usados:"
        orientation="horizontal"
        value={passwordOptions}
        onValueChange={handleValueChange}
      >
        {options.map((option) => (
          <Checkbox key={option.value} value={option.value.toString()}>
            {option.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <p className="text-default-500 text-small">
        Selected: {passwordOptions.join(",")}
      </p>
    </div>
  );
};
