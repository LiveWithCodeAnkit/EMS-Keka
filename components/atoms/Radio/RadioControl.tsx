import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const RadioControl = ({
  label,
  name,
  control,
  defaultValue,
  errors,
  options,
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
            <RadioGroup {...field}>
              <Stack spacing={5} direction="row">
                {options.map((option) => (
                  <Radio
                    key={option.value}
                    colorScheme="blue"
                    value={option.value}
                  >
                    {option.label}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
            <FormErrorMessage>
              {errors[name] && errors[name].message}
            </FormErrorMessage>
          </>
        )}
      />
    </FormControl>
  );
};

export default RadioControl;
