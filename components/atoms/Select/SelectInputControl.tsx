import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const SelectInputControl = ({
  label,
  name,
  control,
  initialValues,
  errors,
  existingOptions,
  placeholder = "Type or select an option",
  w = "full",
}) => {
  const handleEnter = () => {
    const inputValue = control.getValues()[name];
    if (!existingOptions.includes(inputValue)) {
      console.log(`Saving new value: ${inputValue}`);
    }
  };
  return (
    <FormControl isInvalid={!!errors[name]} w={w}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={initialValues}
        render={({ field }) => (
          <>
            <Box>
              <Input
                {...field}
                type="text"
                placeholder={placeholder}
                onChange={(e) => field.onChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleEnter()}
                list={`${name}-options`}
              />
              <datalist id={`${name}-options`}>
                {existingOptions.map((option, index) => (
                  <option key={index} value={option} />
                ))}
              </datalist>
            </Box>
            <FormErrorMessage>
              {errors[name] && errors[name].message}
            </FormErrorMessage>
          </>
        )}
      />
    </FormControl>
  );
};

export default SelectInputControl;
