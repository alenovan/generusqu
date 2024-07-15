
import {
    Box, Divider, Flex, Stack, Text, Image, HStack
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";





const TransaksiDetailItem = () => {
    return (
        <Stack >
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
                            <Image
                                src={"https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012336.png?alt=media&token=d879c3d5-7d43-46a9-aaf6-a6bfa610ac69"}
                                alt={``}
                                maxWidth='100%'
                                mx='auto'
                            />
                            <Stack ms={4} gap={0}>
                                <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>Username follow @makana </Text>
                                <Text fontFamily="Poppins" fontWeight={"light"} color={"#4A4A4A"} mt={2}>ID 12426172</Text>
                            </Stack>
                        </Flex>
                    </Flex>
                    <Divider />
                    <HStack justifyContent="space-between">
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>Total Harga</Text>
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"}>Rp 500</Text>
                    </HStack>


                </Stack>
            </Box>
            <Divider my={"10px"} />
            <Box
                backgroundColor="white"
                borderRadius="10px"
                boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                px={5}
                cursor={"pointer"}
                mt={"15px"}
                py="15px"
            >
                <Stack>
                    <Flex justifyContent="space-between">
                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"}>Lihat Detail Misi </Text>
                        <HiChevronRight color={"#00AA12"} />
                    </Flex>


                </Stack>
            </Box>



        </Stack >
    );
};

export default TransaksiDetailItem;
