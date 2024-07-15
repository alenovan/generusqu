import AppIcon from '@/components/AppIcon'
import { Box, Center, Container, Flex, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const menu = [
  {
    title: "Tarik",
    icon: "tarik",
    link: "/penarikan"
  },
  {
    title: "Riwayat",
    icon: "riwayat",
    link: "/penarikan/history"
  }
]

const HomePageHeaderMenu = () => {
  return (
    <Box
      mt="-40px"
      position="relative"
    >
      <Container>
        <Box
          backgroundColor="white"
          borderRadius="8px"
          boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
          px={5}
          py="10px"
        >
          <HStack gap={6} justifyContent="space-between">
            <Box>
              <HStack>
                <AppIcon src={"wallet"} h={"35px"} />
                <Text ml={2} fontSize={"18px"} fontWeight="semibold" fontFamily={"Poppins"} color={"#1D1D1D"}>Rp 120.000</Text>
              </HStack>

            </Box>


            <HStack gap={6}>
              {menu.map((item, i) => (
                <Link key={i} passHref href={item.link}>
                  <Box textAlign="center" as="a" display="block">
                    <Box
                      width="40px"
                      height="40px"
                      backgroundColor="white"
                      borderRadius="8px"
                      boxShadow="0px 5px 10px rgba(56, 89, 147, 0.05);"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto" // Center horizontally
                      my="auto" // Center vertically
                    >
                      <AppIcon src={item.icon} />
                    </Box>

                    <Text mt={2} fontSize={"13px"} fontWeight="medium" fontFamily="Poppins" color="#1D1D1D">
                      {item.title}
                    </Text>
                  </Box>
                </Link>
              ))}
            </HStack>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePageHeaderMenu