
import {
    Box, Stack,
    Text, Flex,
    Image
} from "@chakra-ui/react";
import Link from "next/link";
const data = [
    {
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FFrame%201.png?alt=media&token=b3b45624-d1fa-4e58-b93c-48e3e4a41d18",
        title: "Makin Seru! Satu Kali Tap Hasilkan Uang",
        body: "Lorem ipsum dolor sit amet consectetur. Luctus turpis vel duis ",
    },
    {
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FFrame%202.png?alt=media&token=babf23b7-fa8e-42c6-b9b3-9359a0cb4853",
        title: "Makin Seru! Satu Kali Tap Hasilkan Uang",
        body: "Lorem ipsum dolor sit amet consectetur. Luctus turpis vel duis ",
    },
    {
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FFrame%203.png?alt=media&token=39b13d6e-8a7d-40bb-b22c-32cb1e8fdc7f",
        title: "Makin Seru! Satu Kali Tap Hasilkan Uang",
        body: "Lorem ipsum dolor sit amet consectetur. Luctus turpis vel duis ",
    },

]



const ArtikelList = () => {
    return (
        <Box mt={5}>
            {data?.map((item, i) => (
                <Link key={i} passHref href={"/artikel/1"}>
                    <Stack mb={"25px"} cursor={"pointer"}>
                        <Box
                        >
                            <Flex gap={5}>
                                <Image
                                    h={{ base: "90px", md: "100px" }}
                                    borderRadius="10px"
                                    src={item.icon ?? ""}
                                    alt={`${item.icon} `}
                                />
                                <Stack gap={2}>
                                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#1D1D1D"}>{item.title} </Text>
                                    <Text fontFamily="Poppins" fontSize={{ base: "12px", md: "13px" }} color={"#6D6B6E"}>{item.body}</Text>
                                </Stack>
                            </Flex>

                        </Box>
                    </Stack>
                </Link>

            ))}
        </Box>
    );
};

export default ArtikelList;
