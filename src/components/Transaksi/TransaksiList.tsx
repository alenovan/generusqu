import {
  Box,
  Stack,
  Text,
  Flex,
  Image,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

type TransaksiListProps = {};

const data = [
  {
    time: "Hari Ini, 01 Oktober 2023",
    data: [
      {
        label: "Pengajian Mumi Daerah Januari ",
        status: "ONTIME",
      },
      {
        label: "Pengajian Mumi Daerah Januari ",
        status: "INTIME",
      },
      {
        label: "Pengajian Mumi Daerah Januari ",
        status: "LATE",
      },
      {
        label: "Pengajian Mumi Daerah Januari ",
        status: "LATEPERMISSION",
      },
      {
        label: "Pengajian Mumi Daerah Januari ",
        status: "Absent",
      },
    ],
  },
  {
    time: "Rabu, 25 September 2023",
    data: [
      {
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Finstagram-2-1-logo%202.png?alt=media&token=03758d37-511b-46bb-a154-beb82912a4b0",
        target: "@makana",
        tugas: "Username follow ",
        notransaksi: "ID 12426172",
        time: "19.00 PM",
        status: "COMPLETED",
        price: 500,
      },
      {
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Finstagram-2-1-logo%202.png?alt=media&token=03758d37-511b-46bb-a154-beb82912a4b0",
        target: "@makana",
        tugas: "Username follow ",
        notransaksi: "ID 12426172",
        time: "19.00 PM",
        status: "COMPLETED",
        price: 500,
      },
    ],
  },
];

const TransaksiList = (props: TransaksiListProps) => {
  return (
    <Box mb={20}>
      {data?.map((item, i) => (
        <Stack mb={"25px"} cursor={"pointer"} key={i}>
          <Text
            fontFamily="Poppins"
            fontWeight={"semibold"}
            color={"#4A4A4A"}
            mb={2}
          >
            {item.time}
          </Text>
          {item.data?.map((detail, i) => (
            <>
              <Link passHref href={"/transaksi/1"}>
                <Box
                  backgroundColor="white"
                  borderRadius="10px"
                  boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                  px={5}
                  py="10px"
                >
                  <Stack>
                    <Flex justifyContent="space-between">
                      <Flex>
                        <Stack ms={4} gap={0}>
                          <Text
                            fontFamily="Poppins"
                            fontWeight={"semibold"}
                            color={"#001F25"}
                          >
                            Pengajian Mumi Daerah Januari{" "}
                          </Text>
                          <Text
                            fontFamily="Poppins"
                            fontWeight={"light"}
                            color={"#4A4A4A"}
                            mt={2}
                          >
                            Alenovan
                          </Text>
                        </Stack>
                      </Flex>
                      <Stack textAlign={"right"}>
                        <Text color={"#898989"} fontFamily="Poppins">
                          20.00 PM
                        </Text>
                        <Box
                          as="span"
                          display="inline-block"
                          py={1}
                          px={2}
                          fontFamily="Poppins"
                          fontWeight={"semibold"}
                          borderRadius={10}
                          bg={
                            detail.status === "ONTIME"
                              ? "rgba(67, 214, 160, 0.21)"
                              : detail.status === "INTIME"
                              ? "rgba(0, 100, 0, 0.16)"
                              : detail.status === "LATE"
                              ? "rgba(255, 120, 77, 0.16)"
                              : detail.status === "LATEPERMISSION"
                              ? "rgba(128, 0, 128, 0.16)"
                              : "rgba(255, 0, 0, 0.16)"
                          }
                          fontSize="xs"
                          color={
                            detail.status === "ONTIME"
                              ? "#079D49"
                              : detail.status === "INTIME"
                              ? "#006400"
                              : detail.status === "LATE"
                              ? "#F7971E"
                              : detail.status === "LATEPERMISSION"
                              ? "#800080"
                              : "#FF0000"
                          }
                        >
                          {detail.status === "ONTIME"
                            ? "On Time"
                            : detail.status === "INTIME"
                            ? "In Time"
                            : detail.status === "LATE"
                            ? "Telat"
                            : detail.status === "LATEPERMISSION"
                            ? "Ijin Telat"
                            : "Tidak Hadir"}
                        </Box>
                      </Stack>
                    </Flex>
                  </Stack>
                </Box>
              </Link>
            </>
          ))}
        </Stack>
      ))}
    </Box>
  );
};

export default TransaksiList;
