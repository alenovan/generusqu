import { Box, Text } from "@chakra-ui/react";

const EditButton = () => {

    return (
        <div className="fixed z-20 bottom-0 left-0 w-full bg-white px-3 ">
            <div className="container">
                <Box
                    mx={"20px"}
                    borderRadius="15px"
                    py={"15px"}
                    mb={"15px"}
                    color={"White"}
                    background="#00AA12"
                    display="flex"
                    alignItems="center"
                    textAlign={"center"}
                    cursor="pointer"
                    _hover={{
                        bg: "gray.100",
                        color: "black"
                    }}
                >
                    <Text fontFamily="Poppins" textAlign="center" w="100%" fontWeight="medium" fontSize="13px" color="white" mr={"5px"}>
                        Simpan
                    </Text>
                </Box>
            </div>
        </div>

    );
};

export default EditButton;
