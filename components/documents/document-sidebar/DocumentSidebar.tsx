import React from "react";
import { useRouter } from "next/router";
import { Box, Card, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Scrollbar } from "react-scrollbars-custom";
import { sidebarMenuList } from "../constants/sidebarmenus";
interface LayoutProps {
  children: React.ReactNode;
}

const DocumentSidebar: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box>
          <Heading as="h3" size="lg">
            Employee Documents
          </Heading>
        </Box>
        <Grid templateColumns="20% 78%" gap={6}>
          <GridItem>
            <Box
              as="div"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box as={Card}>
                <Box padding="1rem" bg="gray.500" fontWeight="semibold">
                  <Text>Employee Document Folder</Text>
                </Box>
                <Scrollbar
                  style={{
                    height: "40vh",
                    padding: "2rem",
                  }}
                >
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {sidebarMenuList.map((data: any, index: any) => (
                      <Box
                        as="div"
                        key={index}
                        bg={router.pathname === data.path ? "#e6fffa" : ""}
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          gap: "0.5rem",
                          alignItems: "center",
                          p: "0.5rem",
                          borderBottom: "1px solid #C0C0C0",
                        }}
                        _hover={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleRoute(data.path);
                        }}
                      >
                        <Box
                          h="3rem"
                          w="3rem"
                          bg="#40E0D0"
                          rounded="full"
                        ></Box>
                        <Box>
                          <Text fontWeight="semibold">
                            {data.headingTittle}
                          </Text>
                          <Text color="#C0C0C0">{data.subTittle}</Text>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Scrollbar>
              </Box>
            </Box>
          </GridItem>

          <GridItem colSpan={1}>{children}</GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default DocumentSidebar;
