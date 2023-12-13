import React from "react";
import {
  Badge,
  Box,
  Card,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { repotingTeamInfo } from "./constants/repotingTeamInfo";

const ReaportingTeam = () => {
  return (
    <>
      <Card padding="1rem">
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Box>
            <Text fontWeight="semibold">Reporting Team (10)</Text>
          </Box>

          <Grid templateColumns="repeat(2, 1fr)" gap="0.5rem">
            {repotingTeamInfo.map((data:any, index:any) => (
              <GridItem key={data.id}>
                {" "}
                <Box
                  key={index}
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={data.imageUrl}
                    alt="Dan Abramov"
                    height="3rem"
                    rounded="full"
                  />
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      as="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Text>{data.name}</Text> <Badge>...</Badge>
                    </Box>
                    <Text>{data.role}</Text>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
          <Link href="/allteam" color="#0096FF" fontWeight="bold">
            View All
          </Link>
        </Box>
      </Card>
    </>
  );
};

export default ReaportingTeam;
