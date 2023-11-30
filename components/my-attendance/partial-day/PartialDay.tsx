import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { leaveApprover } from "../../leave/constants/leaveList";

const PartialDay = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const animatedComponents = makeAnimated();
  return (
    <>
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
        <Box>
          <FormControl>
            <FormLabel>Select Date</FormLabel>
            <Input type="date" placeholder="Select" />
          </FormControl>
        </Box>

        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="blue" value="1">
              Late Arrival
            </Radio>
            <Radio colorScheme="blue" value="2">
              Intervening Time-off
            </Radio>
            <Radio colorScheme="blue" value="3">
              Leaving Early
            </Radio>
          </Stack>
        </RadioGroup>

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
          <Input type="text" name="lateMin" w="20%" />
          <Text>minutes</Text>
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
              }),
              option: (base) => ({
                ...base,

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
            w: "full",
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

export default PartialDay;
