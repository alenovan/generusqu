import {
    Box, Stack,
    Text, Flex,
    Image, HStack
} from "@chakra-ui/react";
import Link from "next/link";



const data = [
    {
        id: 1,
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012336.png?alt=media&token=d879c3d5-7d43-46a9-aaf6-a6bfa610ac69",
        target: "@makana",
        tugas: "Validasi follow ",
        limit: "1.000",
    },
    {
        id: 2,
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012336.png?alt=media&token=d879c3d5-7d43-46a9-aaf6-a6bfa610ac69",
        target: "@makana",
        tugas: "Validasi follow ",
        limit: "1.000",
    }
]


const MisiListSampingan = () => {
    return (
        <Stack mt={"10px"}>
            {data?.map((item, i) => (
                <Link key={i} passHref href={"Instagram/validasi/" + item.id}>
                    <Box
                        cursor={"pointer"}
                        backgroundColor="white"
                        borderRadius="10px"
                        boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                        px={5}
                        mb={"20px"}
                        py="10px"
                    >
                        <Stack>
                            <HStack justifyContent="space-between">
                                <HStack>
                                    <Image
                                        src={item.icon ?? ""}
                                        alt={`${item.icon} `}
                                        maxWidth='100%'
                                        mx='auto'
                                    />
                                    <Stack ms={4} gap={0}>
                                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>{item.tugas} </Text>
                                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>{item.target}</Text>
                                        <Text fontFamily="Poppins" fontSize="12px" fontWeight={"light"} color={"#4A4A4A"} mt={2}>Kuota : {item.limit}</Text>
                                    </Stack>
                                </HStack>
                                <Stack textAlign={"right"}>
                                    <Box
                                        as='span'
                                        display='inline-block'
                                        py={2}
                                        px={5}
                                        cursor={"pointer"}
                                        textAlign={"center"}
                                        fontFamily="Poppins" fontWeight={"semibold"}
                                        borderRadius={25}
                                        bg={"#00AA12"}
                                        fontSize='xs'
                                        color={"#FFFFFF"}>
                                        Buka
                                    </Box>
                                </Stack>
                            </HStack>


                        </Stack>
                    </Box></Link>
            ))}
        </Stack>
    );
};

export default MisiListSampingan;
