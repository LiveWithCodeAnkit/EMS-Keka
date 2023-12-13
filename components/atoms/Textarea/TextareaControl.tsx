import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Controller, Control } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  control: Control<any>;
  defaultValue: any;
  errors: any;
}

const TextareaControl: React.FC<Props> = ({
  label,
  name,
  control,
  defaultValue,
  placeholder = "Type here",
  errors,
}) => {
  return (
    <FormControl isInvalid={!!errors[name]} w="full">
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <Textarea
              {...field}
              placeholder={placeholder}
              size="md"
              name={name}
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

export default TextareaControl;
