import { Box, Button, Card, FormLabel, Input } from "@chakra-ui/react";
import React from "react";


const Timesheet = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <Box>
          <FormLabel>Recipients</FormLabel>
          <Input type="email" />
        </Box>
        <Box>
          <FormLabel>Subject</FormLabel>
          <Input name="subject" fontWeight="bold" />
        </Box>

        {/* <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ border: "1px solid black" }}
        /> */}
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Button colorScheme="teal" variant="outline">
            Submit
          </Button>
          <Button colorScheme="teal" variant="outline">
            cancel
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Timesheet;
