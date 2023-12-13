import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { differenceInDays } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Tag,
  TagLabel,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useWorkFromHome } from "../hook";
import { SelectGroup } from "@atoms/Select";
import { TextareaControl } from "@atoms/Textarea";
import { leaveApprover } from "../../leave/constants/leaveList";

const WorkFromHome = ({ onClose }) => {
  const { initialValues, schema, submit, selectedButton, setSelectedButton } =
    useWorkFromHome({
      onClose,
    });

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleButtonClick = (buttonIndex: any) => {
    setSelectedButton(buttonIndex);
    const sessionTypes = ["Full Day", "First Half", "Second Half"];
    setValue("typeOfSession", sessionTypes[buttonIndex]);
  };

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  //date
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

  //date
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
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
          <FormControl>
            <FormLabel htmlFor="typeOfSession">Session</FormLabel>
            <Box
              as="div"
              sx={{
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <Button
                variant="outline"
                value="Full Day"
                sx={{
                  backgroundColor: selectedButton === 0 ? "#0096FF" : "initial",
                  color: selectedButton === 0 ? "white" : "initial",
                }}
                onClick={() => {
                  handleButtonClick(0);
                  setSelectedButton(0);
                }}
              >
                Full Day
              </Button>

              <Button
                variant="outline"
                value="First Half"
                sx={{
                  backgroundColor: selectedButton === 1 ? "#0096FF" : "initial",
                  color: selectedButton === 1 ? "white" : "initial",
                }}
                onClick={() => {
                  handleButtonClick(1);
                  setSelectedButton(1);
                }}
              >
                First Half
              </Button>
              <Button
                variant="outline"
                value="Second Half"
                sx={{
                  backgroundColor: selectedButton === 2 ? "#0096FF" : "initial",
                  color: selectedButton === 2 ? "white" : "initial",
                }}
                onClick={() => {
                  handleButtonClick(2);
                  setSelectedButton(2);
                }}
              >
                Second Half
              </Button>
            </Box>
            <Checkbox value="sasuke">
              This is an hourly work from home request
            </Checkbox>
          </FormControl>

          <TextareaControl
            label="Reason"
            name="reasonForWorkHome"
            control={control}
            defaultValue={initialValues.reasonForWorkHome}
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

export default WorkFromHome;
