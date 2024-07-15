import AppIcon from "@/components/AppIcon";
import Card from "@/components/Card";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
type PlatformMissionProps = {
    title: string;
    icon: string;
    mission: string | number;
    link: string;
    banner: string;
    platfrom: string;
};

const PlatformMission = (props: PlatformMissionProps) => {
    const { icon, mission, link, title, platfrom } = props;
    return (
        <Link
            href={{
                pathname: link,
            }}
            passHref>
            <Box as='a' display='block' width='100%'>
                <Card>
                    <Flex alignItems='center' gap={4}>
                        <Box
                            flexBasis='48px'
                            width='48px'
                            height='48px'
                            padding={"7px"}
                            display='inline-flex'
                            alignItems='center'
                            justifyContent='center'
                            backgroundColor='rgba(0, 170, 18, 0.09)'
                            borderRadius='16px'>
                            <Image src={icon} alt={icon} />
                        </Box>
                        <Box flexGrow={1}>
                            <Text fontWeight='medium' mb={2}>
                                {title}
                            </Text>
                            <Text fontSize='xs'>{mission} Misi</Text>
                        </Box>
                        <AppIcon src='chevron-right' />
                    </Flex>
                </Card>
            </Box>
        </Link>
    );
};

export default PlatformMission;
