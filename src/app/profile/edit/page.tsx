"use client";

import DashboardLayout from "@/components/Layout/DashboardLayout";
import EditButton from "@/components/Profile/EditButton";
import {
  Box,
  FormControl,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Container,
  InputGroup,
  InputRightElement,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <DashboardLayout
      bottomNavigation={false}
      px="15px"
      meta={{
        title: "Generus Qu",
        description: "Absensi Generus",
      }}
      navbarHeader={{
        showBackButton: true,
        title: "Lengkapi Data Diri",
      }}
    >
      <Container maxW="container.md" h="100vh" overflowY="auto">
        <Stack>
          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"20px"}
          >
            Email
          </Text>
          <FormControl id="nama-lengkap">
            <Input
              borderRadius={"10px"}
              placeholder=" "
              type="text"
              bg="#F2F2F2"
              h={"45px"}
              fontSize={"13px"}
              fontFamily="Poppins"
              fontWeight="medium"
              color="#1D1D1D"
              onChange={(e) => {}}
            />
          </FormControl>

          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"20px"}
          >
            Password
          </Text>
          <FormControl id="nama-lengkap">
            <InputGroup>
              <Input
                borderRadius={"10px"}
                placeholder=" "
                type={showPassword ? "text" : "password"}
                bg="#F2F2F2"
                h={"45px"}
                fontSize={"13px"}
                fontFamily="Poppins"
                fontWeight="medium"
                color="#1D1D1D"
                onChange={(e) => {}}
              />
              <InputRightElement h={"full"}>
                <IconButton
                  variant="ghost"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={
                    showPassword ? (
                      <Icon as={ViewOffIcon} />
                    ) : (
                      <Icon as={ViewIcon} />
                    )
                  }
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"20px"}
          >
            Nama Lengkap
          </Text>
          <FormControl id="nama-lengkap">
            <Input
              borderRadius={"10px"}
              placeholder=" "
              type="text"
              bg="#F2F2F2"
              h={"45px"}
              fontSize={"13px"}
              fontFamily="Poppins"
              fontWeight="medium"
              color="#1D1D1D"
              onChange={(e) => {}}
            />
          </FormControl>

          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"10px"}
          >
            Tanggal Lahir
          </Text>
          <HStack>
            <FormControl id="tanggal-waktu">
              <Input
                bg="#F2F2F2"
                borderRadius="10px"
                fontFamily="Poppins"
                fontSize={"13px"}
                fontWeight="medium"
                color="#1D1D1D"
                h={"45px"}
                type="datetime-local"
                placeholder="Pilih tanggal dan waktu"
                onChange={(e) => {}}
              />
            </FormControl>
          </HStack>

          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"10px"}
          >
            Nomor Whatsapp
          </Text>
          <HStack>
            <Box
              backgroundColor="#F2F2F2"
              borderRadius="10px"
              p={"10px"}
              mr={"10px"}
            >
              <Text
                fontFamily="Poppins"
                fontWeight={"medium"}
                color={"#1D1D1D"}
                fontSize={"15px"}
                mr={"5px"}
              >
                +62
              </Text>
            </Box>
            <FormControl id="alamat">
              <Input
                borderRadius={"10px"}
                placeholder=" "
                type="text"
                bg="#F2F2F2"
                h={"45px"}
                fontSize={"13px"}
                fontFamily="Poppins"
                fontWeight="medium"
                color="#1D1D1D"
                onChange={(e) => {}}
              />
            </FormControl>
          </HStack>
          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"10px"}
          >
            IG
          </Text>
          <HStack>
            <FormControl id="alamat">
              <Input
                borderRadius={"10px"}
                placeholder=" "
                type="text"
                bg="#F2F2F2"
                h={"45px"}
                fontSize={"13px"}
                fontFamily="Poppins"
                fontWeight="medium"
                color="#1D1D1D"
                onChange={(e) => {}}
              />
            </FormControl>
          </HStack>
          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"10px"}
          >
            Kelompok
          </Text>
          <Select
            bg="#F2F2F2"
            borderRadius="10px"
            fontFamily="Poppins"
            fontSize={"13px"}
            fontWeight="medium"
            h={"45px"}
            color="#1D1D1D"
            placeholder="Kelompok"
            onChange={(e) => {}}
          ></Select>

          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"10px"}
          >
            Jenis Kelamin
          </Text>
          <Select
            bg="#F2F2F2"
            borderRadius="10px"
            fontFamily="Poppins"
            fontSize={"13px"}
            fontWeight="medium"
            h={"45px"}
            color="#1D1D1D"
            placeholder="Jenis Kelamin"
            onChange={(e) => {}}
          >
            <option value="perempuan">Perempuan</option>
            <option value="laki-laki">Laki-laki</option>
          </Select>

          <Text
            fontFamily="Poppins"
            fontWeight={"medium"}
            color={"#1D1D1D"}
            mt={"10px"}
          >
            Upload Foto Profile
          </Text>
          <FormControl id="upload-foto">
            <Input
              type="file"
              accept="image/*"
              bg="#F2F2F2"
              borderRadius="10px"
              fontFamily="Poppins"
              fontSize={"13px"}
              fontWeight="medium"
              color="#1D1D1D"
              h={"45px"}
              p={1}
              onChange={(e) => {}}
            />
          </FormControl>
          <Box mx={"20px"}>
            <EditButton />
          </Box>
        </Stack>
      </Container>
    </DashboardLayout>
  );
}
