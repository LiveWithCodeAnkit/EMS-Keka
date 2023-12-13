import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { differenceInDays } from "date-fns";
import {
  Alert,
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Tag,
  TagLabel,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useOvertime } from "../hook";
import { SelectGroup } from "@atoms/Select";
import { TextareaControl } from "@atoms/Textarea";
import { InputAddonControl } from "@atoms/TextInput";
import { leaveApprover } from "../../leave/constants/leaveList";

const ApplyOvertime = ({ onClose }) => {
  const { initialValues, schema, submit } = useOvertime();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  //date calucation
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };
  const calculateDays = () => {
    if (startDate && endDate) {
      const days = differenceInDays(endDate, startDate);
      return days;
    }
    return 0;
  };
  //date calucation
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
            gap: "0.9rem",
            p: "1rem",
          }}
        >
          <Card p="0.5rem">
            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <FormControl isInvalid={!!errors.fromDate}>
                <FormLabel htmlFor="fromDate">From</FormLabel>
                <Controller
                  name="fromDate"
                  control={control}
                  defaultValue={initialValues.fromDate}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        name="fromDate"
                        dateFormat="dd MMMM, yyyy"
                        placeholderText="Select Date"
                        onChange={(date) => {
                          field.onChange(date);
                          handleStartDateChange(date);
                        }}
                        selected={field.value}
                        className="date_Time_picker"
                      />
                    </>
                  )}
                />
                <FormErrorMessage>
                  {errors.fromDate && errors.fromDate.message}
                </FormErrorMessage>
              </FormControl>
              <Tag
                size="lg"
                variant="subtle"
                key="lg"
                colorScheme="gray"
                w="50%"
              >
                <TagLabel>{calculateDays()} days</TagLabel>
              </Tag>

              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignItems: "end",
                }}
                isInvalid={!!errors.toDate}
              >
                <FormLabel htmlFor="toDate">To</FormLabel>
                <Controller
                  name="toDate"
                  control={control}
                  defaultValue={initialValues.toDate}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        name="toDate"
                        dateFormat="dd MMMM, yyyy"
                        placeholderText="Select Date"
                        onChange={(date) => {
                          field.onChange(date);
                          handleEndDateChange(date);
                        }}
                        selected={field.value}
                        className="date_Time_picker"
                      />
                    </>
                  )}
                />
                <FormErrorMessage>
                  {errors.toDate && errors.toDate.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </Card>

          <Box>
            <InputAddonControl
              label="Overtime Hours"
              name="otTotalTime"
              control={control}
              initialValues={initialValues.otTotalTime}
              errors={errors}
              placeholder=""
              type="text"
              addonText="Hours/day"
            />
          </Box>
          <Alert status="warning">
            Compensation of overtime will only happen when your overtime request
            is approved and there are valid overtime hours against the request.
          </Alert>

          <TextareaControl
            label="Note"
            name="descriptionOfOvertime"
            control={control}
            defaultValue={initialValues.descriptionOfOvertime}
            errors={errors}
          />

          <Box>
            <SelectGroup
              label="Notify"
              name="notifyPersons"
              control={control}
              options={leaveApprover}
              initialValues={initialValues.notifyPersons}
              isDark={isDark}
              errors={errors}
            />
            <Text fontSize="14px">
              Note: These employees will be notified through email when your
              overtime request is approved.
            </Text>
          </Box>

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
              Request Overtime
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ApplyOvertime;
