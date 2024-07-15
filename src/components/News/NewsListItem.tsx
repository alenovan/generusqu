"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";


interface INews {
    image: string,
    body: string,
    title: string,
}
const NewsListItem = (props: INews) => {
    return (
        <Link passHref href={"/artikel/1"}>
            <Box
                borderWidth="1px"
                borderRadius="10px"
                mb={10}
                w="100%"
                boxShadow="md"
                backgroundColor="white"
            >
                <Box>
                    <Image
                        borderTopRadius="10px"
                        src={props.image}
                        w={"100%"}
                        alt="Deskripsi Gambar"

                    />
                </Box>
                <Flex align="center" justify="space-between" px={4} py={4}>
                    <Box>
                        <Text fontFamily="Poppins" fontWeight="semibold" fontSize={"18px"}
                        >
                            {props?.title ??
                                ""}
                        </Text>
                        <Text fontFamily="Poppins" fontWeight="light" fontSize={"13px"} color={"#4A4A4A"}
                        >
                            {props?.body ??
                                ""}
                        </Text>
                    </Box>
                </Flex >
            </Box >
        </Link>


    );
};

export default NewsListItem;
