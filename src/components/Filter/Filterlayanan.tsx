import { Box, Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import ModalSlideUp from "../Modal/ModalSlideUp";
import AppIcon from "../AppIcon";
import { useState } from "react"; // Import useState from React

type FilterProps = {
    open: boolean,
    onClose: () => void
};

const FilterLayanan = (props: FilterProps) => {
    const priceList = [
        {
            label: "Instagram",
            value: "5",
        },
        {
            label: "Youtube",
            value: "4",
        },
        {
            label: "Facebook",
            value: "1",
        },
        {
            label: "Tiktok",
            value: "2",
        },
        {
            label: "Google Maps",
            value: "3",
        },
    ];

    const [selectedValue, setSelectedValue] = useState("");

    return (
        <ModalSlideUp
            onClose={() => props.onClose}
            isOpen={props.open}
            title="Pilih Jenis Misi"
            headerContent={
                <Box
                    cursor={"pointer"}
                    onClick={(e) => {
                        props.onClose()
                    }}
                >
                    <AppIcon src={"cross"} color={"black"} />
                </Box>
            }
        >
            <RadioGroup
                value={selectedValue}
                mb="24px"
                colorScheme="green"
                onChange={(val) => {
                    setSelectedValue(val.toString());
                }}
            >
                <Stack spacing="24px">
                    {priceList.map((item, i) => (
                        <Radio
                            key={i}
                            value={item.value}
                            fontFamily={"Poppins"}
                            color={"#001F25"}
                            fontWeight={"semibold"}
                        >
                            {item.label}
                        </Radio>
                    ))}
                </Stack>
            </RadioGroup>
        </ModalSlideUp>
    );
};

export default FilterLayanan;
