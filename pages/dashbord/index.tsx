import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import MiniBoxes from "../quickInfo/MiniBoxes";
import ClockInOutBox from "../../components/clockInOut/ClockInOutBox";
import Clock from "../../components/home/Clock";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home </title>
      </Head>
      <Box
        as="div"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Clock />

        <Box
          as="div"
          sx={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            "@media (max-width: 1024px)": {
              flexDirection: "column-reverse",
            },
          }}
        >
          <MiniBoxes />
          <ClockInOutBox />
        </Box>
      </Box>
    </>
  );
}
