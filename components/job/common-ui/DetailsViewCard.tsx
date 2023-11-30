import React from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const DetailsViewCard = ({ heading, listData }) => {
  return (
    <>
      <Card>
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
          }}
        >
          <Heading size="md"> {heading}</Heading>
          <Divider orientation="horizontal" />

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {listData.map((data) => (
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
        </Box>
      </Card>
    </>
  );
};

export default DetailsViewCard;
