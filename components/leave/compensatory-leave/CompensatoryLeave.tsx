import React, { useState } from "react";
import { BsPaperclip } from "react-icons/bs";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Button,
  Alert,
  FormErrorMessage,
} from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { TextareaControl } from "@atoms/Textarea";
import { useCompensatory } from "../hook";

const CompensatoryLeave = ({ onClose }) => {
  const { initialValues, schema, handleCompensatoryLeave } = useCompensatory({
    onClose,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);

  return (
    <>
      <form onSubmit={handleSubmit(handleCompensatoryLeave)}>
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Text fontWeight="semibold">
            Choose the date on which you have worked for to avail Compensatory
            Off
          </Text>
          <FormControl isInvalid={!!errors.dateRange}>
            <FormLabel>Compensatory of Dates</FormLabel>
            <Controller
              name="dateRange"
              control={control}
              render={({ field }) => (
                <RangeDatepicker
                  selectedDates={selectedDates}
                  onDateChange={(dates) => {
                    field.onChange(dates);
                    setSelectedDates(dates);
                  }}
                />
              )}
            />
            <FormErrorMessage>
              {errors.dateRange && errors.dateRange.message}
            </FormErrorMessage>
          </FormControl>

          <TextareaControl
            label="Note"
            name="leaveNote"
            control={control}
            defaultValue={initialValues.leaveNote}
            errors={errors}
          />

          <Button>
            <BsPaperclip />
            Upload Files
          </Button>

          <Alert status="info">Compensatory Off request for a 1 day</Alert>

          <Box
            as="div"
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "end",
            }}
          >
            <Button onClick={onClose}>Close</Button>
            <Button colorScheme="twitter" type="submit">
              Confirm
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default CompensatoryLeave;
