import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { Box, IconButton, Image, Input, Text } from "@chakra-ui/react";

const ViewLeave = () => {
  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px  Solid #E5E4E2",
        }}
      >
        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "0.5rem",
            borderBottom: "1px solid #E5E4E2",
            padding: "0.5rem",
          }}
        >
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Box>
            <Text fontWeight="semibold">Gopi Nandan</Text>
            <Text color="gray">
              Requested By Gopi Nandan on Feb 17,2023,10:23 am
            </Text>
          </Box>
        </Box>

        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          {/* //date */}
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              as="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "10%",
                alignItems: "center",
                border: "1px solid #E5E4E2",
                gap: "0.5rem",
                borderRadius: "1px",
              }}
            >
              <Text bg="#E5E4E2" w={"full"} textAlign="center">
                Dec
              </Text>
              <Text fontWeight="bold">7</Text>
              <Text fontSize="14px">Monday</Text>
            </Box>
            <Text>-</Text>
            <Box
              as="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "10%",
                alignItems: "center",
                border: "1px solid #E5E4E2",
                gap: "0.5rem",
                borderRadius: "1px",
              }}
            >
              <Text bg="#E5E4E2" w={"full"} textAlign="center">
                Dec
              </Text>
              <Text fontWeight="bold">11</Text>
              <Text fontSize="14px">Friday</Text>
            </Box>
            <Box>
              <Text fontWeight="semibold">0 Day of Bereavement Leave</Text>
              <Text color="gray">Leave ended 952 days ago</Text>
            </Box>
          </Box>
          {/* end date */}
          <Text fontWeight="semibold">
            No teammates are on leave on this day
          </Text>

          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Image
              borderRadius="full"
              boxSize="40px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Box>
              <Text>
                <b>Gopi Nandan</b> Feb 17,2023,10:23 am
              </Text>
              <Text>Demise of family member</Text>
            </Box>
          </Box>
        </Box>

        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Input placeholder="Add Commemt" size="lg" />
          <IconButton
            aria-label="Search database"
            h={"3rem"}
            w={"4rem"}
            icon={<FaRegMessage />}
          />
        </Box>
      </Box>
    </>
  );
};

export default ViewLeave;
