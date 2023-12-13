import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, Text, useColorMode } from "@chakra-ui/react";
import { usePartialDay } from "../hook";
import { RadioControl } from "@atoms/Radio";
import { SelectGroup } from "@atoms/Select";
import { InputControl } from "@atoms/TextInput";
import { TextareaControl } from "@atoms/Textarea";
import { leaveApprover } from "../../leave/constants/leaveList";

const PartialDay = ({ onClose }) => {
  const { initialValues, schema, submit } = usePartialDay();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "1rem",
          }}
        >
          <InputControl
            label="Select Date"
            name="datePartial"
            control={control}
            initialValues={initialValues.datePartial}
            placeholder="Select"
            errors={errors}
            type="date"
          />
          <RadioControl
            label=""
            name="typeofProblem"
            control={control}
            defaultValue="Late Arrival"
            errors={errors}
            options={[
              { label: "Late Arrival", value: "Late Arrival" },
              { label: "Intervening Time-off", value: "Intervening Time-off" },
              { label: "Leaving Early", value: "Leaving Early" },
            ]}
          />

          <Box
            as="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Text>Will come late by</Text>
            <InputControl
              label=""
              name="comeLateMinti"
              control={control}
              initialValues={initialValues.comeLateMinti}
              errors={errors}
              type="text"
              w="20%"
            />
            <Text>minutes</Text>
          </Box>

          <TextareaControl
            label="Reason"
            name="lateResone"
            control={control}
            defaultValue={initialValues.lateResone}
            errors={errors}
          />

          <SelectGroup
            label="Notify"
            name="notifyPersons"
            control={control}
            options={leaveApprover}
            initialValues={initialValues.notifyPersons}
            isDark={isDark}
            errors={errors}
          />
          <Text color="gray">
            These employees will be through email when your OD request is
            approved
          </Text>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: "1rem",
              w: "full",
            }}
          >
            <Button colorScheme="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Request
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default PartialDay;
