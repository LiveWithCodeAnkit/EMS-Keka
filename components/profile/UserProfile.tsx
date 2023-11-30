import React from "react";
import { useRouter } from "next/router";
import {
  Image,
  Badge,
  Box,
  Card,
  Text,
  Divider,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Link,
} from "@chakra-ui/react";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import UserCard from "./id-card/UserCard";
import { userProfileMenuList } from "./constants/profileInfo";

const UserProfile = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleRoute = (path: any) => {
    router.push(path);
  };

  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          width: "full",
          color: "#D3D3D3",
          border: "1px",
        }}
      >
        <Image
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          height="16rem"
        />

        <Box
          as="div"
          w="full"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card padding="1rem">
            <Box
              as="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "0.5rem",
                width: "full",
                gap: "1rem",
              }}
            >
              {/* name */}
              <Box
                as="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "3rem",
                  }}
                >
                  <Text fontWeight="semibold" fontSize="28px">
                    Jhon James
                  </Text>
                  <Badge colorScheme="red">Not in Yet</Badge>
                </Box>
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "4rem",
                    "@media (max-width: 1024px)": {
                      gap: "1rem",
                    },
                  }}
                >
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <SlLocationPin />
                    <Text fontWeight="semibold">Surat</Text>
                  </Box>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <CiMail />
                    <Link
                      href="mailto:someone@example.com"
                      color="#0096FF"
                      fontWeight="semibold"
                    >
                      xyz@gmail.com
                    </Link>
                  </Box>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <BsTelephone />
                    <Link
                      href="tel:+4733378901"
                      color="#0096FF"
                      fontWeight="semibold"
                    >
                      1234567890
                    </Link>
                  </Box>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FaRegAddressCard />
                    <Button
                      sx={{
                        fontWeight: "semibold",
                        color: "#0096FF",
                      }}
                      onClick={onOpen}
                    >
                      ID Card
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Divider orientation="horizontal" />
              <Box
                as="div"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "4rem",
                  "@media (max-width: 1024px)": {
                    gap: "1rem",
                  },
                }}
              >
                <Box>
                  <Text fontSize="lg" fontWeight="semibold">
                    Job Title
                  </Text>
                  <Text fontSize="md">Front-End Developer</Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="semibold">
                    Department
                  </Text>
                  <Text fontSize="md">Web Deployment</Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="semibold">
                    Reporting To
                  </Text>
                  <Text fontSize="md">DK Raman</Text>
                </Box>
              </Box>
            </Box>
          </Card>
          <Box
            as="div"
            sx={{
              display: "flex",
              paddingLeft: "0.5rem",
              justifyContent: "start",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "2rem",

              fontWeight: "semibold",
              transition: "2s ease-out 100ms",
              paddingStart: "0.5rem",
            }}
          >
            <Box
              as="div"
              sx={{
                display: "flex",
                paddingLeft: "0.5rem",
                justifyContent: "start",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "2rem",
                fontWeight: "semibold",
                transition: "2s ease-out 100ms",
                paddingStart: "0.5rem",
                "@media (max-width: 768px)": {
                  gap: "0.2rem",
                },
              }}
            >
              {userProfileMenuList.map((menuItem: any, index: any) => (
                <Box
                  key={menuItem.id}
                  as="button"
                  position="relative"
                  onClick={() => {
                    handleRoute(menuItem.path);
                  }}
                >
                  <Text
                    fontWeight="semibold"
                    padding="0.5rem"
                    color="#0096FF"
                    position="relative"
                    _hover={{
                      cursor: "pointer",
                    }}
                    sx={{
                      transition: "2s ease-out 100ms",
                    }}
                  >
                    {menuItem.menuTittle}
                    {menuItem.hasBadge && (
                      <Badge
                        background="red.500"
                        h="0.5rem"
                        w="0.5rem"
                        borderRadius="2rem"
                        ml="0.5rem" // Adjust margin as needed
                      ></Badge>
                    )}
                  </Text>

                  <Box
                    sx={{
                      display: router.pathname.includes(menuItem.path)
                        ? "block"
                        : "none",
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderBottom: "8px solid #0096FF",
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        {children}
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.500">Digital ID Preview</DrawerHeader>
          <DrawerBody>
            <UserCard />
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue">Download</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default UserProfile;
