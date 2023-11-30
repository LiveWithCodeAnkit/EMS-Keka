import React, { useState } from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import DatePicker from "react-datepicker";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Tag,
  TagLabel,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { leaveApprover } from "../../leave/constants/leaveList";

const WorkFromHome = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const animatedComponents = makeAnimated();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
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
            <FormControl>
              <FormLabel htmlFor="fromDate">Start Date</FormLabel>

              <DatePicker
                name="fromDate"
                dateFormat="dd MMMM, yyyy"
                placeholderText="Select Date"
                className="date_Time_picker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </FormControl>
            <Tag size="lg" variant="subtle" key="lg" colorScheme="gray" w="50%">
              <TagLabel>0 days</TagLabel>
            </Tag>

            <FormControl
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <FormLabel htmlFor="toDate">End Date</FormLabel>
              <DatePicker
                name="toDate"
                dateFormat="dd MMMM, yyyy"
                placeholderText="Select Date"
                className="date_Time_picker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </FormControl>
          </Box>
        </Card>

        <Box>
          <Text>Session</Text>
          <Box
            as="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Button
              variant="outline"
              sx={{
                backgroundColor: selectedButton === 0 ? "#0096FF" : "initial",
                color: selectedButton === 0 ? "white" : "initial",
              }}
              onClick={() => handleButtonClick(0)}
            >
              Full Day
            </Button>

            <Button
              variant="outline"
              sx={{
                backgroundColor: selectedButton === 1 ? "#0096FF" : "initial",
                color: selectedButton === 1 ? "white" : "initial",
              }}
              onClick={() => handleButtonClick(1)}
            >
              First Half
            </Button>
            <Button
              variant="outline"
              sx={{
                backgroundColor: selectedButton === 2 ? "#0096FF" : "initial",
                color: selectedButton === 2 ? "white" : "initial",
              }}
              onClick={() => handleButtonClick(2)}
            >
              Secound Half
            </Button>
          </Box>
          <Checkbox value="sasuke">
            This is an hourly work from home request
          </Checkbox>
        </Box>
        <FormControl>
          <FormLabel htmlFor="reson">Reason</FormLabel>
          <Input as={Textarea} type="Textarea" id="aboutHobby" size="md" />
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
                 color: isDark ? "white" : "black",
               
              }),
              option: (base) => ({
                ...base,
                background: isDark ? "#2d3748" : "",
                color: isDark ? "white" : "",
              }),
            }}
          />
        </FormControl>
        <Text color="gray">
          These employees will be through email when your OD request is approved
        </Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button colorScheme="gray">Cancel</Button>
          <Button colorScheme="blue" type="submit">
            Request
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default WorkFromHome;
