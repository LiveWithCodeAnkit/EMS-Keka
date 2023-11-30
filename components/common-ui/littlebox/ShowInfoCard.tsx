import React from "react";
import PropTypes from "prop-types";
import { BsCaretRightFill } from "react-icons/bs";
import { Box, Text, Divider, Card, Link } from "@chakra-ui/react";
const ShowInfoCard = ({
  headTittle,
  infoTitleOne,
  infoTitleTwo,
  infoTitleThree,
  valueOne,
  valueTwo,
  valueThree,
}) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              "@media (max-width: 1440px)": {
                fontSize: "14px",
              },
            }}
          >
            {headTittle}
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
            gap: "1rem",
            justifyContent: "center",
            "@media (max-width: 1024px)": {
              display: "none",
            },
          }}
        >
          <Box as="div" padding="0.5rem" textAlign="center">
            <Text
              sx={{
                fontWeight: "semibold",
              }}
            >
              {infoTitleOne}
            </Text>
            <Text>{valueOne}</Text>
          </Box>
          <Box
            as="div"
            className="vertical"
            sx={{
              borderLeft: "2px solid #F4F4F4",
            }}
          ></Box>
          <Box as="div" padding="0.5rem" textAlign="center">
            <Text
              sx={{
                fontWeight: "semibold",
              }}
            >
              {infoTitleTwo}
            </Text>
            <Text>{valueTwo}</Text>
          </Box>
          <Box
            as="div"
            className="vertical"
            sx={{
              borderLeft: "2px solid #F4F4F4",
            }}
          ></Box>
          <Box as="div" padding="0.5rem" textAlign="center">
            <Text
              sx={{
                fontWeight: "semibold",
              }}
            >
              {infoTitleThree}
            </Text>
            <Text>{valueThree}</Text>
          </Box>
        </Box>
      </Card>
    </>
  );
};

ShowInfoCard.propTypes = {
  headTittle: PropTypes.string.isRequired,
  infoTitleOne: PropTypes.string.isRequired,
  infoTitleTwo: PropTypes.string.isRequired,
  infoTitleThree: PropTypes.string.isRequired,
  valueOne: PropTypes.string.isRequired,
  valueTwo: PropTypes.string.isRequired,
  valueThree: PropTypes.string.isRequired,
};
export default ShowInfoCard;
