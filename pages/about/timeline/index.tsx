import React from "react";
import { Box } from "@chakra-ui/react";
import InnerLayout from "../../layout/InnerLayout";
import TimeLine from "../../../components/about/timeline/TimeLine";
import About from "../../../components/about/About";

const TimelinePage = () => {
  return (
    <>
      
      <InnerLayout>
        <About>
          <Box
            as="div"
            sx={{
              marginTop: "2rem",
            }}
          >
            <TimeLine />
          </Box>
        </About>
      </InnerLayout>
    </>
  );
};

export default TimelinePage;
