import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, Text } from "@chakra-ui/react";
import { TextareaControl } from "@atoms/Textarea"; 
import { useCancelLeave } from "../hook";

const CancelLeave = ({ onClose }) => {
  const { initialValues, schema, submit } = useCancelLeave({
    onClose,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
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

          <TextareaControl
            label="Note"
            name="leaveNote"
            control={control}
            defaultValue={initialValues.leaveNote}
            errors={errors}
          />

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
