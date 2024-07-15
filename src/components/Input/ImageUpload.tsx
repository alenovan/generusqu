import React, { useCallback, useState } from "react";
import { ChakraProvider, Modal, ModalOverlay, ModalContent, Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import AppIcon from "../AppIcon";
import { Alert, AlertDescription } from "@/components/Alert";

const MAX_FILE_SIZE_MB = 2;

const ImageUpload = () => {
  const [isMaxFileSize, setIsMaxFileSize] = useState(false);
  const [fileToUpload, setFileToUpload] = useState<File | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        if (event.target.files[0].size > MAX_FILE_SIZE_MB * 1000 * 1024) {
          setIsMaxFileSize(true);
        } else {
          setIsMaxFileSize(false);
          setFileToUpload(event.target.files[0]);
        }
      }
    },
    []
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {fileToUpload ? (
        <ChakraProvider>
          <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
            <ModalOverlay />
            <ModalContent backgroundColor="transparent">
              <Box
                cursor={"pointer"}
                style={{
                  position: 'absolute',
                  top: "10px",
                  right: "10px",
                  zIndex: 1,
                }}
                onClick={closeModal}
              >
                <AppIcon src="cross-white" color="black" />
              </Box>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: "20px",
                }}
              >
                <Stack spacing={2} direction="column" align="center">
                  <Center>
                    <Image src={URL.createObjectURL(fileToUpload)} alt="Uploaded Image" />
                  </Center>
                </Stack>
              </Box>
            </ModalContent>
          </Modal>
        </ChakraProvider>
      ) : null}

      {fileToUpload ? (
        <div className="bg-[#F2F2F2] rounded-2xl py-[14px] px-4 border border-spacing-1 border-dashed border-[#919999] text-center text-[#6D6B6E] flex items-center gap-3">
          <AppIcon src={"image-file"} color={"black"} />
          <span className="flex-1 text-left text-sm">
            {fileToUpload.name}
            <span onClick={openModal}>
              <Text cursor="pointer" fontFamily="Poppins" fontWeight={"italic"} fontStyle={"italic"} color={"#00AA12"}>
                Lihat
              </Text>
            </span>
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setFileToUpload(undefined);
            }}
          >
            <AppIcon src={"cross"} color={"black"} />
          </span>
        </div>
      ) : (
        <>
          <input type="file" accept="image/*" hidden id="image-upload" onChange={handleChange} />
          <label htmlFor="image-upload">
            <div className="bg-[#F2F2F2] rounded-2xl p-7 border border-spacing-1 border-dashed border-[#919999] text-center text-[#6D6B6E]">
              <Center mb={1}>
                <AppIcon src={"upload-file"} color={"black"} />
              </Center>
              <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} mt={2}>
                Unggah foto screenshot
              </Text>
              <Text fontFamily="Poppins" fontWeight={"regular"} color={"#6D6B6E"} mt={2}>
                max {MAX_FILE_SIZE_MB} MB
              </Text>
            </div>
          </label>
        </>
      )}
      {isMaxFileSize ? (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>Max file size!</AlertDescription>
        </Alert>
      ) : null}
    </div>
  );
};

export default ImageUpload;
