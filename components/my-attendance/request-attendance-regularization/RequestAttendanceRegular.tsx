import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoPencil, GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import TimePicker from "../custom-ui/TimePicker";

const RequestAttendanceRegular = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: "2rem",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}
        >
          <RadioGroup>
            <Radio value="1">
              Add/update time entries to adjust attendance logs.
            </Radio>
            <Radio value="2">
              Raise regularization request to exempt this day from tracking
              policy penalization
            </Radio>
          </RadioGroup>
          <Text>
            Click and select time box that you would like to adjust and make
            changes to the time{" "}
          </Text>
        </Box>
        <Box>
          <FormLabel as="legend">Attendance Adjustment</FormLabel>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IoIosAddCircleOutline fontSize="24px" color="gray" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <GoArrowDownLeft color="green" />
              <TimePicker />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <GoArrowUpRight color="red" />
              <TimePicker />
            </Box>
            <Flex>
              <IoIosAddCircleOutline fontSize="24px" color="gray" />
              <IoIosRemoveCircleOutline fontSize="24px" color="gray" />
            </Flex>
          </Box>
        </Box>

        <FormControl>
          <FormLabel>Note</FormLabel>
          <Input
            as={Textarea}
            type="Textarea"
            placeholder="Type Here"
            size="md"
            name="leaveNote"
          />
        </FormControl>

        <Box
          as="div"
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "end",
          }}
        >
          <Button>Close</Button>
          <Button colorScheme="twitter" type="submit">
            Confirm
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RequestAttendanceRegular;
