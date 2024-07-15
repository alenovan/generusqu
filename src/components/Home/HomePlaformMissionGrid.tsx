import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import PlatformListList from "../Misi/PlatformList";

const HomePlaformMissionGrid = () => {
    return (
        <Box my={6}>
            <Container>
                <Flex alignItems='center' justifyContent='space-between' mb={1}>
                    <Text fontWeight='semibold' fontFamily="Poppins" fontSize='18px' color={"#1D1D1D"}>
                        Pilih Misi
                    </Text>
                </Flex>
                <Box mt={5}></Box>
                <PlatformListList limit={4} platform='media-sosial' />
            </Container>
        </Box>
    );
};

export default HomePlaformMissionGrid;
