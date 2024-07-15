import AppIcon from "@/components/AppIcon";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Center, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
export default function Profile() {
    return (
        <DashboardLayout
            bottomNavigation={true}
            px="15px"
            meta={{
                title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
                description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
            }}
            navbarHeader={{
                showBackButton: false,
                title: "Misi"
            }}>
            <Stack>
                <Flex h={"100px"} justifyContent="center" alignItems="center">
                    <Center>
                        <Text fontFamily="Poppins" fontWeight="semibold" fontSize={"18px"}
                        >
                            Profil
                        </Text>
                    </Center>
                </Flex>
                <Box
                    mb={"20px"}
                    style={{
                        background: "linear-gradient(to right, #34E89E, #01AB13)",
                        borderRadius: "18px",
                        boxShadow: "0px 5px 10px rgba(56, 89, 147, 0.05)",
                        padding: "15px",
                    }}
                >
                    <Flex justifyContent="space-between">
                        <HStack gap={5}>
                            <AppIcon src={"profile/photo"} color={"black"} />
                            <Stack gap={2}>
                                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#FFFFFF"}>
                                    Andi S.
                                </Text>
                                <Text fontFamily="Poppins" color={"#FFFFFF"}>
                                    andi.s@gmail.com
                                </Text>
                                {/* <Link passHref href={"/profile/verifikasi"}>
                                    <HStack cursor={"pointer"}>
                                        <AppIcon src={"optsecure"} color={"black"} cursor="pointer" mt="1px" />
                                        <Text fontFamily="Poppins" color={"#FFFFFF"}>
                                            Verifikasi Nomor HP
                                        </Text>
                                        <AppIcon src={"chevron-right-white"} color={"black"} cursor="pointer" mt="1px" />
                                    </HStack>
                                </Link> */}
                            </Stack>
                        </HStack>
                        <Center>
                            <Link passHref href={"/profile/edit"}>
                                <Box
                                    borderRadius="20px"
                                    color={"white"}
                                    background="rgba(255, 255, 255, 0.82)"
                                    display="flex"
                                    w={"70px"}
                                    h={"35px"}
                                    alignItems="center"
                                    justifyContent="center"
                                    textAlign={"center"}
                                    cursor="pointer"
                                    _hover={{
                                        bg: "gray.100",
                                        color: "black"
                                    }}
                                >
                                    <Text fontFamily="Poppins" textAlign="center" fontWeight="medium" fontSize="13px" color="#00AA12" mr={"5px"}>
                                        Edit
                                    </Text>
                                    <AppIcon src={"profile/edit"} color={"black"} />
                                </Box>
                            </Link>
                        </Center>

                    </Flex>
                </Box>
                <Box
                    backgroundColor="white"
                    borderRadius="18px"
                    boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                    px={5}
                    py="10px"
                >
                    <Stack gap={"10px"}>
                        <Text my="15px" fontFamily="Poppins" fontWeight={"semibold"} color={"#1D1D1D"}>Bantuan</Text>

                        <Flex justifyContent="space-between" >
                            <HStack gap={5}>
                                <AppIcon src={"profile/hubungikami"} color={"black"} />
                                <Stack gap={1}>
                                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"}>Hubungi Kami </Text>
                                </Stack>
                            </HStack>
                            <AppIcon src={"profile/chevronright-primary"} color={"black"} />
                        </Flex>
                        <Box my={"2px"}></Box>
                        <Flex justifyContent="space-between" >
                            <HStack gap={5}>
                                <AppIcon src={"profile/bantuan"} color={"black"} />
                                <Stack gap={1}>
                                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"}>Bantuan </Text>
                                </Stack>
                            </HStack>
                            <AppIcon src={"profile/chevronright-primary"} color={"black"} />
                        </Flex>


                    </Stack>
                </Box>
                <Box my={"6px"}></Box>
                <Box
                    backgroundColor="white"
                    borderRadius="18px"
                    boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                    px={5}
                    py="10px"
                >
                    <Stack gap={"10px"}>
                        <Text my="15px" fontFamily="Poppins" fontWeight={"semibold"} color={"#1D1D1D"}>Persyaratan dan Ketentuan</Text>

                        <Flex justifyContent="space-between" >
                            <HStack gap={5}>
                                <AppIcon src={"profile/syaratketentuan"} color={"black"} />
                                <Stack gap={1}>
                                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"}>Syarat dan Ketentuan</Text>
                                </Stack>
                            </HStack>
                            <AppIcon src={"profile/chevronright-primary"} color={"black"} />
                        </Flex>
                        <Box my={"2px"}></Box>
                        <Flex justifyContent="space-between" >
                            <HStack gap={5}>
                                <AppIcon src={"profile/kebijakan"} color={"black"} />
                                <Stack gap={1}>
                                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"}>Kebijakan Privasi </Text>
                                </Stack>
                            </HStack>
                            <AppIcon src={"profile/chevronright-primary"} color={"black"} />
                        </Flex>


                    </Stack>
                </Box>
                <Box my={"8px"}></Box>
                <Link passHref href={"/signin"}>
                    <Box
                        cursor={"pointer"}
                        mb={"20px"}
                        backgroundColor="white"
                        borderRadius="18px"
                        boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                        px={5}
                        py="10px"
                    >
                        <Flex justifyContent="space-between" >
                            <HStack gap={5}>
                                <AppIcon src={"profile/keluar"} color={"black"} />
                                <Stack gap={1}>
                                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"}>Keluar </Text>
                                </Stack>
                            </HStack>
                            <AppIcon src={"profile/chevronright-primary"} color={"black"} />
                        </Flex>
                    </Box>
                </Link>
                <Box my={"60px"}></Box>
            </Stack>
        </DashboardLayout>
    );
}
