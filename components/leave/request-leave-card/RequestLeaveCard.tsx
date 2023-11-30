import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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
  Input,
  Select as SelectInput,
  Tag,
  TagLabel,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { leaveTypesList, leaveApprover } from "../constants/leaveList";
import { useLeave } from "../hook/useLeave";

const RequestLeaveCard = ({ onClose }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const animatedComponents = makeAnimated();
  const { initialValues, schema, handleLeave } = useLeave({ onClose });
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

  return (
    <>
      <form onSubmit={handleSubmit(handleLeave)}>
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

          <FormControl isInvalid={!!errors.typeOfLeave}>
            <FormLabel htmlFor="typeOfLeave">
              Select type of leave you want to apply
            </FormLabel>
            <Controller
              name="typeOfLeave"
              control={control}
              defaultValue={initialValues.typeOfLeave}
              render={({ field }) => (
                <SelectInput {...field} placeholder="Select" name="typeOfLeave">
                  {leaveTypesList.map((data, index) => (
                    <option key={index}>{data.leaveType}</option>
                  ))}
                </SelectInput>
              )}
            />
            <FormErrorMessage>
              {errors.typeOfLeave && errors.typeOfLeave.message}
            </FormErrorMessage>
          </FormControl>
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
                <FormControl>
                  <FormLabel>
                    From {startDate && startDate.toLocaleDateString()}
                  </FormLabel>
                  <SelectInput placeholder="Select">
                    <option>First half</option>
                    <option>Secound half</option>
                  </SelectInput>
                </FormControl>

                <FormControl
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "end",
                  }}
                >
                  <FormLabel>
                    To {endDate && endDate.toLocaleDateString()}{" "}
                  </FormLabel>
                  <SelectInput placeholder="Select">
                    <option>First half</option>
                    <option>Secound half</option>
                  </SelectInput>
                </FormControl>
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

          {/*custom date */}

          <FormControl isInvalid={!!errors.reasonForLeave} w="full">
            <FormLabel>Note</FormLabel>

            <Controller
              name="reasonForLeave"
              control={control}
              defaultValue={initialValues.reasonForLeave}
              render={({ field }) => (
                <Input
                  {...field}
                  as={Textarea}
                  type="Textarea"
                  placeholder="Type Here"
                  size="md"
                  name="reasonForLeave"
                />
              )}
            />
            <FormErrorMessage>
              {errors.reasonForLeave && errors.reasonForLeave.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl w="full" isInvalid={!!errors.notifyPersons}>
            <FormLabel>Notify</FormLabel>

            <Controller
              name="notifyPersons"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  {...field}
                  closeMenuOnSelect={false}
                  defaultValue={initialValues.notifyPersons}
                  components={animatedComponents}
                  isMulti
                  options={leaveApprover.map((value) => ({
                    value,
                    label: value,
                  }))}
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
              )}
            />
            <FormErrorMessage>
              {errors.notifyPersons && errors.notifyPersons.message}
            </FormErrorMessage>
          </FormControl>
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
