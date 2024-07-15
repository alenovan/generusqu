import { Box, Center, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface ModalSlideUp extends ModalProps {
  headerContent?: ReactNode,
  title?: string,
  cardNoGap?: boolean
}

const ModalSlideUp = (props: ModalSlideUp) => {
  const { children, headerContent, title, cardNoGap, ...restProps } = props
  return (
    <Modal
      isCentered
      motionPreset='slideInBottom'
      {...restProps}
    >
      <ModalOverlay />
      <ModalContent borderRadius="md"
        borderTopLeftRadius="30px"
        borderTopRightRadius="30px" >
        <Center>
          <Box w={"80px"} height={"5px"} backgroundColor={"rgba(23, 14, 43, 0.29)"} borderRadius="xl" my={"20px"}>

          </Box>
        </Center>
        <Flex p="20px" alignItems="center">

          <Flex alignItems="center" mr="auto">
            <ModalHeader flexGrow={1} color={"#4A4A4A"} fontFamily={"Poppins"} fontWeight={"semibold"}>{title}</ModalHeader>
          </Flex>
          {!!headerContent && <Box ml="auto">{headerContent}</Box>}
        </Flex>
        <ModalBody px={cardNoGap ? 0 : "20px"}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal >
  )
}

export default ModalSlideUp
