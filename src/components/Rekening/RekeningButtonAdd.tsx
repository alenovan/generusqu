import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import AppIcon from "../AppIcon";
import Link from "next/link";

const RekeningButtonAdd = () => {

    return (
        <div className="fixed z-20 bottom-0 left-0 w-full bg-white px-3 ">
            <div className="container">

                <Box
                    borderRadius="15px"
                    py={"15px"}
                    mb={"15px"}
                    color={"White"}
                    background="#00AA12"
                    display="flex"
                    alignItems="center"
                    textAlign={"center"}
                    cursor="pointer"
                    justifyContent="center"
                    _hover={{
                        bg: "gray.100",
                        fontcolor: "black"
                    }}
                >
                    <Link passHref href={"/rekening/tambah"}>
                        <Flex>
                            <AppIcon src={"plus 1"} color={"black"} />
                            <Text fontFamily="Poppins" textAlign="center" w="100%" fontWeight="medium" fontSize="13px" color="white" mt={"3px"}>
                                Tambah Rekening Baru
                            </Text>
                        </Flex>
                    </Link>
                </Box>

            </div>
        </div >

    );
};

export default RekeningButtonAdd;
