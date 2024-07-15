"use client";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Box, Center, Flex, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { useState } from "react";
import AppIcon from "@/components/AppIcon";
import TransaksiList from "@/components/Transaksi/TransaksiList";
import FilterLayanan from "@/components/Filter/Filterlayanan";
import FilterLayananTime from "@/components/Filter/FilterlayananTime";
export default function Transaksi() {
    const [activeTab, setActiveTab] = useState(0)
    const [openFilterMisi, setOpenFilterMisi] = useState(false);
    const [openFilterTime, setOpenFilterTime] = useState(false);
    return (
        <DashboardLayout
            bottomNavigation={true}
            meta={{
                title: "Beli Followers Tik Tok | Jasa Followers Tik Tok",
                description: 'Cara mudah beli followers Tik Tok dan like Tik Tok secara aman dengan harga termurah di Indonesia hanya di smm panel viralizer.'
            }}
            navbarHeader={{
                showBackButton: false,
            }}>
            <Box>
                <Flex h={"100px"} justifyContent="center" alignItems="center">
                    <Center>
                        <Text fontFamily="Poppins" fontWeight="semibold" fontSize={"18px"}
                        >
                            Histori Absen
                        </Text>
                    </Center>
                </Flex>
                <TransaksiList />
            </Box>

        </DashboardLayout>
    );
}
