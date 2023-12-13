import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { Controller, Control } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  initialValues: Number | string;
  type?: string;
  w?: string;
  placeholder?: string;
  control: Control<any>;
  errors: any;
  icon: React.FC<any>;
}

const InputGroupControl: React.FC<Props> = ({
  label,
  name,
  control,
  initialValues,
  errors,
  placeholder = "",
  type = "text",
  icon: IconComponent,
}) => {
  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={initialValues}
        render={({ field }) => (
          <>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={IconComponent} color="gray.300" />
              </InputLeftElement>
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                value={initialValues || field.value}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors[name] && errors[name].message}
            </FormErrorMessage>
          </>
        )}
      />
    </FormControl>
  );
};

export default InputGroupControl;
