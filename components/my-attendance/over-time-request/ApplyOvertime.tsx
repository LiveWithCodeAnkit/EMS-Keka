import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { differenceInDays } from "date-fns";
import {
  Alert,
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Tag,
  TagLabel,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { leaveApprover } from "../../leave/constants/leaveList";

const ApplyOvertime = ({ onClose }) => {
  const animatedComponents = makeAnimated();

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
          <FormControl>
            <FormLabel htmlFor="fromDate">From</FormLabel>

            <DatePicker
              name="fromDate"
              dateFormat="dd MMMM, yyyy"
              placeholderText="Select Date"
              onChange={(date) => {
                handleStartDateChange(date);
              }}
              selected={startDate}
              className="date_Time_picker"
            />
          </FormControl>
          <Tag size="lg" variant="subtle" key="lg" colorScheme="gray" w="50%">
            <TagLabel>{calculateDays()} days</TagLabel>
          </Tag>

          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <FormLabel htmlFor="toDate">To</FormLabel>

            <DatePicker
              name="toDate"
              dateFormat="dd MMMM, yyyy"
              placeholderText="Select Date"
              onChange={(date) => {
                handleEndDateChange(date);
              }}
              selected={endDate}
              className="date_Time_picker"
            />
          </FormControl>
        </Box>
      </Card>

      <Box>
        <FormControl>
          <FormLabel>Overtime Hours</FormLabel>
          <InputGroup>
            <Input type="text" placeholder="" />
            <InputRightAddon children="Hours/day" />
          </InputGroup>
        </FormControl>
      </Box>
      <Alert status="warning">
        Compensation of overtime will only happen when your overtime request is
        approved and there are valid overtime hours against the request.
      </Alert>

      <FormControl w="full">
        <FormLabel>Note</FormLabel>
        <Input
          as={Textarea}
          type="Textarea"
          placeholder="Please enter note for applying overtime"
          size="md"
          name="reasonForLeave"
        />
      </FormControl>
      <FormControl w="full">
        <FormLabel>Notify</FormLabel>
        <Select
          closeMenuOnSelect={false}
          placeholder="Search Employee"
          components={animatedComponents}
          isMulti
          options={leaveApprover.map((value) => ({
            value,
            label: value,
          }))}
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
        <Text fontSize="14px">
          Note: These employees will be notified through email when your
          overtime request is approved.
        </Text>
      </FormControl>
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
  );
};

export default ApplyOvertime;
