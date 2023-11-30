import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useCancelLeave } from "../hook/useCancelLeave";

const CancelLeave = ({ onClose }) => {
  const { initialValues, schema, handleCancelLeave } = useCancelLeave({
    onClose,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <>
      <form onSubmit={handleSubmit(handleCancelLeave)}>
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            p: "1rem",
          }}
        >
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Text fontWeight="normal" color="gray">
                Employee Name
              </Text>
              <Text fontWeight="semibold">{initialValues.empName}</Text>
            </Box>
            <Box>
              <Text fontWeight="normal" color="gray">
                Leave Type
              </Text>
              <Text fontWeight="semibold">{initialValues.leaveType}</Text>
            </Box>
            <Box>
              <Text fontWeight="normal" color="gray">
                Leave Dates
              </Text>
              <Text fontWeight="semibold">{initialValues.leaveDate}</Text>
            </Box>
            <Box>
              <Text fontWeight="normal" color="gray">
                No of Days
              </Text>
              <Text fontWeight="semibold">{initialValues.numOfDays}</Text>
            </Box>
          </Box>
          <Box>
            <Text>Note</Text>
            <Text>{initialValues.leaveNote}</Text>
          </Box>

          {/* ///cancel reson */}
          <FormControl isInvalid={!!errors.leaveNote}>
            {" "}
            <FormLabel>Note</FormLabel>
            <Controller
              name="leaveNote"
              control={control}
              defaultValue={initialValues.leaveNote}
              render={({ field }) => (
                <Input
                  as={Textarea}
                  type="Textarea"
                  placeholder="Type Here"
                  size="md"
                  name="leaveNote"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>
              {errors.leaveNote && errors.leaveNote.message}
            </FormErrorMessage>
          </FormControl>
          {/* ///cancel reson */}

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

export default CancelLeave;
