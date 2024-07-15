import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import PlatformListList from "../Misi/PlatformList";
import AppIcon from "../AppIcon";
import NewsList from "../News/NewsList";

const HomeNews = () => {
    return (
        <Box my={6}>
            <Container>
                <Flex alignItems='center' justifyContent='space-between' mb={5}>
                    <Text fontWeight='semibold' fontFamily="Poppins" fontSize='18px' color={"#1D1D1D"}>
                        Baca Artikel
                    </Text>
                    <Flex mr={"10px"}>
                        <Link passHref href={"/artikel"}>
                            <Text fontWeight='medium' fontFamily="Poppins" fontSize='12px' color={"#6D6B6E"} mr={"5px"}>
                                Lihat Semua
                            </Text>
                        </Link>
                        <AppIcon src={"chevron-right"} color={"black"} />
                    </Flex>
                </Flex>
                <NewsList limit={4} />
            </Container>
        </Box>
    );
};

export default HomeNews;
