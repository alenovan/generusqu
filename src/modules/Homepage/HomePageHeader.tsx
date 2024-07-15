import FloatingNotif from "@/components/FloatingNotif";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HomePageHeader = () => {
  return (
    <div className="bg-[url('/assets/images/bg-header.jpg')] w-full min-h-[250px] bg-cover bg-no-repeat bg-bottom p-4 rounded-b-3xl relative px-4 py-4">
      <Stack>
        <Flex>
          <Box>
            <Text ml={2} fontSize={"20px"} fontFamily={"Poppins"} color={"#FFFFFF"}>Generus Qu</Text>

          </Box>
          {/* <span className="absolute top-4 right-4">
            <Link passHref href={"/notification"}>
              <FloatingNotif />
            </Link>
          </span> */}
        </Flex>
        <Box mt={10}>
          <Text ml={2} fontSize={"21px"} fontWeight="medium" fontFamily={"Poppins"} color={"#FFFFFF"}>Selamat Datang di Genereus Qu</Text>
          <Text ml={2} fontSize={"18px"} fontWeight="regular" fontFamily={"Poppins"} color={"#FFFFFF"}>Silahkan Scan Qr Code Untuk Absen</Text>
        </Box>

      </Stack>
    </div>
  );
};

export default HomePageHeader;
