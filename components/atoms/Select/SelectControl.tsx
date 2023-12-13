import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { Controller, Control } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  control: Control<any>;
  defaultValue: any;
  options: { value: any; label: string }[];
  errors: any;
}

const SelectControl: React.FC<Props> = ({
  label,
  name,
  control,
  defaultValue,
  placeholder = "Select",
  options,
  errors,
}) => {
  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <Select {...field} placeholder={placeholder}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {errors[name] && errors[name].message}
            </FormErrorMessage>
          </>
        )}
      />
    </FormControl>
  );
};

export default SelectControl;
