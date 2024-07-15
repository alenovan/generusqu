
import {
    Box, Stack,
    Text, Flex,
    Image,
    HStack
} from "@chakra-ui/react";
import AppIcon from "../AppIcon";
import Link from "next/link";

type RekeningListProps = {
};

const data = [
    {
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fimage%2033.png?alt=media&token=b684c476-3c31-4d65-a414-dbcf461b3d0d",
        norek: "52718058493",
        nama: "Andi Sufjan",
    },

]



const RekeningList = (props: RekeningListProps) => {
    return (
        <Box mb={20}>
            <Stack>
                {data?.map((item, i) => (
                    <>
                        <Link passHref href={"/rekening/" + item.nama}>
                            <Box
                                cursor={"pointer"}
                                backgroundColor="white"
                                borderRadius="10px"
                                boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                                px={5}
                                py="20px"
                            >
                                <HStack justifyContent="space-between">
                                    <HStack>
                                        <Image
                                            src={item.icon ?? ""}
                                            alt={`${item.icon} `}
                                            maxWidth='100%'
                                            mx='auto'
                                        />
                                        <Stack ms={4} gap={0}>
                                            <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>{item.norek ?? ""} </Text>
                                            <Text fontFamily="Poppins" fontWeight={"light"} color={"#4A4A4A"} >{item.nama ?? ""}</Text>
                                        </Stack>
                                    </HStack>
                                    <Stack textAlign={"right"}>
                                        <AppIcon src={"chevron-right-black"} color={"black"} />

                                    </Stack>
                                </HStack>
                            </Box>
                        </Link>
                    </>

                ))}
            </Stack>

        </Box >
    );
};

export default RekeningList;
