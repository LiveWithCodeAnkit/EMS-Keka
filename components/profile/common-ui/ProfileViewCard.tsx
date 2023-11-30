import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const ProfileViewCard = ({ dataInfo }) => {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {dataInfo.map((data) => (
          <GridItem key={data.id}>
            <Box
              as="div"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                sx={{
                  color: "#A9A9A9",
                }}
              >
                {data.titleOne}
              </Text>
              <Text fontWeight="semibold">{data.infoOne}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProfileViewCard;
