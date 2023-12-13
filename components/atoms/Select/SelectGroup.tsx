import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Controller, Control } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  control: Control<any>;
  initialValues: any;
  options: { value: any; label: string }[] | any;
  errors: any;
  isDark: boolean;
}

const SelectGroup: React.FC<Props> = ({
  label,
  name,
  control,
  options,
  initialValues,
  isDark,
  errors,
}) => {
  const animatedComponents = makeAnimated();

  return (
    <FormControl w="full" isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={initialValues}
        render={({ field }) => (
          <>
            <Select
              {...field}
              isMulti
              closeMenuOnSelect={false}
              defaultValue={initialValues}
              components={animatedComponents}
              options={options.map((value) => ({ value, label: value }))}
              onChange={(selected) => {
                field.onChange(selected);
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  background: isDark ? "#2d3748" : "",
                }),
                option: (base) => ({
                  ...base,
                  background: isDark ? "#2d3748" : "",
                  color: isDark ? "white" : "",
                }),
              }}
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

export default SelectGroup;
