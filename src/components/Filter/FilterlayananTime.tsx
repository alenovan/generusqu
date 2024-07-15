import { Box, Button, HStack, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import ModalSlideUp from "../Modal/ModalSlideUp";
import AppIcon from "../AppIcon";
import { useState } from "react"; // Import useState from React
import { DateRangePicker } from "../Input/DateRangePicker";
import { DateRange } from "react-day-picker";

type FilterProps = {
    open: boolean,
    onClose: () => void
};

const FilterLayananTime = (props: FilterProps) => {
    const priceList = [
        {
            label: "7 Hari Terakhir",
            body: "Kamis, 28 Sep 2023 - Rabu, 04 Oct 2023",
            value: "5",
        },
        {
            label: "30 Hari Terakhir",
            body: "Selasa, 05 Sep 2023 - Rabu, 04 Oct 2023",
            value: "4",
        },
        {
            label: "90 Hari Terakhir",
            body: "Jumat, 07 Jul 2023 - Rabu, 04 Oct 2023",
            value: "1",
        },
    ];

    const [selectedValue, setSelectedValue] = useState("");
    const [date, setDate] = useState<DateRange>({
        from: new Date(),
        to: new Date(),
    });
    return (
        <ModalSlideUp
            onClose={() => props.onClose}
            isOpen={props.open}
            title="Pilih Tanggal Transaksi"
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
                        <HStack key={i}>
                            <Radio
                                key={i}
                                value={item.value}
                                fontFamily={"Poppins"}
                                color={"#001F25"}
                                fontWeight={"semibold"}
                            >
                            </Radio>
                            <Stack gap={0} ms={"10px"}>
                                <Text fontFamily="Poppins" fontWeight="semibold" color="#001F25">
                                    {item.label}
                                </Text>
                                <Text fontFamily="Poppins" color="#6D6B6E">
                                    {item.body}
                                </Text>
                            </Stack>
                        </HStack>
                    ))}
                    <HStack>
                        <Radio
                            key={"custom"}
                            value={"custom"}
                            fontFamily={"Poppins"}
                            color={"#001F25"}
                            fontWeight={"semibold"}
                        >
                        </Radio>
                        <Stack gap={0} ms={"10px"}>
                            <Text fontFamily="Poppins" fontWeight="semibold" color="#001F25">
                                Pilih Tanggal
                            </Text>
                            <HStack mt={"10px"}>
                                <DateRangePicker value={date} onChange={setDate} />
                            </HStack>
                        </Stack>
                    </HStack>
                </Stack>
            </RadioGroup>
        </ModalSlideUp>
    );
};

export default FilterLayananTime;
