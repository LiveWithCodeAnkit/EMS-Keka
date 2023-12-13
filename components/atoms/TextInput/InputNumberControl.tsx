import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Controller, Control } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  initialValues: Number | string;
  control: Control<any>;
  errors: any;
  w?: string;
  placeholder?: string;
  min: number;
  max: number;
  step: number;
}

const InputNumberControl: React.FC<Props> = ({
  label,
  name,
  control,
  initialValues,
  errors,
  min,
  max,
  step,
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
            <NumberInput
              {...field}
              defaultValue={1}
              min={min}
              max={max}
              step={step}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormErrorMessage>
              {errors[name] && errors[name].message}
            </FormErrorMessage>
          </>
        )}
      />
    </FormControl>
  );
};

export default InputNumberControl;
