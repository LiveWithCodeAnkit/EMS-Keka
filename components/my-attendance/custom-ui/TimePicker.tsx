import React, { useState } from "react";
import { Box, FormControl, Flex, Input } from "@chakra-ui/react";

const TimePicker: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>("12:00 AM");

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  return (
    <Box p={1}>
      <FormControl>
        <Flex>
          <Input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            step="1800"
          />
        </Flex>
      </FormControl>
    </Box>
  );
};
export default TimePicker;
