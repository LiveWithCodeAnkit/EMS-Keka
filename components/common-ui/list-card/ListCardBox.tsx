import React from "react";
import PropTypes from "prop-types";
import { BsCaretRightFill } from "react-icons/bs";
import { Box, Text, Divider, Card, Link, Icon } from "@chakra-ui/react";

const ListCardBox = ({ heading, info }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          marginBottom: "2rem",
          "@media (max-width: 1440px)": {
            marginBottom: "0rem",
          },
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
          <Text
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              "@media (max-width: 1440px)": {
                fontSize: "12px",
              },
            }}
          >
            {/* Upcoming Holidays */}
            {heading}
          </Text>
          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#0096FF",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              "@media (max-width: 1440px)": {
                fontSize: "14px",
                gap: "1px",
              },
              "@media (max-width: 425px)": {
                gap: "1px",
              },
            }}
          >
            View <BsCaretRightFill />
          </Link>
        </Box>

        <Divider />

        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            "@media (max-width: 1024px)": {
              display: "none",
            },
          }}
        >
          {info.map((data: any, index: number) => (
            <Box
              as="div"
              key={index}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Icon
                as={data.icon}
                w="2rem"
                h="2rem"
                borderRadius="full"
                bg={data.bg}
                color={data.color}
              />
              <Box
                as="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text fontSize="16px" fontWeight="semibold">
                  {data.title}
                </Text>
                <Text fontSize="14px" color="gray">
                  {data.date}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

ListCardBox.propTypes = {
  heading: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired,
};
export default ListCardBox;
