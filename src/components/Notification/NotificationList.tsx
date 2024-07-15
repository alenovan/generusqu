
import {
    Box, Stack,
    Text, Flex,
    Image,
    Container,
    HStack
} from "@chakra-ui/react";
const data = [
    {
        time: "Hari Ini, 1 Oktober 2023",
        data: [
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012335.png?alt=media&token=cceb6a7e-552d-4437-ae04-6a17731f01e0",
                title: "Lorem ipsum",
                body: "Lorem ipsum dolor sit amet consect",
                time: "20.00 PM",
            },
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012335.png?alt=media&token=cceb6a7e-552d-4437-ae04-6a17731f01e0",
                title: "Lorem ipsum",
                body: "Lorem ipsum dolor sit amet consect",
                time: "16.00 PM",
            },
        ]
    }, {
        time: "Rabu, 25 September 2023",
        data: [
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012335.png?alt=media&token=cceb6a7e-552d-4437-ae04-6a17731f01e0",
                title: "Lorem ipsum",
                body: "Lorem ipsum dolor sit amet consect",
                time: "20.00 PM",
            },
            {
                icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2012335.png?alt=media&token=cceb6a7e-552d-4437-ae04-6a17731f01e0",
                title: "Lorem ipsum",
                body: "Lorem ipsum dolor sit amet consect",
                time: "16.00 PM",
            },
        ]
    },

]



const NotificationList = () => {
    return (
        <Container mt={5}>
            {data?.map((item, i) => (
                <Stack mb={"25px"} key={i}>
                    <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#4A4A4A"} mb={2}>{item.time}</Text>
                    {item.data?.map((detail, i) => (
                        <Box
                            key={i}
                            backgroundColor="white"
                            borderRadius="10px"
                            boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                            px={5}
                            py="10px"
                        >
                            <Stack>
                                <HStack gap={5}>
                                    <Image
                                        src={detail.icon ?? ""}
                                        alt={`${detail.icon} `}
                                    />
                                    <Stack gap={1}>
                                        <Text fontFamily="Poppins" fontWeight={"semibold"} color={"#001F25"}>{detail.title} </Text>
                                        <Text fontFamily="Poppins" color={"#4A4A4A"}>{detail.body}</Text>
                                        <Text fontFamily="Poppins" fontWeight={"light"} color={"#898989"}>{detail.time}</Text>
                                    </Stack>
                                </HStack>

                            </Stack>
                        </Box>
                    ))}


                </Stack>

            ))}
        </Container>
    );
};

export default NotificationList;
