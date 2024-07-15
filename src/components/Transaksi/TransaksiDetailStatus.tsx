
import {
    Box, Center, Divider, Flex, Stack, Text
} from "@chakra-ui/react";
import AppIcon from "../AppIcon";





const TransaksiDetailStatus = () => {
    return (
        <Stack gap={2} mt={"30px"} textAlign={"center"}>
            <Center>
                <AppIcon src={"successicon"} color={"black"} />
            </Center>
            <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#00AA12"}>Absensi Sukses </Text>
            <Text fontFamily="Poppins" fontWeight={"medium"} color={"#4C4C4C"}>ID Absensi : 12426172 </Text>
            <Text fontFamily="Poppins" fontWeight={"medium"} color={"#4C4C4C"}>15/10/2023, 16:10 PM </Text>
            <Divider mt={5} mb={5} />
        </Stack >
    );
};

export default TransaksiDetailStatus;
