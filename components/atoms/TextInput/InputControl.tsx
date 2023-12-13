import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Controller, Control } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  initialValues: Number | string | Date;
  type?: string;
  w?: string;
  placeholder?: string;
  control: Control<any>;
  errors: any;
}

const InputControl: React.FC<Props> = ({
  label,
  name,
  control,
  initialValues,
  errors,
  placeholder = "",
  type = "text",
  w = "full",
}) => {
  return (
    <FormControl isInvalid={!!errors[name]} w={w}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={initialValues}
        render={({ field }) => (
          <>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              value={
                field.value instanceof Date
                  ? field.value.toISOString().split("T")[0]
                  : field.value
              }
            />
            <FormErrorMessage>
              {errors[name] && errors[name].message}
            </FormErrorMessage>
          </>
        )}
      />
    </FormControl>
  );
};

export default InputControl;
