import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CiTimer } from "react-icons/ci";
import { differenceInDays } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import {
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
import { useLeave } from "../hook";
import { TextareaControl } from "@atoms/Textarea";
import { SelectControl, SelectGroup } from "@atoms/Select";
import { leaveTypesList, leaveApprover } from "../constants/leaveList";

const RequestLeaveCard = ({ onClose }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const { initialValues, schema, submit } = useLeave({ onClose });
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const [activeButton, setActiveButton] = useState(null);
  const [showCustomLeave, setShowCustomLeave] = useState<boolean>(false);

  const handleClick = (buttonName: any) => {
    setActiveButton(buttonName);
    if (buttonName != "fullDays") {
      setShowCustomLeave(true);
    } else {
      setShowCustomLeave(false);
    }
  };

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
          <SelectControl
            label="Select type of leave you want to apply"
            name="typeOfLeave"
            control={control}
            defaultValue={initialValues.typeOfLeave}
            options={leaveTypesList.map((data) => ({
              value: data.leaveType,
              label: data.leaveType,
            }))}
            errors={errors}
          />
          {!startDate ? (
            ""
          ) : (
            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                bg: "#dddfe2",
                borderRadius: "0.5rem",
                p: "0.5rem",
              }}
            >
              <Button
                colorScheme={activeButton === "fullDays" ? "gray" : ""}
                color="black"
                onClick={() => handleClick("fullDays")}
                transition="background-color 0.3s"
              >
                Full days
              </Button>
              <Button
                colorScheme={activeButton === "halfDays" ? "gray" : ""}
                color="black"
                onClick={() => handleClick("halfDays")}
                transition="background-color 0.3s"
              >
                Custom
              </Button>
            </Box>
          )}

          {/*custom date */}
          {!showCustomLeave ? (
            ""
          ) : (
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
                <SelectControl
                  label={`From ${
                    startDate ? startDate.toLocaleDateString() : ""
                  }`}
                  name="customFromDateStatus"
                  control={control}
                  defaultValue={initialValues.customFromDateStatus}
                  options={[
                    { value: "First half", label: "First half" },
                    { value: "Secound half", label: "Secound half" },
                  ]}
                  errors={errors}
                />

                <SelectControl
                  label={`To ${endDate ? endDate.toLocaleDateString() : ""}`}
                  name="customToDateStatus"
                  control={control}
                  defaultValue={initialValues.customToDateStatus}
                  options={[
                    { value: "First half", label: "First half" },
                    { value: "Secound half", label: "Secound half" },
                  ]}
                  errors={errors}
                />
              </Box>
            </Card>
          )}

          {!startDate ? (
            ""
          ) : (
            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <CiTimer />
              <Text>
                You are requesting for <b>{calculateDays()} days</b> of leave
              </Text>
            </Box>
          )}
          <TextareaControl
            label="Note"
            name="reasonForLeave"
            control={control}
            defaultValue={initialValues.reasonForLeave}
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
        </Box>
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
      </form>
    </>
  );
};

export default RequestLeaveCard;
